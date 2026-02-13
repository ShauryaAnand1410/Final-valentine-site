/* ============================================
   Our Universe - For Sakshi 💖
   Complete JavaScript
   ============================================ */

// ===== DATA =====
const STORIES = [
  {
    emoji: "💖",
    title: "15th March 2024 💖 When Sakshi Became My Everything",
    content: `<p>Kashu, I still remember that day. 15th March 2024. The world was the same, the sky was the same — but after that moment, nothing felt the same ever again.</p>
<p>You said yes. Two words. One moment. And my entire universe found its center — you, Sakshi. I had spent so many nights wondering, hoping, dreaming. And then in that one beautiful moment, dreams stopped being just dreams.</p>
<p>The way your eyes looked. The way the light fell. The warmth in your voice. Kashu, I have replayed that moment a thousand times, and every single time, it still makes my heart feel too big for my chest.</p>
<p>You didn't just say yes to me that day. You said yes to everything — every call that would stretch past midnight, every distance that would stretch between our cities, every dream that we would grow together. You said yes to forever. And I am spending every day since then showing you what forever with me looks like.</p>
<p>15th March 2024. The day everything changed. The day Sakshi became my everything. My beginning. My answer. My universe. 💖</p>`
  },
  {
    emoji: "📞",
    title: "Hours That Feel Like Seconds With Kashu 📞💬",
    content: `<p>Do you know what's funny, Sakshi? Clocks don't work the same way when I'm talking to you. Minutes turn into seconds. Hours disappear. I check the time and suddenly it's 2 AM, 3 AM, and I don't even remember how we got there.</p>
<p>We have talked for hours about everything and nothing. About our days, our dreams, our fears. About silly things and serious things. About pizza and stars and futures and feelings. Every conversation with Kashu is its own little world, Sakshi — one I never want to leave.</p>
<p>I have fallen asleep on calls with you. I have woken up on calls with you. I have laughed so hard on calls with you that I couldn't breathe. I have had moments on calls where neither of us said anything, and somehow that silence said everything.</p>
<p>They say long distance is hard because of the distance. But Kashu, what they don't tell you is how the distance becomes invisible the moment you pick up the phone. The moment I hear your voice — Anand and Vellore collapse into the same room. Every single time.</p>
<p>You, Sakshi, have made distance irrelevant. And I love you more for every minute of every call. 📞✨</p>`
  },
  {
    emoji: "🌍",
    title: "Anand 💕 Vellore | Sakshi, Distance Means Nothing 🌍",
    content: `<p>1,800 kilometers. That's what Google says lies between Anand, Gujarat and Vellore, Tamil Nadu. 1,800 kilometers of roads and railways and sky and sea and everything in between. And yet, Kashu — I have never once felt far from you.</p>
<p>They said long distance doesn't work. They counted the kilometers, the weeks between visits. They saw the distance and felt sorry for us. They didn't understand what we understand, Sakshi.</p>
<p>Distance is just geography. It measures the space between bodies, not between souls. And our souls, Kashu — they don't know what distance means. They've been reaching across 1,800 kilometers since the beginning, finding each other anyway.</p>
<p>I see the moon from Vellore and I think of you in Anand, looking at the same moon. We share the same stars, Kashu. We breathe the same air, just from different corners of this country. And every morning, the same sun rises over both of us — as if to remind us we're never really apart.</p>
<p>The distance made us patient. Made us intentional. Made every moment together feel like something we earned. And Sakshi, I would cross every kilometer between us, every single day, just to get to you. Because home isn't Vellore or Anand. Home is wherever Kashu is. 🌍💕</p>`
  },
  {
    emoji: "🌙",
    title: "Growing With You, Sakshi 🌱💫",
    content: `<p>Almost two years, Kashu. Do you realize how much has happened in almost two years? How much has changed? How much we have both grown — and how much of that growth has been because of each other?</p>
<p>You have been my calm on the days when everything felt chaotic. My laugh on the days when nothing seemed funny. My motivation when I wanted to give up. Sakshi, you have pushed me to be better in ways you don't even know — just by being you, just by believing in me the way you do.</p>
<p>I have watched you grow too, Kashu. Into someone stronger, brighter, more sure of yourself. And I am so proud of you. So incredibly proud. You don't need me to tell you how remarkable you are — you already are — but I am going to tell you anyway, every day, for as long as you'll let me.</p>
<p>We have fought and made up. We have misunderstood each other and then understood each other more deeply because of it. We have built something real between us, Sakshi. Not perfect. Not easy. But real and strong and ours.</p>
<p>Growing with you has been the greatest privilege of my life. And I am not done growing, Kashu. We are just getting started. 🌱💫</p>`
  },
  {
    emoji: "💍",
    title: "Sakshi, You Are My Forever 💍✨",
    content: `<p>Let me tell you about the future I see, Kashu. The one I think about when the night gets quiet and the world settles down and it's just my thoughts and your name.</p>
<p>I see mornings. Slow ones, where we don't have to rush. Where we make tea and watch the light change and there's no phone screen between us — just us, in the same room, in the same city, finally, finally together.</p>
<p>I see a home that feels like both of us. A table where we eat together. A couch where we watch the shows you love even when I pretend I don't want to. A kitchen that smells like everything we cook badly together and laugh about anyway.</p>
<p>I see you, Sakshi. In every version of my future, it's you. Through every change, every challenge, every chapter — there you are. My person. My constant. My Kashu.</p>
<p>The distance was always temporary. The love was always forever. And I promise you — every kilometer, every late night, every missed moment — it is all leading to us. Together. Permanent. Home.</p>
<p>Sakshi, Kashu — you are my forever. My always. And no distance, no time, no thing in this universe will ever change that. I love you. Now, tomorrow, and in every lifetime after this one. 💍✨</p>`
  }
];

