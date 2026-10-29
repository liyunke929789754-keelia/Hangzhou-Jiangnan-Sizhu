/**
 * Four Voices of Jiangnan Sizhu · Interactive Audio-Visual Archive
 * Ethnomusicological Research by Yunke Li
 */

const CATALOG = [
  {
    id: "notation",
    kicker: "Category 01 · 记谱传承",
    titleZh: "江南丝竹记谱法",
    titleEn: "Jiangnan Sizhu Music Notation",
    photo: "images/music notation.png",
    copy: "Traditional Jiangnan Sizhu was historically transmitted through oral mimesis and transcribed using traditional Gongche notation (工尺谱), which uses the character pitch sequence 上、尺、工、凡、六、五、乙 (Shang, Che, Gong, Fan, Liu, Wu, Yi). Figure 2.6 maps Gongche notation directly to Western staff notation (C4–B4) and numbered musical notation (1 2 3 4 5 6 7), showing the historical transition toward universal modern notation driven by Li Huaxuan and 20th-century music reformers.",
    items: [
      {
        fig: "2.6",
        title: "2.6 Gongche Notation, Staff Notation, and Numbered Notation in C Major",
        titleZh: "工尺谱（上尺工凡六五乙）、五线谱与简谱（C大调）三谱对照",
        note: "A tripartite comparative demonstration in C Major. The traditional Gongche notation (工尺谱) pitch sequence is 上、尺、工、凡、六、五、乙 (Shang, Che, Gong, Fan, Liu, Wu, Yi), which directly corresponds to C4, D4, E4, F4, G4, A4, B4 in Western staff notation and 1, 2, 3, 4, 5, 6, 7 in numbered musical notation (简谱). This reflects the historical process of standardizing traditional character-based mnemonics into modern pedagogical notation.",
        scoreImg: "images/music notation.png",
        scoreThumb: "images/music notation.png",
        scoreCaption: "Fig. 2.6 Gongche Notation (工尺谱: 上 尺 工 凡 六 五 乙), Staff Notation, and Numbered Notation in C Major",
        src: "media/fig-2.6.m4a",
        type: "audio",
        wide: true,
        tags: ["Gongche: 上尺工凡六五乙", "Notation Reform", "Numbered Notation", "Staff Notation"]
      },
      {
        title: "Baoshan Sizhu Group Performing at Wedding Ceremony in 1997, \"Xinjie\" (Cross the Street)",
        titleZh: "宝山丝竹社在1997年婚礼仪式上演奏《行街》",
        note: "",
        src: "media/01-baoshan-wedding-1997.mp4",
        type: "video",
        wide: true,
        tags: ["1997 Wedding Fieldwork", "Baoshan Sizhu Group", "Xinjie (Cross the Street)"]
      }
    ]
  },
  {
    id: "golden-sun",
    kicker: "Category 02 · 民间传承",
    titleZh: "金朝晖江南丝竹",
    titleEn: "Golden Sun Jiangnan Sizhu",
    photo: "images/golden-sun.png",
    copy: "Golden Sun (金朝晖江南丝竹社) represents Hangzhou's senior community-based folk ensemble practice, regularly rehearsing in the Yingjiaqiao Community and performing for traditional holidays. Upholding authentic silk-and-bamboo aesthetics, their performances showcase unwritten heterophonic textures (同韵异态), spontaneous ornamentation techniques ('add-orientation' and 'lose-orientation'), and ancient qupai lineages descending from Kunqu opera to the cyclical Five Generations of Six Ban suite.",
    items: [
      {
        fig: "2.2",
        title: "2.2 “Jiangjun Desheng Ling” (The Victory of Marshal) in Kunqu Opera",
        titleZh: "昆曲传统曲牌《将军得胜令》",
        note: "In traditional Chinese opera, qupai serve ceremonial, entrance, and transition functions. Preserved from ancient military and court percussion into Kunqu, this qupai is played by the percussion and wind ensemble to seize the audience's attention before stage action begins.",
        scoreImg: "images/fig-2_2.png",
        scoreCaption: "Fig. 2.2 Score Transcription: “Jiangjun Desheng Ling” in Kunqu Opera",
        src: "media/fig-2.2.m4a",
        type: "audio",
        wide: false,
        tags: ["Kunqu Opera", "Qupai", "Military Lineage", "Percussion Ensemble"]
      },
      {
        fig: "2.3",
        title: "2.3 “Jiangjun Desheng Ling” (The Victory of Marshal) in Jiangnan Sizhu",
        titleZh: "江南丝竹器乐曲牌《将军得胜令》",
        note: "The ornamented Jiangnan Sizhu instrumental reading of the same titled qupai melody by Golden Sun. Placing Figures 2.2 and 2.3 side by side reveals how sizhu players embellish the bare operatic skeletal line with passing tones, tremolos, and heterophonic polyphony.",
        scoreImg: "images/fig-2_3.png",
        scoreCaption: "Fig. 2.3 Score Transcription: “Jiangjun Desheng Ling” in Jiangnan Sizhu",
        src: "media/fig-2.3.m4a",
        type: "audio",
        wide: false,
        tags: ["Jiangnan Sizhu", "Heterophony", "Melodic Ornamentation"]
      },
      {
        fig: "3.2",
        title: "3.2 “Xingjie” Section B: Featuring an Accelerated and Decorated Verse",
        titleZh: "《行街》B段：变奏加速与润腔加花",
        note: "One of the cardinal 'Great Eight Repertoires' (江南丝竹八大名曲). Section B accelerates dynamically while demonstrating the core improvisational principles of Sizhu: 'your complexity, my simplicity; your restraint, my ornamentation' (你繁我简，你简我繁). Dizi and erhu weave seamlessly between stepwise runs and sparse counter-lines.",
        scoreImg: "images/fig-3_2.png",
        scoreCaption: "Fig. 3.2 Score Transcription: “Xingjie” Section B Ornamentation Analysis",
        src: "media/fig-3.2.m4a",
        type: "audio",
        wide: false,
        tags: ["Eight Repertoires", "Add-Orientation", "Lose-Orientation", "Accelerando"]
      },
      {
        fig: "3.3",
        title: "3.3 “Jinshe Kuangwu” (Dance of the Golden Snake)’s music texture in A section",
        titleZh: "《金蛇狂舞》A段音乐织体分析",
        note: "Adapted in 1934 by leftist composer Nie Er from the traditional Sizhu piece 'Ba Ban' (Eight Ban). Unlike traditional heterophony, Nie Er introduced Western homophonic orchestration: pipa and erhu state the main unison theme while dizi doubles at the octave and guzheng supplies rhythmic harmonic drive.",
        scoreImg: "images/fig-3_3.png",
        scoreCaption: "Fig. 3.3 Score Transcription: “Jinshe Kuangwu” A Section Texture",
        src: "media/fig-3.3.mp3",
        type: "audio",
        wide: false,
        tags: ["Nie Er", "Homophonic Texture", "Ba Ban Adaption", "Western Orchestration"]
      },
      {
        fig: "3.7",
        title: "3.7 Third Movement of Five Generations of Six Ban",
        titleZh: "《五代同堂·六板》第三乐章（快六板/花六板）",
        note: "Recorded in the 1980s by inheritors Shen Fengquan and Song Jinglian for the National Folk Instrument Archive. A five-movement variation suite (Theme + Var 1–4) traditionally played at teahouses and rituals without rigid notation, relying upon spontaneous modal variation and rhythmic momentum.",
        scoreImg: "images/fig-3_7.png",
        scoreCaption: "Fig. 3.7 Score Transcription: Third Movement of Five Generations of Six Ban",
        src: "media/fig-3.7.m4a",
        type: "audio",
        wide: false,
        tags: ["Six Ban Suite", "Folk Heritage", "Shen Fengquan", "Cyclical Form"]
      },
      {
        title: "Chunjiang Huayueye (Spring River Flower Moon Night)",
        titleZh: "《春江花月夜》金朝晖演奏版",
        note: "",
        src: "media/02-golden-sun-chunjiang-huayueye.mp4",
        type: "video",
        wide: true,
        tags: ["Golden Sun Ensemble", "Chunjiang Huayueye", "Traditional Repertoire"]
      }
    ]
  },
  {
    id: "neo-yuefu",
    kicker: "Category 03 · 舞台交融",
    titleZh: "黄龙洞新乐府",
    titleEn: "Neo-Yuefu",
    photo: "images/neo-yuefu.png",
    copy: "Evolving from the 1984 Hangzhou Jiangnan Sizhu Group and established at the scenic Huanglong Cave (Yellow Dragon Cave) in 1989, Neo-Yuefu (黄龙洞新乐府) embodies the professionalization, Westernized orchestration balance (incorporating cello/gehu), and standardized stagecraft of modern Jiangnan Sizhu. This chapter highlights crossover folk adaptations, scenic tourist yacht stagings, and energetic China Wind martial anthems.",
    items: [
      {
        fig: "3.8",
        title: "3.8 Example of the Main Melody of Moderatamente and Ornamentation Six Ban",
        titleZh: "中花六板新乐府主旋律示范",
        note: "Reconstructed by master Shen Fengquan for Huanglong Cave Neo-Yuefu. Unlike spontaneous folk improvisation, this standardized version relies on fixed multi-layered ensemble scores, predetermined timing, and refined chamber acoustics. Toggle below between the stage performance and field rehearsal.",
        scoreImg: "images/fig-3_8.png",
        scoreCaption: "Fig. 3.8 Score Transcription: Moderatamente and Ornamentation Six Ban",
        src: "media/fig-3.8.mp4",
        rehearsalSrc: "media/fig-3.8-rehearsal.mp4",
        type: "video",
        wide: false,
        tags: ["Neo-Yuefu", "Six Ban", "Shen Fengquan", "Stage & Rehearsal Takes"]
      },
      {
        fig: "4.12",
        title: "4.12 Example of Neo-Yuefu Version of Girl’s Love",
        titleZh: "黄龙洞新乐府《女儿情》景区演出版",
        note: "Demonstrating Neo-Yuefu's homophonic arrangement of Girl’s Love.",
        src: "media/fig-4.12.mp4",
        type: "video",
        wide: true,
        tags: ["Homophonic Accompaniment", "Grand Canal Yacht"]
      },
      {
        fig: "4.24",
        title: "Figure 4.24 Jasmine Flower (Neo-Yuefu Version)",
        titleZh: "《茉莉花》（黄龙洞新乐府演奏版）",
        note: "",
        scoreImg: "images/fig-4_24_score.png",
        scoreCaption: "Fig. 4.24 Ensemble Score: Jasmine Flower (Neo-Yuefu Version: Pipa, Erhu, Dizi, Zhongruan, Yangqin)",
        src: "media/03-jasmine-flower-neo-yuefu.mp4",
        type: "video",
        wide: true,
        tags: ["Figure 4.24", "Jasmine Flower Score", "Neo-Yuefu Ensemble"]
      },
      {
        title: "“Huanle Ge” (Song of Happiness, Neo-Yuefu Performing Version)",
        titleZh: "《欢乐歌》（黄龙洞新乐府演奏版）",
        note: "",
        src: "media/03-neo-yuefu-huanle-ge.mp4",
        type: "video",
        wide: false,
        tags: ["Huanle Ge (Song of Happiness)", "Neo-Yuefu Performance", "Traditional Repertoire"]
      },
      {
        title: "“Da Yu” (Big Fish, Neo-Yuefu Performing Version)",
        titleZh: "《大鱼》（黄龙洞新乐府演奏版）",
        note: "",
        src: "media/03-neo-yuefu-dayu.mp4",
        type: "video",
        wide: false,
        tags: ["Da Yu (Big Fish)", "Neo-Yuefu Performance", "Contemporary Crossover"]
      },
      {
        title: "“Daojian Rumeng” (Swords and Dreams, Neo-Yuefu Performing Version)",
        titleZh: "《刀剑如梦》（黄龙洞新乐府演奏版）",
        note: "",
        src: "media/03-neo-yuefu-daojian-rumeng.mp4",
        type: "video",
        wide: false,
        tags: ["Daojian Rumeng (Swords and Dreams)", "Neo-Yuefu Performance", "Contemporary Crossover"]
      }
    ]
  },
  {
    id: "heartbeat",
    kicker: "Category 04 · 青春文旅",
    titleZh: "心动女子乐坊",
    titleEn: "Heartbeat Girls Band",
    photo: "images/heartbeat-girls.png",
    copy: "Heartbeat Girls Band (心动女子乐坊) is a modern all-female Chinese instrumental ensemble operating across commercial stages, brand showcases, and scenic tourism landmarks in Hangzhou (such as Zhuangyuan Pavilion 状元阁 and Water-and-Ink Park). Featuring musicians including pipa soloist Zhang Jiayao, guzheng leader Miaochu, and erhu player Yan Han, the ensemble crafts accessible, tourism-oriented arrangements emphasizing melodic recognizability, elegant Hanfu staging, and dynamic cultural engagement.",
    items: [
      {
        fig: "4.10",
        title: "4.10 Staff Notation of Girl’s Love",
        titleZh: "《女儿情》五线谱记谱与调式结构",
        note: "Western staff notation analysis of Girl’s Love (from Journey to the West). The melody follows an arch-mode wave-like contour in the Chinese heptatonic scale in D major, contrasting with an intense emotional B minor bridge before returning full circle.",
        scoreImg: "images/fig-4_10.png",
        scoreCaption: "Fig. 4.10 Staff Notation: Girl’s Love (D Heptatonic & B Minor)",
        src: "media/fig-4.10.mp4",
        type: "video",
        wide: false,
        tags: ["Staff Notation", "Arch Mode", "Heptatonic D Major", "Journey to the West"]
      },
      {
        fig: "4.11",
        title: "4.11 Example of Heartbeat Girls’ Version of Girl’s Love",
        titleZh: "心动女子乐坊《女儿情》合奏示范",
        note: "Heartbeat Girls' tourism-oriented performance. The arrangement employs a prominent unison/monophonic texture that maximizes acoustic clarity and instantly captures tourist attention in bustling outdoor spaces.",
        scoreImg: "images/fig-4_11.png",
        scoreCaption: "Fig. 4.11 Ensemble Arrangement: Heartbeat Girls’ Girl’s Love",
        src: "media/fig-4.11.mp4",
        type: "video",
        wide: false,
        tags: ["Ensemble Performance", "Tourism Staging", "Monophonic Line"]
      },
      {
        fig: "4.16",
        title: "4.16 Numbered Musical Notation of Lotus Step",
        titleZh: "《步步生莲》简谱记谱分析",
        note: "Composed in 2017 by erhu master Li Fuhua inspired by artist Chen Jialing's painting of lotus blossoms. Formatted in binary ABA'B' design, its melody employs the D Chinese heptachord centered on a pentatonic core (D-E-F#-A-B) with graceful ornamentation.",
        scoreImg: "images/fig-4_16.png",
        altScoreImg: "images/fig-4_17.png",
        scoreCaption: "Fig. 4.16 Numbered Notation of Lotus Step (Li Fuhua Composition)",
        src: "media/fig-4.16.mp4",
        type: "video",
        wide: false,
        tags: ["Numbered Notation", "D Heptachord", "Li Fuhua", "Scenic Tourism"]
      },
      {
        fig: "4.18",
        title: "4.18 Example of Heartbeat Girls’ Ensemble Performance Version of Lotus Step",
        titleZh: "心动女子乐坊《步步生莲》合奏演出版",
        note: "Full ensemble performance by Heartbeat Girls in customized Hanfu attire, showing the synchronization of instrumental movements and monophonic melodic clarity. The score below displays the ensemble score braced for pipa, erhu, dizi, and guzheng.",
        scoreImg: "images/fig-4_18_score.png",
        scoreCaption: "Fig. 4.18 Ensemble Score: Lotus Step (Pipa, Erhu, Dizi, Guzheng)",
        src: "media/fig-4.18.mp4",
        type: "video",
        wide: false,
        tags: ["Ensemble Score", "Hanfu Staging", "Ensemble Performance"]
      },
      {
        fig: "4.21",
        title: "4.21 Numbered Musical Notation of Jasmine Flower",
        titleZh: "《茉莉花》（花调）简谱与乐谱记谱",
        note: "The quintessential tourism melody evoking Jiangnan musical geography. Adapted by guzheng player Miaochu and researcher Yan Han, transposing lower guzheng notes up an octave for erhu and pipa. Accompanied by field photography featuring Heartbeat Girls musician Zhang Jiayao performing at Butterfly Market (文艺赋美).",
        scoreImg: "images/jasmine-score-4.21.png",
        scoreCaption: "Fig. 4.21 Musical Score: Jasmine Flower (Tune of Flower / 茉莉花 Staff Notation in G Major)",
        still: "images/jasmine-4.21.jpg",
        stillCaption: "Fig. 4.21 Field Photo: Heartbeat Girls Musician Zhang Jiayao performing at Butterfly Market (蝴蝶剧场·文艺赋美)",
        src: "media/fig-4.21.mp3",
        type: "audio",
        wide: false,
        tags: ["Jasmine Flower Score", "Butterfly Market", "Field Audio", "Zhang Jiayao"]
      },
      {
        fig: "4.23",
        title: "4.23 Example of Heartbeat Girls’ Ensemble Performance Version of Jasmine Flower",
        titleZh: "心动女子乐坊《茉莉花》文旅融合舞台演出版",
        note: "Live acoustic performance recorded at the Hangzhou Butterfly Theatre, staged before a digital multimedia screen presenting the 'New Butterfly Lovers' (新版《梁祝》文旅融合版) and the 'Wenyi Fumei' (文艺赋美) cultural initiative.",
        still: "images/jasmine-4.23.png",
        stillCaption: "Fig. 4.23 Field Photo: Hangzhou Butterfly Theatre Ensemble Staging (新版《梁祝》文旅融合版·文艺赋美)",
        src: "media/fig-4.23.mp3",
        type: "audio",
        wide: false,
        tags: ["Ensemble Performance", "Butterfly Theatre", "Digital Stagecraft"]
      },
      {
        fig: "5.15",
        title: "5.15 Main Melody Performed by Four Chinese Instruments in the Huo Yuanjia",
        titleZh: "《霍元甲》四件中国传统乐器主旋律合奏",
        note: "China Wind (中国风) theme arranged in binary AB form. Monophonic unison uniting erhu, pipa, dizi, and guzheng to celebrate martial heroism while expressing modern theatrical femininity and commercial promotional dynamism.",
        scoreImg: "images/fig-5_15.png",
        scoreCaption: "Fig. 5.15 Score Transcription: Four Instruments Main Melody in Huo Yuanjia",
        src: "media/fig-5.15.mp4",
        type: "video",
        wide: true,
        tags: ["China Wind", "Huo Yuanjia", "Four Instruments Unison", "Heroic Narrative"]
      },
      {
        title: "“Tiangong Wuqu” (Dance Music of the Heavenly Palace, Heartbeat Girls Performing Version)",
        titleZh: "《天宫舞曲》（心动女子乐坊演奏版）",
        note: "",
        src: "media/04-tiangong-wuqu-heartbeat-girls.mp4",
        type: "video",
        wide: false,
        tags: ["Tiangong Wuqu", "Heartbeat Girls Staging", "Popular Repertoire"]
      },
      {
        title: "Heartbeat Girls Performance",
        titleZh: "心动女子乐坊现场表演",
        note: "",
        src: "media/04-heartbeat-girls-performance.mp4",
        type: "video",
        wide: false,
        tags: ["Heartbeat Girls Live", "Scenic Tourism", "Outdoor Performance"]
      }
    ]
  }
];

