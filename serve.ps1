# Local static server with Range support for audio/video streaming.
param(
  [int]$Port = 8080,
  [string]$Root = $PSScriptRoot
)

$mime = @{
  ".html" = "text/html; charset=utf-8"
  ".css"  = "text/css; charset=utf-8"
  ".js"   = "application/javascript; charset=utf-8"
  ".json" = "application/json; charset=utf-8"
  ".png"  = "image/png"
  ".jpg"  = "image/jpeg"
  ".jpeg" = "image/jpeg"
  ".jfif" = "image/jpeg"
  ".webp" = "image/webp"
  ".svg"  = "image/svg+xml"
  ".mp3"  = "audio/mpeg"
  ".m4a"  = "audio/mp4"
  ".mp4"  = "video/mp4"
  ".mts"  = "video/mp2t"
  ".m2ts" = "video/mp2t"
}

$listener = $null
$startedPort = $Port

for ($p = $Port; $p -le ($Port + 10); $p++) {
  try {
    $prefix = "http://localhost:$p/"
    $l = New-Object System.Net.HttpListener
    $l.Prefixes.Add($prefix)
    $l.Start()
    $listener = $l
    $startedPort = $p
    break
  } catch {
    Write-Warning "Port $p is in use, trying next port..."
  }
}

if ($null -eq $listener) {
  Write-Error "Could not bind to any port between $Port and $($Port + 10)."
  exit 1
}

$siteUrl = "http://localhost:$startedPort/"
Write-Host "=========================================================="
Write-Host " Jiangnan Sizhu Archive running at: $siteUrl"
Write-Host " Press Ctrl+C in this console to stop the local server."
Write-Host "=========================================================="
Start-Process $siteUrl

function Get-SafePath([string]$urlPath) {
  $rel = [Uri]::UnescapeDataString($urlPath.TrimStart("/"))
  if ([string]::IsNullOrWhiteSpace($rel)) { $rel = "index.html" }
  $full = [System.IO.Path]::GetFullPath((Join-Path $Root $rel))
  $rootFull = [System.IO.Path]::GetFullPath($Root)
  if (-not $full.StartsWith($rootFull, [System.StringComparison]::OrdinalIgnoreCase)) {
    return $null
  }
  return $full
}

try {
  while ($listener.IsListening) {
    $ctx = $listener.GetContext()
    $req = $ctx.Request
    $res = $ctx.Response
    try {
      $path = Get-SafePath $req.Url.AbsolutePath
      if (-not $path -or -not (Test-Path -LiteralPath $path)) {
        $res.StatusCode = 404
        $buf = [Text.Encoding]::UTF8.GetBytes("Not found")
        $res.OutputStream.Write($buf, 0, $buf.Length)
        $res.Close()
        continue
      }

      $ext = [IO.Path]::GetExtension($path).ToLowerInvariant()
      $res.ContentType = $(if ($mime.ContainsKey($ext)) { $mime[$ext] } else { "application/octet-stream" })
      $res.AddHeader("Accept-Ranges", "bytes")
      $res.AddHeader("Access-Control-Allow-Origin", "*")

      $fs = [IO.File]::OpenRead($path)
      try {
        $length = $fs.Length
        $start = [int64]0
        $end = $length - 1
        $range = $req.Headers["Range"]

        if ($range -and $range -match "bytes=(\d*)-(\d*)") {
          if ($Matches[1] -ne "") { $start = [int64]$Matches[1] }
          if ($Matches[2] -ne "") { $end = [int64]$Matches[2] }
          if ($start -gt $end -or $start -ge $length) {
            $res.StatusCode = 416
            $res.Close()
            continue
          }
          $res.StatusCode = 206
          $res.AddHeader("Content-Range", "bytes $start-$end/$length")
        }

        $count = $end - $start + 1
        $res.ContentLength64 = $count
        $null = $fs.Seek($start, "Begin")
        $buffer = New-Object byte[] 65536
        $remaining = $count
        while ($remaining -gt 0) {
          $read = $fs.Read($buffer, 0, [Math]::Min($buffer.Length, $remaining))
          if ($read -le 0) { break }
          $res.OutputStream.Write($buffer, 0, $read)
          $remaining -= $read
        }
      } finally {
        $fs.Close()
      }
    } catch {
      try { $res.StatusCode = 500 } catch {}
    } finally {
      try { $res.OutputStream.Close(); $res.Close() } catch {}
    }
  }
} finally {
  $listener.Stop()
}