const STAR_MESSAGES = [
  "Sakshi changed my life on 15th March 2024 ✨",
  "Kashu's voice is my favorite sound in the world 🎵",
  "Anand to Vellore — distance fears us, Sakshi 🌍",
  "Every 2 AM conversation with Kashu is a treasure 🌙",
  "Sakshi is my biggest motivation every single day 💪",
  "I'd choose Kashu in every lifetime, every time 💍",
  "Home isn't a place — it's wherever Kashu is 🏠",
  "Sakshi's smile makes every problem smaller 😊",
  "With Kashu, even silence feels like conversation 💕",
  "Forever wouldn't be long enough with Sakshi ♾️",
  "The moon knows about our late night calls, Kashu 🌙",
  "Sakshi's laugh is my absolute favorite sound 😂💕",
  "1,800 km but our hearts are in the same place 💝",
  "Kashu makes ordinary days feel extraordinary ✨",
  "Sakshi is the answer to every question I ask 💖",
  "I fell in love with Kashu's mind first 🧠💕",
  "Every missed moment was worth this love, Sakshi 🌟",
  "Kashu, you are my greatest adventure 🚀",
  "Sakshi makes distance feel like nothing at all 💪",
  "With Kashu, I found my forever on 15th March 2024 💍"
];

const GALLERY_DATA = [
  { src: "Screenshot_2026-02-13-12-02-18-01_965bbf4d18d205f782c6b8409c5773a4.jpg", caption: "The day Sakshi received flowers 🌸 — You glowed like the whole universe, Kashu" },
  { src: "Screenshot_2026-02-13-12-01-56-53_965bbf4d18d205f782c6b8409c5773a4.jpg", caption: "Sakshi's birthday — celebrated over video call 🎂 Distance tried, love always won 💕" },
  { src: "Screenshot_2026-02-13-12-01-37-74_965bbf4d18d205f782c6b8409c57.jpg", caption: "Finally together 💕 — The happiest I've ever been, right beside you, Kashu" },
  { src: "Screenshot_2026-02-13-12-07-04-00_965bbf4d18d205f782c6b8409c5773a4.jpg", caption: "Sakshi's laugh through the screen 😄 — Worth every single kilometer, Kashu" },
  { src: "Screenshot_2026-02-13-12-07-24-61_965bbf4d18d205f782c6b8409c5773a4.jpg", caption: "2:53 AM calls with Kashu 🌙 — Time disappears when I'm with you, Sakshi" },
  { src: "Screenshot_2026-02-13-12-08-05-06_965bbf4d18d205f782c6b8409c5773a4.jpg", caption: "Sakshi's screen-birthday-kiss 💋 — You make even screens feel like home, Kashu" },
  { src: "Screenshot_2026-02-13-12-08-11-67_965bbf4d18d205f782c6b8409c5773a4.jpg", caption: "Virtual pizza dates 🍕 — Even eating together feels perfect with you, Sakshi" },
  { src: "Screenshot_2026-02-13-12-08-14-93_965bbf4d18d205f782c6b8409c5773a4.jpg", caption: "Falling asleep on call together 😴 — Goodnight is never enough, Kashu 💕" }
];