// Utility: Create HTML element from template string
function el(html) {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

// Global active MTS players map
const activeMtsPlayers = new Map();

/**
 * Builds media player HTML based on item type and dual tracks
 */
function mediaMarkup(item, cardId) {
  let dualToggleHtml = "";
  if (item.rehearsalSrc) {
    dualToggleHtml = `
      <div class="track-switcher">
        <span class="switcher-label">Version Track:</span>
        <button type="button" class="track-btn active" data-src="${item.src}" data-target="${cardId}">Stage Performance</button>
        <button type="button" class="track-btn" data-src="${item.rehearsalSrc}" data-target="${cardId}">Rehearsal Take</button>
      </div>
    `;
  }

  let photoHtml = "";
  if (item.still) {
    photoHtml = `
      <div class="field-photo-wrap">
        <img class="still zoomable" src="${item.still}" alt="${item.title}" data-caption="${item.stillCaption || item.title}" />
        <span class="field-photo-badge">📷 ${item.stillCaption || "Field Photography"}</span>
      </div>
    `;
  }

  let scoreHtml = "";
  if (item.scoreImg) {
    const isChart = item.scoreImg.includes("music notation.png") || item.scoreImg.includes("jasmine-score") || item.scoreImg.includes("fig-4_18_score") || item.scoreImg.includes("fig-4_24_score");
    scoreHtml = `
      <div class="score-preview-box">
        <div class="score-header">
          <span class="score-tag">🎼 Musical Score / Notation Transcription</span>
          <button type="button" class="score-zoom-btn" data-img="${item.scoreImg}" data-title="${item.title}" data-caption="${item.scoreCaption || item.title}">🔍 Click to Enlarge Score</button>
        </div>
        <div class="score-img-wrapper ${isChart ? "score-chart-wide" : ""}">
          <img class="score-thumb zoomable" src="${item.scoreImg}" alt="${item.title}" data-title="${item.title}" data-caption="${item.scoreCaption || item.title}" />
        </div>
        ${item.scoreCaption ? `<p class="score-caption-text">${item.scoreCaption}</p>` : ""}
      </div>
    `;
  }

  let playerHtml = "";
  if (item.type === "audio") {
    playerHtml = `
      <div class="audio-player-wrap">
        <audio id="player-${cardId}" controls preload="metadata" src="${item.src}"></audio>
      </div>
    `;
  } else if (item.type === "video") {
    playerHtml = `
      <div class="video-player-wrap">
        <video id="player-${cardId}" controls preload="metadata" src="${item.src}" playsinline></video>
      </div>
    `;
  } else if (item.type === "mts") {
    playerHtml = `
      <div class="mts-player-container">
        <div class="video-player-wrap">
          <video id="player-${cardId}" class="mts-player" data-src="${item.src}" controls playsinline preload="none"></video>
        </div>
        <div class="mts-info-bar">
          <span class="mts-badge">AVCHD .MTS Video Master</span>
          <span class="mts-status">MSE Demuxer Active</span>
          <a class="mts-download-link" href="${item.src}" download title="Download raw camera original">⬇ Download Master File</a>
        </div>
        <p class="mts-note">Plays directly in browser via MSE (mpegts.js). If buffering takes a moment, keep local server active or click download.</p>
      </div>
    `;
  } else {
    playerHtml = `<p class="score-only-note">📖 Detailed musicological score transcription and modal analysis.</p>`;
  }

  return `
    <div class="card-media-block">
      ${photoHtml}
      ${scoreHtml}
      ${dualToggleHtml}
      ${playerHtml}
    </div>
  `;
}

/**
 * Render Catalog to DOM
 */
function render() {
  const root = document.getElementById("archive");
  root.innerHTML = "";

  let cardIndex = 0;

  CATALOG.forEach((chapter) => {
    const section = el(`
      <section class="chapter" id="${chapter.id}" data-category="${chapter.id}">
        <div class="chapter-head">
          <div class="chapter-title-col">
            <p class="chapter-kicker">${chapter.kicker}</p>
            <h2><span>${chapter.titleZh}</span>${chapter.titleEn}</h2>
            <p class="chapter-copy">${chapter.copy}</p>
          </div>
          <div class="chapter-photo-col">
            <div class="chapter-photo-card">
              <img class="chapter-photo zoomable" src="${chapter.photo}" alt="${chapter.titleEn}" data-title="${chapter.titleEn}" data-caption="${chapter.titleZh} (${chapter.titleEn})" />
              <div class="chapter-photo-overlay">
                <span>${chapter.titleZh}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="figure-grid"></div>
      </section>
    `);

    const grid = section.querySelector(".figure-grid");

    chapter.items.forEach((item) => {
      cardIndex++;
      const figIdPart = item.fig ? item.fig.replace('.', '_') : `item_${cardIndex}`;
      const cardId = `item-${chapter.id}-${figIdPart}-${cardIndex}`;
      const tagPills = item.tags
        ? item.tags.map((t) => `<span class="tag-pill">${t}</span>`).join("")
        : "";

      const badgeLabel = item.fig ? `Figure ${item.fig}` : "Video Demonstration";

      const card = el(`
        <article class="figure-card ${item.wide ? "wide" : ""}" id="${cardId}" data-fig="${item.fig || ""}" data-category="${chapter.id}">
          <div class="figure-card-top">
            <div class="fig-badge-wrap">
              <span class="fig-no">${badgeLabel}</span>
              <span class="fig-category-badge">${chapter.titleEn}</span>
            </div>
            <div class="fig-tags">${tagPills}</div>
          </div>

          <div class="figure-card-header">
            <h3>${item.title}</h3>
            ${item.titleZh ? `<h4 class="title-zh">${item.titleZh}</h4>` : ""}
          </div>

          ${item.note ? `<div class="note-box"><p class="note">${item.note}</p></div>` : ""}

          ${mediaMarkup(item, cardId)}
        </article>
      `);

      grid.appendChild(card);
    });

    root.appendChild(section);
  });

  // Attach interactive features
  attachMtsPlayers();
  attachTrackSwitchers();
  attachVideoThumbnails();
  attachLightbox();
  attachGlobalPlaybackCoordinator();
}

/**
 * Handle Track Switcher (e.g. Stage vs Rehearsal)
 */
function attachTrackSwitchers() {
  document.querySelectorAll(".track-switcher").forEach((switcher) => {
    const buttons = switcher.querySelectorAll(".track-btn");
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        buttons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        const targetId = btn.dataset.target;
        const newSrc = btn.dataset.src;
        const mediaElem = document.getElementById(`player-${targetId}`);
        if (mediaElem) {
          const wasPlaying = !mediaElem.paused && !mediaElem.ended;
          mediaElem.src = newSrc;
          mediaElem.load();
          if (wasPlaying) {
            mediaElem.play().catch(() => {});
          }
        }
      });
    });
  });
}