// ===== STATE =====
let currentPhoto = 0;
let starsFound = 0;
let musicPlaying = false;

// ===== INIT =====
window.addEventListener('load', () => {
  // Preloader hide
  setTimeout(() => {
    const pre = document.getElementById('preloader');
    pre.classList.add('fade-out');
    setTimeout(() => {
      pre.style.display = 'none';
      initHeroCanvas();
      initStoryCanvas();
      initFinalCanvas();
      initParticles();
    }, 650);
  }, 2200);

  initCursor();
  initScrollProgress();
  initTimer();
  initStars();
  initMusicBtn();
  initKeyboard();
});

// ===== CURSOR =====
function initCursor() {
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursorFollower');
  let mx = 0, my = 0, fx = 0, fy = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top = my + 'px';
  });

  (function animateFollower() {
    fx += (mx - fx) * 0.12;
    fy += (my - fy) * 0.12;
    follower.style.left = fx + 'px';
    follower.style.top = fy + 'px';
    requestAnimationFrame(animateFollower);
  })();

  // Click ripples
  document.addEventListener('click', e => {
    const r = document.createElement('div');
    r.style.cssText = `position:fixed;left:${e.clientX}px;top:${e.clientY}px;width:0;height:0;border-radius:50%;background:rgba(255,107,157,.4);transform:translate(-50%,-50%);pointer-events:none;z-index:99997;animation:rippleOut .6s ease-out forwards;`;
    document.body.appendChild(r);
    setTimeout(() => r.remove(), 700);
  });
}

// ===== SCROLL PROGRESS =====
function initScrollProgress() {
  window.addEventListener('scroll', () => {
    const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    document.getElementById('scrollProgress').style.width = pct + '%';
  });
}

// ===== TIMER =====
function initTimer() {
  const START = new Date(2024, 2, 15, 9, 51, 0); // March 15 2024 9:51 AM

  function update() {
    const now = new Date();
    const diffMs = now - START;
    if (diffMs < 0) return;

    const totalSec  = Math.floor(diffMs / 1000);
    const totalMin  = Math.floor(totalSec / 60);
    const totalHrs  = Math.floor(totalMin / 60);

    const secs = totalSec % 60;
    const mins = totalMin % 60;
    const hrs  = totalHrs % 24;

    // Proper years/months/days
    let y = now.getFullYear() - START.getFullYear();
    let mo = now.getMonth() - START.getMonth();
    let d = now.getDate() - START.getDate();
    if (d < 0) { mo--; d += new Date(now.getFullYear(), now.getMonth(), 0).getDate(); }
    if (mo < 0) { y--; mo += 12; }

    setText('tYears',   y);
    setText('tMonths',  mo);
    setText('tDays',    d);
    setText('tHours',   hrs);
    setText('tMinutes', mins);
    setTextAnimated('tSeconds', secs);

    document.getElementById('ttHours').textContent   = totalHrs.toLocaleString();
    document.getElementById('ttMinutes').textContent = totalMin.toLocaleString();
    document.getElementById('ttSeconds').textContent = totalSec.toLocaleString();
  }

  function setText(id, val) {
    const el = document.getElementById(id);
    if (el && el.textContent !== String(val)) el.textContent = val;
  }

  function setTextAnimated(id, val) {
    const el = document.getElementById(id);
    if (!el) return;
    if (el.textContent !== String(val)) {
      el.style.animation = 'none';
      void el.offsetWidth;
      el.style.animation = 'secFlip .35s ease';
      el.textContent = val;
    }
  }

  update();
  setInterval(update, 1000);
}

// ===== HERO CANVAS =====
function initHeroCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const stars = Array.from({length: 220}, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.8,
    phase: Math.random() * Math.PI * 2,
    speed: 0.002 + Math.random() * 0.005
  }));

  const floatHearts = Array.from({length: 14}, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height + canvas.height,
    size: 8 + Math.random() * 18,
    speed: 0.4 + Math.random() * 0.6,
    phase: Math.random() * Math.PI * 2
  }));

  function drawHeart(ctx, x, y, s) {
    ctx.save();
    ctx.translate(x, y);
    ctx.beginPath();
    ctx.moveTo(0, s * 0.3);
    ctx.bezierCurveTo(0, 0, -s * 0.5, 0, -s * 0.5, s * 0.3);
    ctx.bezierCurveTo(-s * 0.5, s * 0.65, 0, s * 0.9, 0, s * 1.1);
    ctx.bezierCurveTo(0, s * 0.9, s * 0.5, s * 0.65, s * 0.5, s * 0.3);
    ctx.bezierCurveTo(s * 0.5, 0, 0, 0, 0, s * 0.3);
    ctx.closePath();
    ctx.restore();
  }

  function frame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const g = ctx.createRadialGradient(canvas.width/2, canvas.height/2, 0, canvas.width/2, canvas.height/2, canvas.width * 0.8);
    g.addColorStop(0, '#28003c');
    g.addColorStop(1, '#0a0010');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    stars.forEach(s => {
      s.phase += s.speed;
      const a = (Math.sin(s.phase) + 1) / 2;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${a})`;
      ctx.fill();
    });

    floatHearts.forEach(h => {
      h.y -= h.speed;
      h.phase += 0.012;
      if (h.y < -40) { h.y = canvas.height + 40; h.x = Math.random() * canvas.width; }
      const a = (Math.sin(h.phase) + 1) / 2 * 0.12;
      ctx.globalAlpha = a;
      ctx.fillStyle = '#ff6b9d';
      drawHeart(ctx, h.x, h.y, h.size);
      ctx.fill();
      ctx.globalAlpha = 1;
    });

    requestAnimationFrame(frame);
  }
  frame();
}

// ===== STORY CANVAS =====
function initStoryCanvas() {
  const canvas = document.getElementById('storyCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    const sec = document.getElementById('storySection');
    canvas.width = sec.offsetWidth;
    canvas.height = sec.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const pts = Array.from({length: 60}, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: 1 + Math.random() * 2,
    phase: Math.random() * Math.PI * 2,
    sp: 0.01 + Math.random() * 0.02
  }));

  function frame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(10,0,20,0.95)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    pts.forEach(p => {
      p.phase += p.sp;
      const a = (Math.sin(p.phase) + 1) / 2 * 0.5;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,107,157,${a})`;
      ctx.fill();
    });
    requestAnimationFrame(frame);
  }
  frame();
}

// ===== FINAL CANVAS =====
function initFinalCanvas() {
  const canvas = document.getElementById('finalCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    const sec = document.getElementById('finalSection');
    canvas.width = sec.offsetWidth;
    canvas.height = sec.offsetHeight || window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const hearts = Array.from({length: 55}, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
    size: 6 + Math.random() * 14,
    phase: Math.random() * Math.PI * 2,
    col: ['#ff6b9d','#c44dff','#ff9ed2','#ffa0d0'][Math.floor(Math.random()*4)]
  }));

  function drawH(x, y, s) {
    ctx.save(); ctx.translate(x, y);
    ctx.beginPath();
    ctx.moveTo(0, s*0.3);
    ctx.bezierCurveTo(0,0,-s*0.5,0,-s*0.5,s*0.3);
    ctx.bezierCurveTo(-s*0.5,s*0.65,0,s*0.9,0,s*1.1);
    ctx.bezierCurveTo(0,s*0.9,s*0.5,s*0.65,s*0.5,s*0.3);
    ctx.bezierCurveTo(s*0.5,0,0,0,0,s*0.3);
    ctx.closePath();
    ctx.restore();
  }

  function frame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const g = ctx.createLinearGradient(0, 0, 0, canvas.height);
    g.addColorStop(0, '#0a0010'); g.addColorStop(1, '#18002e');
    ctx.fillStyle = g; ctx.fillRect(0, 0, canvas.width, canvas.height);

    hearts.forEach(h => {
      h.x += h.vx; h.y += h.vy; h.phase += 0.018;
      if (h.x < 0 || h.x > canvas.width) h.vx *= -1;
      if (h.y < 0 || h.y > canvas.height) h.vy *= -1;
      const a = (Math.sin(h.phase) + 1) / 2 * 0.3;
      ctx.globalAlpha = a;
      ctx.fillStyle = h.col;
      drawH(h.x, h.y, h.size);
      ctx.fill();
      ctx.globalAlpha = 1;
    });
    requestAnimationFrame(frame);
  }
  frame();
}