/**
 * MPEG-TS (.MTS) video stream player using mpegts.js
 */
function attachMtsPlayers() {
  document.querySelectorAll(".mts-player").forEach((video) => {
    const src = video.dataset.src;
    if (window.mpegts && mpegts.isSupported()) {
      try {
        const player = mpegts.createPlayer({
          type: "mse",
          isLive: false,
          url: src
        });
        player.attachMediaElement(video);
        player.load();
        activeMtsPlayers.set(video, player);

        video.addEventListener(
          "play",
          () => {
            try {
              player.play();
            } catch (e) {
              /* lock */
            }
          },
          { once: true }
        );
      } catch (err) {
        console.warn("mpegts init error:", err);
      }
    }
  });
}

/**
 * Show a frame thumbnail for HTML5 videos once metadata loads
 */
function attachVideoThumbnails() {
  document.querySelectorAll("video:not(.mts-player)").forEach((v) => {
    const showFrame = () => {
      if (v.currentTime === 0) {
        try {
          v.currentTime = 0.2;
        } catch (e) {}
      }
    };
    if (v.readyState >= 1) showFrame();
    else v.addEventListener("loadedmetadata", showFrame, { once: true });
  });
}

/**
 * Prevent overlapping audio/video tracks: only 1 media plays at a time!
 */