// ===== PARTICLES =====
function initParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  const emojis = ['💖','✨','💕','🌸','💝','⭐','💗','🌟','🫧','🌙'];

  function spawn() {
    const p = document.createElement('div');
    p.className = 'particle';
    p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    p.style.left = Math.random() * 100 + 'vw';
    p.style.fontSize = (10 + Math.random() * 14) + 'px';
    p.style.opacity = '0';
    const dur = 9 + Math.random() * 11;
    const delay = Math.random() * 4;
    p.style.animation = `particleFall ${dur}s linear ${delay}s forwards`;
    container.appendChild(p);
    setTimeout(() => p.remove(), (dur + delay + 1) * 1000);
  }

  for (let i = 0; i < 18; i++) setTimeout(spawn, i * 400);
  setInterval(spawn, 1800);
}

// ===== STORY PANEL =====
function openStory(idx) {
  const s = STORIES[idx];
  document.getElementById('storyContent').innerHTML =
    `<span class="s-emoji">${s.emoji}</span><h2>${s.title}</h2>${s.content}`;
  document.getElementById('storyPanel').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}
function closeStory() {
  document.getElementById('storyPanel').classList.add('hidden');
  document.body.style.overflow = '';
}

// ===== LIGHTBOX =====
function openLightbox(idx) {
  currentPhoto = idx;
  updateLightbox();
  document.getElementById('lightbox').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}
function updateLightbox() {
  const img = document.getElementById('lbImg');
  img.style.opacity = '0';
  img.src = GALLERY_DATA[currentPhoto].src;
  img.onload = () => { img.style.transition = 'opacity .35s'; img.style.opacity = '1'; };
  document.getElementById('lbCaption').textContent = GALLERY_DATA[currentPhoto].caption;
  document.getElementById('lbCounter').textContent = `${currentPhoto + 1} / ${GALLERY_DATA.length}`;
}
function changePhoto(dir) {
  currentPhoto = (currentPhoto + dir + GALLERY_DATA.length) % GALLERY_DATA.length;
  updateLightbox();
}
function closeLightbox() {
  document.getElementById('lightbox').classList.add('hidden');
  document.body.style.overflow = '';
}

// ===== LETTERS =====
function openLetter(idx) {
  document.getElementById(`lpaper${idx}`).classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}
function closeLetter(idx) {
  document.getElementById(`lpaper${idx}`).classList.add('hidden');
  document.body.style.overflow = '';
}

// ===== STARS =====
function initStars() {
  const field = document.getElementById('starsField');
  if (!field) return;
  STAR_MESSAGES.forEach((msg, i) => {
    const btn = document.createElement('button');
    btn.className = 'star-btn';
    btn.textContent = '⭐';
    btn.style.left = (3 + Math.random() * 90) + '%';
    btn.style.top  = (3 + Math.random() * 88) + '%';
    btn.style.animationDelay = (Math.random() * 3) + 's';
    btn.style.animationDuration = (1.8 + Math.random() * 1.8) + 's';
    btn.addEventListener('click', () => {
      if (!btn.classList.contains('found')) {
        btn.classList.add('found');
        btn.textContent = '🌟';
        starsFound++;
        document.getElementById('starsFound').textContent = starsFound;
      }
      document.getElementById('starMsg').textContent = msg;
      showPopup('starPopup');
    });
    field.appendChild(btn);
  });
}

// ===== PORTAL =====
function checkPortal() {
  const val = (document.getElementById('portalInput').value || '').toLowerCase().trim();
  const errEl = document.getElementById('portalErr');
  if (val === 'forever') {
    document.getElementById('portalBox').classList.add('hidden');
    document.getElementById('portalSuccess').classList.remove('hidden');
    setTimeout(() => {
      document.getElementById('finalSection').scrollIntoView({ behavior: 'smooth' });
    }, 1600);
  } else {
    errEl.textContent = 'Not quite... think about what we always will be, Sakshi 💕';
    document.getElementById('portalInput').style.borderColor = '#ff5555';
    setTimeout(() => {
      errEl.textContent = '';
      document.getElementById('portalInput').style.borderColor = '';
    }, 3000);
  }
}