function attachGlobalPlaybackCoordinator() {
  document.addEventListener(
    "play",
    (e) => {
      const activeEl = e.target;
      if (activeEl && (activeEl.tagName === "AUDIO" || activeEl.tagName === "VIDEO")) {
        document.querySelectorAll("audio, video").forEach((media) => {
          if (media !== activeEl && !media.paused) {
            media.pause();
          }
        });
      }
    },
    true
  );
}

/**
 * Interactive Lightbox Modal for zooming score sheets and field photos
 */
function attachLightbox() {
  const modal = document.getElementById("lightboxModal");
  const modalImg = document.getElementById("lightboxImg");
  const modalTitle = document.getElementById("lightboxTitle");
  const modalDesc = document.getElementById("lightboxDesc");
  const closeBtn = document.getElementById("lightboxClose");
  const overlay = document.getElementById("lightboxOverlay");

  function openLightbox(src, title, caption) {
    modalImg.src = src;
    modalTitle.textContent = title || "Musical Notation / Score Viewer";
    modalDesc.textContent = caption || "";
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    modalImg.src = "";
    document.body.style.overflow = "";
  }

  closeBtn.addEventListener("click", closeLightbox);
  overlay.addEventListener("click", closeLightbox);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeLightbox();
    }
  });

  // Open on clicking zoomable images or zoom buttons
  document.addEventListener("click", (e) => {
    const zoomBtn = e.target.closest(".score-zoom-btn");
    if (zoomBtn) {
      openLightbox(zoomBtn.dataset.img, zoomBtn.dataset.title, zoomBtn.dataset.caption);
      return;
    }

    const zoomableImg = e.target.closest(".zoomable");
    if (zoomableImg) {
      openLightbox(
        zoomableImg.src,
        zoomableImg.dataset.title || zoomableImg.alt,
        zoomableImg.dataset.caption || ""
      );
    }
  });
}