// ===== FINAL BUTTONS =====
function triggerForever() {
  document.getElementById('hugMsg').classList.add('hidden');
  const msg = document.getElementById('foreverMsg');
  msg.classList.remove('hidden');
  spawnEmojis('foreverHearts', 20, ['💖','💕','💝','💍','✨','🌟','💗','🌸']);
  hideDodgeBtn();
}

function triggerHug() {
  document.getElementById('foreverMsg').classList.add('hidden');
  const hugMsg = document.getElementById('hugMsg');
  hugMsg.classList.remove('hidden');
  spawnEmojis('hugHearts', 14, ['🤗','💕','❤️','💖','🫂','💗','🌸']);
  hideDodgeBtn();
}

function resetHug() {
  document.getElementById('hugMsg').classList.add('hidden');
  document.getElementById('foreverMsg').classList.add('hidden');
  document.getElementById('btnNo').style.cssText = '';
}

function spawnEmojis(containerId, count, arr) {
  const c = document.getElementById(containerId);
  if (!c) return;
  c.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const s = document.createElement('span');
    s.textContent = arr[Math.floor(Math.random() * arr.length)];
    s.style.fontSize = (16 + Math.random() * 20) + 'px';
    s.style.display = 'inline-block';
    s.style.animation = `floatAnim ${1.8 + Math.random()*1.8}s ease-in-out infinite`;
    s.style.animationDelay = (Math.random() * 1.5) + 's';
    c.appendChild(s);
  }
}

function hideDodgeBtn() {
  const btn = document.getElementById('btnNo');
  if (btn) btn.style.display = 'none';
}

function dodgeBtn(btn) {
  const margin = 120;
  const x = margin + Math.random() * (window.innerWidth  - margin * 2);
  const y = margin + Math.random() * (window.innerHeight - margin * 2);
  btn.style.position = 'fixed';
  btn.style.zIndex   = '9999';
  btn.style.left     = x + 'px';
  btn.style.top      = y + 'px';
  btn.style.transition = 'left .3s ease, top .3s ease';
}

function notReady() {
  const btn = document.getElementById('btnNo');
  if (btn) {
    btn.textContent = "Caught me! Love wins, Kashu 💕";
    setTimeout(() => { btn.style.display = 'none'; }, 2000);
  }
}

// ===== MUSIC =====
function initMusicBtn() {
  const btn   = document.getElementById('musicBtn');
  const audio = document.getElementById('bgMusic');
  if (!btn || !audio) return;
  btn.addEventListener('click', () => {
    if (musicPlaying) {
      audio.pause(); btn.textContent = '🔇'; musicPlaying = false;
    } else {
      audio.volume = 0.4;
      audio.play().catch(() => {});
      btn.textContent = '🎵'; musicPlaying = true;
    }
  });
}

// ===== POPUPS =====
function showPopup(id) {
  document.getElementById(id).classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}
function closePopup(id) {
  document.getElementById(id).classList.add('hidden');
  document.body.style.overflow = '';
}
function closePopupOutside(e, id) {
  if (e.target === e.currentTarget) closePopup(id);
}

// ===== SCROLL HELPER =====
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// ===== KEYBOARD NAV =====
function initKeyboard() {
  document.addEventListener('keydown', e => {
    // Lightbox
    if (!document.getElementById('lightbox').classList.contains('hidden')) {
      if (e.key === 'ArrowLeft')  changePhoto(-1);
      if (e.key === 'ArrowRight') changePhoto(1);
      if (e.key === 'Escape')     closeLightbox();
    }
    // Story panel
    if (!document.getElementById('storyPanel').classList.contains('hidden') && e.key === 'Escape') {
      closeStory();
    }
    // Letters
    for (let i = 0; i < 3; i++) {
      const lp = document.getElementById(`lpaper${i}`);
      if (lp && !lp.classList.contains('hidden') && e.key === 'Escape') {
        closeLetter(i);
      }
    }
    // Portal enter
    if (document.activeElement === document.getElementById('portalInput') && e.key === 'Enter') {
      checkPortal();
    }
  });
}