/**
 * Filtering & Search System
 */
function initFilterAndSearch() {
  const filterPills = document.querySelectorAll(".filter-pill");
  const searchInput = document.getElementById("figureSearch");
  const clearSearch = document.getElementById("clearSearch");

  let currentCategory = "all";
  let currentQuery = "";

  function applyFilters() {
    const cards = document.querySelectorAll(".figure-card");
    const chapters = document.querySelectorAll(".chapter");

    cards.forEach((card) => {
      const cat = card.dataset.category;
      const text = card.textContent.toLowerCase();
      const fig = card.dataset.fig ? card.dataset.fig.toLowerCase() : "";

      const matchesCat = currentCategory === "all" || cat === currentCategory;
      const matchesSearch =
        !currentQuery ||
        text.includes(currentQuery) ||
        fig.includes(currentQuery);

      if (matchesCat && matchesSearch) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });

    // Hide chapters that have zero visible cards
    chapters.forEach((chap) => {
      const visibleCards = chap.querySelectorAll(".figure-card:not([style*='display: none'])");
      if (visibleCards.length === 0) {
        chap.style.display = "none";
      } else {
        chap.style.display = "";
      }
    });
  }

  filterPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      filterPills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      currentCategory = pill.dataset.filter;
      applyFilters();
    });
  });

  searchInput.addEventListener("input", (e) => {
    currentQuery = e.target.value.trim().toLowerCase();
    clearSearch.style.display = currentQuery ? "block" : "none";
    applyFilters();
  });

  clearSearch.addEventListener("click", () => {
    searchInput.value = "";
    currentQuery = "";
    clearSearch.style.display = "none";
    applyFilters();
  });
}

/**
 * Smooth Category Link Handling
 */
function initCategoryLinks() {
  document.querySelectorAll("[data-cat]").forEach((link) => {
    link.addEventListener("click", (e) => {
      const cat = link.dataset.cat;
      if (cat) {
        const pill = document.querySelector(`.filter-pill[data-filter="${cat}"]`);
        if (pill) {
          document.querySelectorAll(".filter-pill").forEach((p) => p.classList.remove("active"));
          pill.classList.add("active");
          const searchInput = document.getElementById("figureSearch");
          if (searchInput) searchInput.value = "";
          const clearSearch = document.getElementById("clearSearch");
          if (clearSearch) clearSearch.style.display = "none";
          // Trigger filter
          pill.click();
        }
      }
    });
  });
}

/**
 * Mobile Navigation Toggle
 */
document.getElementById("navToggle").addEventListener("click", () => {
  document.getElementById("mainNav").classList.toggle("open");
});

// Initialize everything on DOM Ready
render();
initFilterAndSearch();
initCategoryLinks();
