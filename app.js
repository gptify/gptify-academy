/**
 * GPTify Uzbekistan — Gamified AI Learning Telegram Mini App (TMA)
 * Application Logic & Telegram WebApp Integration
 */

// =============================================================================
// 1. STATE & PERSISTENCE
// =============================================================================
const STORAGE_KEY = "gptify_tma_state_v1";

let appState = {
  userName: "Shuhrat",
  userRole: "🎓 INSTRUKTOR",
  avatar: "👨‍💻",
  streakDays: 1,
  challengeDays: 30,
  stats: {
    correct: 1240,
    wrong: 10,
    skipped: 9
  },
  isVip: false,
  channelSubscribed: false,
  invitedFriendsCount: 0,
  targetFriendsCount: 3,
  mistakeIds: [3, 8, 13, 14, 15],
  bookmarkedIds: [8, 13],
  completedLessons: [1],
  currentQuiz: null
};

// LocalStorage yuklash
function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      appState = { ...appState, ...parsed };
    }
  } catch (e) {
    console.warn("Storage load error:", e);
  }
}

// LocalStorage saqlash
function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
    updateDashboardUI();
  } catch (e) {
    console.warn("Storage save error:", e);
  }
}

// =============================================================================
// 2. TELEGRAM WEBAPP SDK INITIALIZATION
// =============================================================================
const tg = window.Telegram?.WebApp;

function initTelegram() {
  if (tg) {
    tg.ready();
    tg.expand();
    try {
      tg.enableClosingConfirmation();
    } catch (e) {}

    // Foydalanuvchi ma'lumotlarini aniqlash
    const user = tg.initDataUnsafe?.user;
    if (user) {
      if (user.first_name) {
        appState.userName = user.first_name + (user.last_name ? " " + user.last_name : "");
      }
      if (user.photo_url) {
        const avEl = document.getElementById("userAvatar");
        if (avEl) avEl.innerHTML = `<img src="${user.photo_url}" style="width:100%;height:100%;border-radius:50%;object-fit:cover;">`;
      }
    }

    // Telegram BackButton boshqaruvi
    if (tg.BackButton) {
      tg.BackButton.onClick(() => {
        closeAllOverlays();
      });
    }
  }
}

// Haptic Feedback yordamchisi
function triggerHaptic(type = "light") {
  try {
    if (tg?.HapticFeedback) {
      if (type === "success" || type === "error" || type === "warning") {
        tg.HapticFeedback.notificationOccurred(type);
      } else {
        tg.HapticFeedback.impactOccurred(type);
      }
    }
  } catch (e) {}
}

// =============================================================================
// 3. DASHBOARD UI YANGILASH
// =============================================================================
function updateDashboardUI() {
  // Ism va daraja
  const nameEl = document.getElementById("userName");
  if (nameEl) nameEl.textContent = appState.userName;

  // Darajani hisoblash
  const totalCorrect = appState.stats.correct;
  let roleTitle = "🎓 AI SHOGIRD";
  if (totalCorrect >= 1000) {
    roleTitle = "🎓 INSTRUKTOR";
  } else if (totalCorrect >= 300) {
    roleTitle = "⚡ PROMPT INJENER";
  } else if (totalCorrect >= 100) {
    roleTitle = "🚀 AMALIYOTCHI";
  }
  appState.userRole = roleTitle;
  const roleEl = document.getElementById("userRole");
  if (roleEl) {
    roleEl.innerHTML = `<span>${roleTitle}</span><span class="arrow">&gt;</span>`;
  }

  // Streak va Challenge
  const chalEl = document.getElementById("challengeDaysText");
  if (chalEl) chalEl.textContent = `${appState.challengeDays} kun qoldi`;

  const streakEl = document.getElementById("streakDaysCount");
  if (streakEl) streakEl.textContent = `${appState.streakDays} kun`;

  // Hisoblagichlar (Correct, Wrong, Skipped)
  const scEl = document.getElementById("statCorrect");
  if (scEl) scEl.textContent = appState.stats.correct;

  const swEl = document.getElementById("statWrong");
  if (swEl) swEl.textContent = appState.stats.wrong;

  const ssEl = document.getElementById("statSkipped");
  if (ssEl) ssEl.textContent = appState.stats.skipped;

  // Foiz hisoblash
  const totalAnswers = appState.stats.correct + appState.stats.wrong;
  const percent = totalAnswers > 0 ? Math.round((appState.stats.correct / totalAnswers) * 100) : 95;
  const pctEl = document.getElementById("progressPercent");
  if (pctEl) pctEl.textContent = `${percent}%`;

  const barEl = document.getElementById("progressBarFill");
  if (barEl) barEl.style.width = `${Math.min(percent, 100)}%`;

  // Badges
  const misBadge = document.getElementById("mistakesBadge");
  if (misBadge) {
    misBadge.textContent = appState.mistakeIds.length;
    misBadge.style.display = appState.mistakeIds.length > 0 ? "inline-block" : "none";
  }

  const savBadge = document.getElementById("savedBadge");
  if (savBadge) {
    savBadge.textContent = appState.bookmarkedIds.length;
    savBadge.style.display = appState.bookmarkedIds.length > 0 ? "inline-block" : "none";
  }

  // Darslik progress
  const doneLessons = appState.completedLessons.length;
  const totalLessons = QUIZ_DATA.lessons.length;
  const dFraction = document.getElementById("darslikFraction");
  if (dFraction) dFraction.textContent = `${doneLessons}/${totalLessons}`;

  const dBar = document.getElementById("darslikBarFill");
  if (dBar) dBar.style.width = `${Math.round((doneLessons / totalLessons) * 100)}%`;
}

// =============================================================================
// 4. OVERLAYS & MODALS BOSHQARUVI
// =============================================================================
function openOverlay(viewId) {
  triggerHaptic("light");
  const el = document.getElementById(viewId);
  if (el) {
    el.classList.add("active");
    if (tg?.BackButton) tg.BackButton.show();
  }
}

function closeOverlay(viewId) {
  triggerHaptic("light");
  const el = document.getElementById(viewId);
  if (el) el.classList.remove("active");
  checkAnyOverlayOpen();
}

function closeAllOverlays() {
  document.querySelectorAll(".view-overlay").forEach(el => el.classList.remove("active"));
  if (activeTimerInterval) {
    clearInterval(activeTimerInterval);
    activeTimerInterval = null;
  }
  if (tg?.BackButton) tg.BackButton.hide();
}

function checkAnyOverlayOpen() {
  const openViews = document.querySelectorAll(".view-overlay.active");
  if (openViews.length === 0 && tg?.BackButton) {
    tg.BackButton.hide();
  }
}

let toastTimerInstance = null;
function showToast(text) {
  const toast = document.getElementById("toastMsg");
  const textEl = document.getElementById("toastText");
  if (toast && textEl) {
    textEl.textContent = text;
    toast.classList.add("show");
    if (toastTimerInstance) clearTimeout(toastTimerInstance);
    toastTimerInstance = setTimeout(() => {
      toast.classList.remove("show");
    }, 2000);
  }
}

// Nusxa olish
function copyText(txt) {
  if (!txt) {
    showToast("Nusxalash uchun matn topilmadi!");
    return;
  }
  triggerHaptic("medium");

  function fallbackCopy(text) {
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      ta.style.top = "0";
      ta.setAttribute("readonly", "");
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      if (ok) {
        showToast("Prompt nusxalandi! 📋");
      } else {
        showToast("Nusxalandi! 📋");
      }
    } catch (e) {
      showToast("Nusxalandi! 📋");
    }
  }

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(txt).then(() => {
      showToast("Prompt nusxalandi! 📋");
    }).catch(() => {
      fallbackCopy(txt);
    });
  } else {
    fallbackCopy(txt);
  }
}

// =============================================================================
// 5. QUIZ ENGINE (TEST YECHISH TIZIMI)
// =============================================================================
let activeQuizState = {
  mode: "quick",
  title: "▶ Test Yechish",
  questions: [],
  currentIndex: 0,
  selectedOption: null,
  answered: false,
  correctCount: 0,
  wrongCount: 0,
  timerSeconds: 0,
  isDuel: false
};

let activeTimerInterval = null;

function startQuizWithQuestions(title, questionsList, isExam = false, isDuel = false) {
  triggerHaptic("medium");
  if (!questionsList || questionsList.length === 0) {
    showToast("Savollar topilmadi!");
    return;
  }

  activeQuizState = {
    title: title,
    questions: questionsList,
    currentIndex: 0,
    selectedOption: null,
    answered: false,
    correctCount: 0,
    wrongCount: 0,
    timerSeconds: isExam ? 1200 : 0, // 20 minut
    isExam: isExam,
    isDuel: isDuel
  };

  const titleEl = document.getElementById("quizModeTitle");
  if (titleEl) titleEl.textContent = title;

  const timerBox = document.getElementById("quizTimerBox");
  if (timerBox) {
    if (isExam) {
      timerBox.style.display = "block";
      startQuizTimer();
    } else {
      timerBox.style.display = "none";
    }
  }

  renderCurrentQuestion();
  openOverlay("viewQuiz");
}

function startQuizTimer() {
  if (activeTimerInterval) clearInterval(activeTimerInterval);
  activeTimerInterval = setInterval(() => {
    if (activeQuizState.timerSeconds <= 0) {
      clearInterval(activeTimerInterval);
      finishQuiz();
      return;
    }
    activeQuizState.timerSeconds--;
    const mins = Math.floor(activeQuizState.timerSeconds / 60);
    const secs = activeQuizState.timerSeconds % 60;
    const timerBox = document.getElementById("quizTimerBox");
    if (timerBox) {
      timerBox.textContent = `⏱ ${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
  }, 1000);
}

function renderCurrentQuestion() {
  const q = activeQuizState.questions[activeQuizState.currentIndex];
  if (!q) return;

  activeQuizState.answered = false;
  activeQuizState.selectedOption = null;

  // Counter matni
  const counterEl = document.getElementById("quizCounterText");
  if (counterEl) {
    counterEl.textContent = `Savol ${activeQuizState.currentIndex + 1} / ${activeQuizState.questions.length}`;
  }

  // Savol matni
  const qTextEl = document.getElementById("quizQuestionText");
  if (qTextEl) {
    qTextEl.textContent = q.question;
  }

  // Bookmark ikonkasi
  const isSaved = appState.bookmarkedIds.includes(q.id);
  const bmBtn = document.getElementById("bookmarkBtn");
  if (bmBtn) {
    bmBtn.textContent = isSaved ? "⭐️" : "🔖";
  }

  // Variantlar
  const optList = document.getElementById("quizOptionsList");
  optList.innerHTML = "";
  const letters = ["A", "B", "C", "D"];

  q.options.forEach((optText, idx) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerHTML = `
      <div class="option-letter">${letters[idx]}</div>
      <div style="flex:1;">${optText}</div>
    `;
    btn.onclick = () => selectOption(idx);
    optList.appendChild(btn);
  });

  // Tushuntirish qutisini yashirish
  const expBox = document.getElementById("quizExplanationBox");
  if (expBox) expBox.classList.remove("active");

  // Keyingisi tugmasini nofaol qilish
  const nextBtn = document.getElementById("quizNextBtn");
  if (nextBtn) nextBtn.disabled = true;
}

function selectOption(optIndex) {
  if (activeQuizState.answered) return;
  activeQuizState.answered = true;
  activeQuizState.selectedOption = optIndex;

  const q = activeQuizState.questions[activeQuizState.currentIndex];
  const isCorrect = optIndex === q.correctIndex;

  const optButtons = document.querySelectorAll(".option-btn");
  optButtons.forEach((btn, idx) => {
    btn.classList.add("disabled");
    if (idx === q.correctIndex) {
      btn.classList.add("correct");
    } else if (idx === optIndex) {
      btn.classList.add("wrong");
    }
  });

  // Statistika yangilash
  if (isCorrect) {
    triggerHaptic("success");
    activeQuizState.correctCount++;
    appState.stats.correct++;
    // Agar bu savol avval xatolarda bo'lsa, xatolardan o'chirish
    appState.mistakeIds = appState.mistakeIds.filter(id => id !== q.id);
  } else {
    triggerHaptic("error");
    activeQuizState.wrongCount++;
    appState.stats.wrong++;
    // Xatolar ro'yxatiga qo'shish
    if (!appState.mistakeIds.includes(q.id)) {
      appState.mistakeIds.push(q.id);
    }
  }

  saveState();

  // Tushuntirish matnini ko'rsatish
  const expBox = document.getElementById("quizExplanationBox");
  const expText = document.getElementById("quizExplanationText");
  if (expBox && expText) {
    expText.textContent = q.explanation;
    expBox.classList.add("active");
  }

  // Keyingi tugmani faollashtirish
  const nextBtn = document.getElementById("quizNextBtn");
  if (nextBtn) {
    nextBtn.disabled = false;
    if (activeQuizState.currentIndex === activeQuizState.questions.length - 1) {
      nextBtn.innerHTML = "🏁 Natijani ko'rish";
    } else {
      nextBtn.innerHTML = "Keyingisi ➔";
    }
  }
}

function nextQuestion() {
  triggerHaptic("light");
  activeQuizState.currentIndex++;
  if (activeQuizState.currentIndex >= activeQuizState.questions.length) {
    finishQuiz();
  } else {
    renderCurrentQuestion();
  }
}

function toggleBookmarkCurrentQuestion() {
  const q = activeQuizState.questions[activeQuizState.currentIndex];
  if (!q) return;

  const idx = appState.bookmarkedIds.indexOf(q.id);
  if (idx > -1) {
    appState.bookmarkedIds.splice(idx, 1);
    showToast("Saqlanganlardan o'chirildi");
  } else {
    appState.bookmarkedIds.push(q.id);
    showToast("Saqlanganlarga qo'shildi!");
  }
  saveState();
  const bmBtn = document.getElementById("bookmarkBtn");
  if (bmBtn) {
    bmBtn.textContent = appState.bookmarkedIds.includes(q.id) ? "⭐️" : "🔖";
  }
}

function exitQuiz() {
  triggerHaptic("light");
  if (activeTimerInterval) clearInterval(activeTimerInterval);
  closeOverlay("viewQuiz");
}

function finishQuiz() {
  triggerHaptic("medium");
  if (activeTimerInterval) clearInterval(activeTimerInterval);
  closeOverlay("viewQuiz");

  const total = activeQuizState.questions.length;
  const correct = activeQuizState.correctCount;
  const wrong = activeQuizState.wrongCount;
  const percent = total > 0 ? Math.round((correct / total) * 100) : 0;

  // Natija ekranini sozlash
  document.getElementById("resCorrect").textContent = correct;
  document.getElementById("resWrong").textContent = wrong;
  document.getElementById("resultPercent").textContent = `${percent}%`;

  const statusEl = document.getElementById("resultStatus");
  const iconEl = document.getElementById("resultIcon");
  const certWrapper = document.getElementById("certWrapper");

  if (percent >= 80) {
    statusEl.textContent = "Tabriklaymiz! Siz imtihondan o'tdingiz! 🎉";
    iconEl.textContent = "🏆";
    certWrapper.style.display = "block";
    renderCertificateCanvas(percent);
  } else {
    statusEl.textContent = "Yaxshi harakat! Xatolar ustida ishlab yana urinib ko'ring.";
    iconEl.textContent = "📚";
    certWrapper.style.display = "none";
  }

  openOverlay("viewResult");
}

function retryLastQuiz() {
  closeOverlay("viewResult");
  if (activeQuizState.questions) {
    startQuizWithQuestions(activeQuizState.title, activeQuizState.questions, activeQuizState.isExam);
  }
}

// =============================================================================
// 6. CERTIFICATE GENERATOR (HTML5 CANVAS)
// =============================================================================
function renderCertificateCanvas(percent) {
  const canvas = document.getElementById("certCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  // O'lchamlari
  const w = canvas.width;
  const h = canvas.height;

  // Fon gradienti (Dark Space & Cosmic Mint)
  const bgGrad = ctx.createRadialGradient(w/2, h/2, 50, w/2, h/2, 400);
  bgGrad.addColorStop(0, "#11221c");
  bgGrad.addColorStop(0.7, "#080d14");
  bgGrad.addColorStop(1, "#04070a");
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, w, h);

  // Oltin/Yashil chegara
  ctx.lineWidth = 6;
  ctx.strokeStyle = "#22c55e";
  ctx.strokeRect(16, 16, w - 32, h - 32);

  ctx.lineWidth = 1.5;
  ctx.strokeStyle = "rgba(250, 204, 21, 0.5)";
  ctx.strokeRect(24, 24, w - 48, h - 48);

  // Brending & Emblem
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 18px 'Plus Jakarta Sans', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("⚡ GPTIFY UZBEKISTAN", w / 2, 64);

  ctx.fillStyle = "#22c55e";
  ctx.font = "800 24px 'Plus Jakarta Sans', sans-serif";
  ctx.fillText("AI SAVODXONLIK VA PROMPT INJINERINGI", w / 2, 100);

  ctx.fillStyle = "#94a3b8";
  ctx.font = "500 13px 'Plus Jakarta Sans', sans-serif";
  ctx.fillText("Ushbu rasmiy sertifikat bilan tasdiqlanadiki,", w / 2, 140);

  // Foydalanuvchi ismi
  ctx.fillStyle = "#facc15";
  ctx.font = "bold 32px 'Plus Jakarta Sans', sans-serif";
  ctx.fillText(appState.userName, w / 2, 195);

  // Tavsif
  ctx.fillStyle = "#e2e8f0";
  ctx.font = "14px 'Plus Jakarta Sans', sans-serif";
  ctx.fillText("LLM asoslari, Prompt injineringi va Biznesda AI avtomatlashtirish", w / 2, 240);
  ctx.fillText(`bo'yicha rasmiy sinovdan muvaffaqiyatli o'tdi va ${percent}% natija qayd etdi.`, w / 2, 264);

  // Muhr va Sana
  const now = new Date();
  const dateStr = now.toLocaleDateString("uz-UZ", { year: 'numeric', month: 'long', day: 'numeric' });

  ctx.textAlign = "left";
  ctx.fillStyle = "#64748b";
  ctx.font = "12px sans-serif";
  ctx.fillText(`Berilgan sana: ${dateStr}`, 48, 430);
  ctx.fillText("Sertifikat ID: GPT-" + Math.floor(100000 + Math.random() * 900000), 48, 450);

  ctx.textAlign = "right";
  ctx.fillStyle = "#22c55e";
  ctx.font = "bold 14px sans-serif";
  ctx.fillText("GPTify Uzbekistan Ilmiy Kengashi", w - 48, 430);
  ctx.fillStyle = "#94a3b8";
  ctx.font = "12px sans-serif";
  ctx.fillText("Shukhrat Iskandarov (Berlin)", w - 48, 450);

  // Raqamli Muhr (Gold Seal)
  ctx.beginPath();
  ctx.arc(w / 2, 350, 42, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(34, 197, 94, 0.15)";
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.strokeStyle = "#22c55e";
  ctx.stroke();

  ctx.textAlign = "center";
  ctx.fillStyle = "#facc15";
  ctx.font = "bold 11px sans-serif";
  ctx.fillText("TASDIQLANGAN", w / 2, 345);
  ctx.fillText("★ VERIFIED ★", w / 2, 362);
}

function downloadCertificate() {
  triggerHaptic("medium");
  const canvas = document.getElementById("certCanvas");
  if (!canvas) return;
  const link = document.createElement("a");
  link.download = `GPTify_Sertifikat_${appState.userName.replace(/\s+/g, '_')}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
  showToast("Sertifikat saqlandi!");
}

// =============================================================================
// 7. DASHBOARD HARAKATLARI (NAV ACTIONS)
// =============================================================================

// ▶ Test yechish (Sizga mos savollar)
function startQuickQuiz() {
  const shuffled = [...QUIZ_DATA.questions].sort(() => 0.5 - Math.random()).slice(0, 10);
  startQuizWithQuestions("▶ Sizga Mos AI Testlar", shuffled);
}

// 🔢 50/100 talik Marafon
function startMarathonQuiz() {
  const allQ = [...QUIZ_DATA.questions];
  startQuizWithQuestions("🔢 AI Savodxonlik Marafoni", allQ);
}

// ✅ Real imtihon
function startRealExam() {
  const examQ = [...QUIZ_DATA.questions].sort(() => 0.5 - Math.random()).slice(0, 15);
  startQuizWithQuestions("✅ Rasmiy AI Imtihoni (20 daqiqa)", examQ, true);
}

// ⚠️ Chalg'ituvchi savollar
function openChalgituvchi() {
  const trickyQ = QUIZ_DATA.questions.filter(q => q.isTricky);
  startQuizWithQuestions("⚠️ AI Tuzoqlari & Chalg'ituvchi Savollar", trickyQ);
}

// 📋 Barcha testlar
function openAllTests() {
  openMavzular();
}

// 💔 Xatolarni tuzatish
function openMistakes() {
  const container = document.getElementById("mistakesListContainer");
  container.innerHTML = "";

  const mistakeQuestions = QUIZ_DATA.questions.filter(q => appState.mistakeIds.includes(q.id));

  if (mistakeQuestions.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:40px 10px; color:var(--text-secondary);">
        <div style="font-size:48px; margin-bottom:10px;">🎉</div>
        <div style="font-size:16px; font-weight:800; color:#fff; margin-bottom:4px;">Ajoyib! Xatolar yo'q!</div>
        <div style="font-size:13px;">Siz barcha savollarni to'g'ri yechgansiz.</div>
      </div>
    `;
    document.getElementById("solveMistakesBtn").style.display = "none";
  } else {
    document.getElementById("solveMistakesBtn").style.display = "block";
    mistakeQuestions.forEach((q, idx) => {
      const el = document.createElement("div");
      el.className = "quiz-card";
      el.style.marginBottom = "10px";
      el.innerHTML = `
        <div style="font-size:12px; color:#ef4444; font-weight:700; margin-bottom:4px;">Xato qilingan savol #${idx + 1}</div>
        <div style="font-size:14px; font-weight:700; color:#fff; margin-bottom:8px;">${q.question}</div>
        <div style="font-size:12px; color:#38bdf8;">💡 ${q.explanation}</div>
      `;
      container.appendChild(el);
    });
  }

  openOverlay("viewMistakes");
}

function solveAllMistakes() {
  const mistakeQuestions = QUIZ_DATA.questions.filter(q => appState.mistakeIds.includes(q.id));
  if (mistakeQuestions.length > 0) {
    closeOverlay("viewMistakes");
    startQuizWithQuestions("💔 Xatolarni Tuzatish", mistakeQuestions);
  }
}

// 🔖 Saqlanganlar
function openBookmarks() {
  const container = document.getElementById("bookmarksListContainer");
  container.innerHTML = "";

  const savedQ = QUIZ_DATA.questions.filter(q => appState.bookmarkedIds.includes(q.id));

  if (savedQ.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:40px 10px; color:var(--text-secondary);">
        <div style="font-size:48px; margin-bottom:10px;">🔖</div>
        <div style="font-size:16px; font-weight:800; color:#fff; margin-bottom:4px;">Hozircha saqlanganlar yo'q</div>
        <div style="font-size:13px;">Test yechayotganda 🔖 tugmasini bosib saqlab qo'ying.</div>
      </div>
    `;
  } else {
    savedQ.forEach((q, idx) => {
      const el = document.createElement("div");
      el.className = "quiz-card";
      el.style.marginBottom = "10px";
      el.innerHTML = `
        <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
          <span style="font-size:12px; color:#facc15; font-weight:700;">⭐️ Saqlangan #${idx + 1}</span>
          <button onclick="removeBookmark(${q.id})" style="background:none;border:none;color:#94a3b8;font-size:13px;cursor:pointer;">O'chirish</button>
        </div>
        <div style="font-size:14px; font-weight:700; color:#fff; margin-bottom:8px;">${q.question}</div>
        <div style="font-size:12px; color:#cbd5e1;">💡 ${q.explanation}</div>
      `;
      container.appendChild(el);
    });
  }

  openOverlay("viewBookmarks");
}

function removeBookmark(id) {
  appState.bookmarkedIds = appState.bookmarkedIds.filter(x => x !== id);
  saveState();
  openBookmarks();
}

// 📖 Mavzular
function openMavzular() {
  const container = document.getElementById("categoriesListContainer");
  container.innerHTML = "";

  QUIZ_DATA.categories.forEach(cat => {
    const el = document.createElement("div");
    el.className = "lesson-item";
    el.innerHTML = `
      <div class="lesson-num-circle" style="background:${cat.color}25; color:${cat.color}; font-size:18px;">
        ${cat.icon}
      </div>
      <div class="lesson-content-meta">
        <div class="lesson-title-text">${cat.title}</div>
        <div class="lesson-sub-meta">${cat.desc}</div>
      </div>
      <span style="font-size:13px; color:#94a3b8; font-weight:700;">➔</span>
    `;
    el.onclick = () => {
      closeOverlay("viewMavzular");
      const catQ = QUIZ_DATA.questions.filter(q => q.category === cat.id);
      startQuizWithQuestions(`📖 ${cat.title}`, catQ);
    };
    container.appendChild(el);
  });

  openOverlay("viewMavzular");
}

// 🎫 Biletlar
function openBiletlar() {
  const container = document.getElementById("ticketsListContainer");
  container.innerHTML = "";

  QUIZ_DATA.tickets.forEach(ticket => {
    const btn = document.createElement("div");
    btn.className = "pill-card";
    btn.style.justifyContent = "center";
    btn.style.padding = "18px 10px";
    btn.innerHTML = `
      <div style="text-align:center;">
        <div style="font-size:20px; margin-bottom:2px;">🎫</div>
        <div style="font-size:14px; font-weight:800; color:#fff;">${ticket.name}</div>
        <div style="font-size:11px; color:#94a3b8;">${ticket.questionIds.length} ta savol</div>
      </div>
    `;
    btn.onclick = () => {
      closeOverlay("viewBiletlar");
      const ticketQ = QUIZ_DATA.questions.filter(q => ticket.questionIds.includes(q.id));
      startQuizWithQuestions(`🎫 ${ticket.name}`, ticketQ);
    };
    container.appendChild(btn);
  });

  openOverlay("viewBiletlar");
}

// 🎓 Darslik (14 ta modul)
function openDarslik() {
  const container = document.getElementById("lessonsListContainer");
  container.innerHTML = "";

  QUIZ_DATA.lessons.forEach(l => {
    const isCompleted = appState.completedLessons.includes(l.id);
    const item = document.createElement("div");
    item.className = "lesson-item";
    item.innerHTML = `
      <div class="lesson-num-circle" style="${isCompleted ? 'background:#22c55e25; color:#22c55e;' : ''}">
        ${isCompleted ? '✓' : l.num}
      </div>
      <div class="lesson-content-meta">
        <div class="lesson-title-text">${l.title}</div>
        <div class="lesson-sub-meta">
          <span>⏱ ${l.duration}</span>
          <span>•</span>
          <span style="color:#38bdf8;">${l.category}</span>
        </div>
      </div>
      <span style="color:#94a3b8; font-size:14px;">➔</span>
    `;
    item.onclick = () => openLessonDetail(l);
    container.appendChild(item);
  });

  openOverlay("viewDarslik");
}

function openLessonDetail(lesson) {
  document.getElementById("lessonDetailTitle").textContent = `${lesson.num}. ${lesson.title}`;
  document.getElementById("lessonDetailMeta").textContent = `${lesson.category} · ⏱ ${lesson.duration}`;
  document.getElementById("lessonDetailSummary").textContent = lesson.summary;
  document.getElementById("lessonDetailPrompt").textContent = lesson.actionPrompt;

  // Darsni tugatilganlar ro'yxatiga qo'shish
  if (!appState.completedLessons.includes(lesson.id)) {
    appState.completedLessons.push(lesson.id);
    saveState();
  }

  openOverlay("viewLessonDetail");
}

// 🤖 Prompt Lab
function openPromptLab() {
  const container = document.getElementById("promptLabContainer");
  container.innerHTML = "";

  QUIZ_DATA.promptLab.forEach(p => {
    const card = document.createElement("div");
    card.className = "prompt-card";
    card.innerHTML = `
      <div class="prompt-card-header">
        <div class="prompt-card-title">${p.title}</div>
        <button class="prompt-copy-btn" onclick="copyText('${p.prompt.replace(/'/g, "\\'")}')">
          📋 Nusxalash
        </button>
      </div>
      <div class="prompt-body">${p.prompt}</div>
    `;
    container.appendChild(card);
  });

  openOverlay("viewPromptLab");
}

// ⚔️ Oktagon AI Dueli
function openOctagon() {
  const randomBot = QUIZ_DATA.octagonBots[Math.floor(Math.random() * QUIZ_DATA.octagonBots.length)];
  document.getElementById("duelUser").textContent = appState.userName;
  document.getElementById("duelBotName").textContent = randomBot.name;
  document.getElementById("duelBotAvatar").textContent = randomBot.avatar;
  document.getElementById("duelUserScore").textContent = "0";
  document.getElementById("duelBotScore").textContent = "0";

  openOverlay("viewOctagon");
}

function startOctagonDuel() {
  closeOverlay("viewOctagon");
  const duelQuestions = [...QUIZ_DATA.questions].sort(() => 0.5 - Math.random()).slice(0, 5);
  startQuizWithQuestions("⚔️ Oktagon AI Duel (5 Savol)", duelQuestions, false, true);
}

// 🏆 Leaderboard (Reyting)
function openLeaderboard() {
  const container = document.getElementById("leaderboardListContainer");
  container.innerHTML = "";

  const leaders = [
    { rank: 1, name: "Ibrohim (Siz)", score: appState.stats.correct, badge: "🥇" },
    { rank: 2, name: "Jasur Bekmurodov", score: 1190, badge: "🥈" },
    { rank: 3, name: "Dilshod Olimov", score: 1045, badge: "🥉" },
    { rank: 4, name: "Shaxnoza Rahimova", score: 980, badge: "4" },
    { rank: 5, name: "Azizbek Karimov", score: 870, badge: "5" }
  ];

  leaders.forEach(l => {
    const row = document.createElement("div");
    row.className = "lesson-item";
    row.innerHTML = `
      <div style="font-size:20px; width:36px; text-align:center;">${l.badge}</div>
      <div class="lesson-content-meta">
        <div class="lesson-title-text">${l.name}</div>
        <div class="lesson-sub-meta">Reyting ball: <b style="color:#22c55e;">${l.score}</b></div>
      </div>
    `;
    container.appendChild(row);
  });

  openOverlay("viewLeaderboard");
}

// 🔍 Qidiruv
function openSearch() {
  openMavzular();
}

// ⚙️ Sozlamalar / Profil
function openProfile() {
  openSettings();
}

function openSettings() {
  const newName = prompt("Ismingizni kiriting:", appState.userName);
  if (newName && newName.trim()) {
    appState.userName = newName.trim();
    saveState();
    showToast("Ism yangilandi!");
  }
}

function editChallengeGoal() {
  const newGoal = prompt("30 kunlik maqsad muddatini o'zgartiring (kunlarda):", appState.challengeDays);
  if (newGoal && !isNaN(parseInt(newGoal))) {
    appState.challengeDays = parseInt(newGoal);
    saveState();
  }
}

// ❓ FAQ (Ko'p Beriladigan Savollar)
function openFaq() {
  const container = document.getElementById("faqListContainer");
  container.innerHTML = "";

  if (QUIZ_DATA.faqs && QUIZ_DATA.faqs.length > 0) {
    QUIZ_DATA.faqs.forEach((faq, idx) => {
      const item = document.createElement("div");
      item.className = "faq-item" + (idx === 0 ? " open" : "");
      item.innerHTML = `
        <div class="faq-question">
          <span>${faq.q}</span>
          <span class="faq-arrow">▼</span>
        </div>
        <div class="faq-answer">${faq.a}</div>
      `;
      item.querySelector(".faq-question").onclick = () => {
        triggerHaptic("light");
        item.classList.toggle("open");
      };
      container.appendChild(item);
    });
  }

  openOverlay("viewFaq");
}

// 💬 Admin bilan bog'lanish CTA
function contactAdmin() {
  triggerHaptic("medium");
  const adminUrl = "https://t.me/GPTify_UZ";
  if (tg?.openTelegramLink) {
    tg.openTelegramLink(adminUrl);
  } else {
    window.open(adminUrl, "_blank");
  }
}

// 💼 B2B Konsalting CTA
function openB2BInfo() {
  openOverlay("viewB2B");
}

// =============================================================================
// 9. 4-TAB REDESIGN CONTROLLERS & INITIALIZERS
// =============================================================================
let activeAppTab = 'learn';

function switchAppTab(tabName) {
  triggerHaptic('selection');
  activeAppTab = tabName;

  document.querySelectorAll('.tab-viewport').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.dock-btn').forEach(el => el.classList.remove('active'));

  let tabId = 'tab' + tabName.charAt(0).toUpperCase() + tabName.slice(1);
  if (tabName.toLowerCase() === 'promptlab') tabId = 'tabPromptLab';
  const targetTab = document.getElementById(tabId) || document.getElementById('tabPromptLab');
  const targetBtn = document.getElementById('dockNav-' + tabName);

  if (targetTab) targetTab.classList.add('active');
  if (targetBtn) targetBtn.classList.add('active');

  if (tabName === 'profile') {
    renderCanvasCertificate();
  }
}

// =============================================================================
// 5-STEP INTERACTIVE STORY LESSON PLAYER ENGINE
// =============================================================================
let currentActiveLesson = null;
let currentStoryStep = 1;
let currentLegoState = {
  slots: [],
  filledSlots: {},
  tokens: []
};
let aiSimTypingTimer = null;

function openLessonModal(lessonId) {
  triggerHaptic('light');
  const lesson = (QUIZ_DATA.lessons && QUIZ_DATA.lessons.find(l => l.id === lessonId)) || QUIZ_DATA.lessons[0];
  currentActiveLesson = lesson;

  const titleEl = document.getElementById('lessonDetailTitle');
  if (titleEl) titleEl.textContent = `${lesson.num || lesson.id}-Dars`;

  const catEl = document.getElementById('lessonDetailCategory');
  if (catEl) catEl.textContent = `${lesson.category || 'AI Ta\'lim'} · ⏱ ${lesson.duration || '10 daqiqa'}`;

  const headEl = document.getElementById('lessonDetailHeading');
  if (headEl) headEl.textContent = lesson.title;

  const takeEl = document.getElementById('lessonDetailTakeaway');
  if (takeEl) takeEl.textContent = lesson.takeaway || lesson.summary || lesson.desc || "";

  const concEl = document.getElementById('lessonDetailConcept');
  if (concEl) concEl.textContent = lesson.concept || lesson.summary || "";

  const badEl = document.getElementById('lessonDetailBadPrompt');
  if (badEl) badEl.textContent = lesson.bad_prompt || "Menga yordam ber (oddiy / noaniq so'rov)";

  const goodEl = document.getElementById('lessonDetailGoodPrompt');
  if (goodEl) goodEl.textContent = lesson.good_prompt || lesson.actionPrompt || "";

  const pracEl = document.getElementById('lessonDetailPracticalPrompt');
  if (pracEl) pracEl.textContent = lesson.practical_prompt || lesson.actionPrompt || lesson.good_prompt || "";

  openOverlay('viewLessonDetail');
  setLessonStep(1);
}

function setLessonStep(stepNum) {
  triggerHaptic('selection');
  currentStoryStep = stepNum;

  // 1. Update progress bar segments
  for (let i = 1; i <= 5; i++) {
    const seg = document.getElementById('progSeg' + i);
    if (seg) {
      seg.className = 'story-progress-seg' + (i < stepNum ? ' completed' : (i === stepNum ? ' active' : ''));
    }
  }

  // 2. Update step badge
  const stepBadge = document.getElementById('lessonStepBadge');
  if (stepBadge) {
    stepBadge.textContent = `${stepNum} / 5 QADAM`;
  }

  // 3. Switch active slide
  for (let i = 1; i <= 5; i++) {
    const slide = document.getElementById('lessonSlide' + i);
    if (slide) {
      if (i === stepNum) slide.classList.add('active');
      else slide.classList.remove('active');
    }
  }

  const viewport = document.querySelector('.story-slide-viewport');
  if (viewport) viewport.scrollTop = 0;

  // Step-specific initializers
  if (stepNum === 3) {
    initLegoConstructor();
  } else if (stepNum === 4) {
    initAiSimulator();
  } else if (stepNum === 5) {
    onEnterVictorySlide();
  }
}

// 🧩 LEGO PROMPT CONSTRUCTOR
function initLegoConstructor() {
  if (!currentActiveLesson) return;

  const puzzle = currentActiveLesson.legoPuzzle || {
    slots: ["ROL", "KONTEKST", "FORMAT"],
    tokens: [
      { id: "t1", text: "Professional Maslahatchi", slot: "ROL" },
      { id: "t2", text: "Biznes tahlili keysi", slot: "KONTEKST" },
      { id: "t3", text: "3 ta amaliy qadam", slot: "FORMAT" },
      { id: "t4", text: "Noto'g'ri taxmin", slot: "DISTRACTOR" }
    ]
  };

  currentLegoState.slots = puzzle.slots;
  currentLegoState.filledSlots = {};
  currentLegoState.tokens = [...puzzle.tokens].sort(() => Math.random() - 0.5);

  renderLegoSlots();
  renderLegoChips();

  const msgEl = document.getElementById('legoFeedbackMsg');
  if (msgEl) {
    msgEl.className = 'lego-feedback-msg';
    msgEl.textContent = 'Bloklarni tanlab bo\'sh slotlarni to\'ldiring 👇';
  }

  const nextBtn = document.getElementById('btnNextFromLego');
  if (nextBtn) nextBtn.disabled = true;
}

function renderLegoSlots() {
  const container = document.getElementById('legoSlotsContainer');
  if (!container) return;
  container.innerHTML = '';

  currentLegoState.slots.forEach(slotName => {
    const isFilled = !!currentLegoState.filledSlots[slotName];
    const valText = isFilled ? currentLegoState.filledSlots[slotName].text : "Bo'sh slot (Tanlang)";
    
    const slotDiv = document.createElement('div');
    slotDiv.className = `lego-slot ${isFilled ? 'filled' : 'empty'}`;
    slotDiv.innerHTML = `
      <span class="lego-slot-label">[${slotName}]</span>
      <span class="lego-slot-val">${valText}</span>
    `;

    if (isFilled) {
      slotDiv.style.cursor = 'pointer';
      slotDiv.title = "O'chirish uchun bosing";
      slotDiv.onclick = () => removeLegoSlot(slotName);
    }
    container.appendChild(slotDiv);
  });
}

function renderLegoChips() {
  const container = document.getElementById('legoChipsContainer');
  if (!container) return;
  container.innerHTML = '';

  currentLegoState.tokens.forEach(token => {
    const isUsed = Object.values(currentLegoState.filledSlots).some(t => t.id === token.id);
    const chip = document.createElement('button');
    chip.className = `lego-chip ${isUsed ? 'used' : ''}`;
    chip.textContent = token.text;
    chip.onclick = () => handleLegoChipClick(token, chip);
    container.appendChild(chip);
  });
}

function handleLegoChipClick(token, chipEl) {
  if (token.slot === 'DISTRACTOR') {
    triggerHaptic('error');
    chipEl.classList.add('shake');
    setTimeout(() => chipEl.classList.remove('shake'), 400);

    const msgEl = document.getElementById('legoFeedbackMsg');
    if (msgEl) {
      msgEl.className = 'lego-feedback-msg';
      msgEl.textContent = '⚠️ Bu noto\'g\'ri blok, professional qolipga mos kelmaydi!';
    }
    return;
  }

  if (currentLegoState.filledSlots[token.slot]) {
    triggerHaptic('warning');
    return;
  }

  triggerHaptic('light');
  currentLegoState.filledSlots[token.slot] = token;

  renderLegoSlots();
  renderLegoChips();

  const allFilled = currentLegoState.slots.every(s => !!currentLegoState.filledSlots[s]);
  const msgEl = document.getElementById('legoFeedbackMsg');
  const nextBtn = document.getElementById('btnNextFromLego');

  if (allFilled) {
    triggerHaptic('success');
    if (msgEl) {
      msgEl.className = 'lego-feedback-msg success';
      msgEl.textContent = '🎉 Barakalla! Prompt mukammal yig\'ildi! Endi uni AI da sinaymiz.';
    }
    if (nextBtn) nextBtn.disabled = false;
  } else {
    if (msgEl) {
      const remaining = currentLegoState.slots.length - Object.keys(currentLegoState.filledSlots).length;
      msgEl.className = 'lego-feedback-msg';
      msgEl.textContent = `Ajoyib! Yana ${remaining} ta blokni tanlang.`;
    }
  }
}

function removeLegoSlot(slotName) {
  triggerHaptic('selection');
  delete currentLegoState.filledSlots[slotName];
  renderLegoSlots();
  renderLegoChips();

  const nextBtn = document.getElementById('btnNextFromLego');
  if (nextBtn) nextBtn.disabled = true;

  const msgEl = document.getElementById('legoFeedbackMsg');
  if (msgEl) {
    msgEl.className = 'lego-feedback-msg';
    msgEl.textContent = 'Blok olib tashlandi. Boshqasini tanlang.';
  }
}

// 🤖 LIVE AI SIMULATOR
function initAiSimulator() {
  if (aiSimTypingTimer) clearInterval(aiSimTypingTimer);
  const bubble = document.getElementById('simAiBubble');
  const textEl = document.getElementById('simAiText');
  const triggerBtn = document.getElementById('btnRunAiSim');

  if (bubble) bubble.style.display = 'none';
  if (textEl) textEl.innerHTML = '';
  if (triggerBtn) {
    triggerBtn.disabled = false;
    triggerBtn.innerHTML = '<span>▶️ AI ga Yuborish (Sinab Ko\'rish)</span>';
  }
}

function runSimulatedAiResponse() {
  if (!currentActiveLesson) return;
  triggerHaptic('medium');

  const triggerBtn = document.getElementById('btnRunAiSim');
  const bubble = document.getElementById('simAiBubble');
  const textEl = document.getElementById('simAiText');

  if (triggerBtn) {
    triggerBtn.disabled = true;
    triggerBtn.innerHTML = '<span>⏳ ChatGPT o\'ylamoqda...</span>';
  }

  if (bubble) bubble.style.display = 'block';
  if (textEl) textEl.innerHTML = '<span class="typing-cursor">▊</span>';

  const fullText = currentActiveLesson.simulatedAiResponse || 
    "Assalomu alaykum! Sizning so'rovingiz bo'yicha eng samarali yechim tayyorlandi. AI tizimlari ushbu qoidalar asosida 5 barobar aniqroq natija beradi.";

  let charIdx = 0;
  if (aiSimTypingTimer) clearInterval(aiSimTypingTimer);

  aiSimTypingTimer = setInterval(() => {
    charIdx += 4;
    if (charIdx >= fullText.length) {
      charIdx = fullText.length;
      clearInterval(aiSimTypingTimer);
      aiSimTypingTimer = null;
      if (textEl) textEl.innerText = fullText;
      if (triggerBtn) {
        triggerBtn.innerHTML = '<span>✓ Natija olindi (Qayta ishga tushirish)</span>';
        triggerBtn.disabled = false;
      }
      triggerHaptic('success');
    } else {
      if (textEl) {
        textEl.innerText = fullText.substring(0, charIdx) + ' ▊';
      }
    }
  }, 20);
}

// 🏆 VICTORY & ADVANCEMENT
function onEnterVictorySlide() {
  triggerHaptic('success');
  if (!currentActiveLesson) return;

  const lessonId = currentActiveLesson.id;
  const isNew = !appState.completedLessons.includes(lessonId);

  if (isNew) {
    appState.completedLessons.push(lessonId);
    appState.stats.correct = (appState.stats.correct || 0) + 2;
    appState.streakDays = Math.max((appState.streakDays || 1), 3);
    saveState();
  }

  const titleEl = document.getElementById('victoryLessonTitle');
  if (titleEl) titleEl.textContent = `${currentActiveLesson.num || currentActiveLesson.id}-Dars muvaffaqiyatli yakunlandi!`;

  const streakEl = document.getElementById('vStreakCount');
  if (streakEl) streakEl.textContent = appState.streakDays || 3;

  updateDashboardUI();
  showToast('🎉 +20 XP! Dars yakunlandi ✓');
}

function goToNextLessonFromVictory() {
  if (!currentActiveLesson) {
    closeOverlay('viewLessonDetail');
    return;
  }
  const nextId = currentActiveLesson.id + 1;
  const nextLesson = QUIZ_DATA.lessons.find(l => l.id === nextId);

  if (!nextLesson) {
    closeOverlay('viewLessonDetail');
    showToast('🎉 Barcha darslarni tugatdingiz! Diplomingiz tayyor!');
    return;
  }

  if (nextId >= 7 && !appState.isVip) {
    closeOverlay('viewLessonDetail');
    openPaywall(`${nextId}-Dars (PRO)`);
    return;
  }

  openLessonModal(nextId);
}

function copyLessonPromptDetail(btn) {
  if (!currentActiveLesson) return;
  const text = currentActiveLesson.practical_prompt || currentActiveLesson.good_prompt || currentActiveLesson.actionPrompt || "";
  if (!text) {
    showToast("Nusxalash uchun matn topilmadi!");
    return;
  }
  copyText(text);

  const targetBtn = btn || document.getElementById('btnCopyLessonPrompt');
  if (targetBtn) {
    const origHtml = targetBtn.innerHTML;
    targetBtn.innerHTML = "✓ Nusxalandi!";
    targetBtn.style.background = "#059669";
    targetBtn.style.color = "#ffffff";
    setTimeout(() => {
      targetBtn.innerHTML = origHtml;
      targetBtn.style.background = "#1e293b";
      targetBtn.style.color = "#38bdf8";
    }, 1800);
  }
}

function completeCurrentLessonDetail() {
  setLessonStep(5);
}

// Daily Quests Tracker
function updateDailyQuestsUI() {
  const quest1 = document.getElementById('questItem1');
  const check1 = document.getElementById('questCheck1');
  const progressPill = document.getElementById('questsProgressText');

  const lessonDone = (appState.completedLessons && appState.completedLessons.length > 0);
  if (quest1 && check1) {
    if (lessonDone) {
      quest1.classList.add('completed');
      check1.textContent = '✓';
    } else {
      quest1.classList.remove('completed');
      check1.textContent = '○';
    }
  }

  if (progressPill) {
    const doneCount = lessonDone ? 1 : 0;
    progressPill.textContent = `${doneCount} / 3 Bajarildi`;
  }
}

// Prompt Lab Tab Filtering
function filterPromptsTab(category = 'all', btnEl = null) {
  if (btnEl) {
    document.querySelectorAll('#promptFilterChips .filter-chip').forEach(c => c.classList.remove('active'));
    btnEl.classList.add('active');
  }

  const container = document.getElementById('promptTabCardsContainer');
  if (!container) return;
  container.innerHTML = '';

  const items = (category === 'all')
    ? (QUIZ_DATA.promptLab || [])
    : (QUIZ_DATA.promptLab || []).filter(p => p.category === category || p.tag === category);

  items.forEach(p => {
    const card = document.createElement('div');
    card.className = 'prompt-card';
    card.innerHTML = `
      <div class="prompt-card-header">
        <div class="prompt-card-title">${p.title}</div>
        <button class="prompt-copy-btn" onclick="copyText('${p.prompt.replace(/'/g, "\\'")}')">
          📋 Nusxalash
        </button>
      </div>
      <div class="prompt-body">${p.prompt}</div>
    `;
    container.appendChild(card);
  });
}

// Practice Tickets Grid (1-10 with stars)
function renderPracticeTickets() {
  const container = document.getElementById('ticketsGridContainer');
  if (!container) return;
  container.innerHTML = '';

  for (let i = 1; i <= 10; i++) {
    const stars = i <= 3 ? '⭐⭐⭐' : (i <= 7 ? '⭐⭐☆' : '☆☆☆');
    const card = document.createElement('div');
    card.className = 'ticket-card-item';
    card.onclick = () => openTicket(i);
    card.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
        <span style="font-size:13.5px; font-weight:800; color:#fff;">${i}-Bilet</span>
        <span style="font-size:10px; color:#facc15;">${stars}</span>
      </div>
      <div style="font-size:10.5px; color:#94a3b8;">10 ta savol · Aralash</div>
    `;
    container.appendChild(card);
  }
}

// Mini Leaderboard
function renderMiniLeaderboard() {
  const container = document.getElementById('miniLeaderboardContainer');
  if (!container) return;
  container.innerHTML = `
    <div style="display:flex; align-items:center; justify-content:space-between; background:#161f31; padding:8px 10px; border-radius:12px;">
      <div style="display:flex; align-items:center; gap:8px;">
        <span style="font-size:16px;">🥇</span>
        <span style="font-size:12.5px; font-weight:800; color:#fff;">${appState.userName} (Siz)</span>
      </div>
      <span style="font-size:12px; font-weight:800; color:#facc15;">${appState.stats.correct} ball</span>
    </div>
    <div style="display:flex; align-items:center; justify-content:space-between; background:#111726; padding:8px 10px; border-radius:12px;">
      <div style="display:flex; align-items:center; gap:8px;">
        <span style="font-size:16px;">🥈</span>
        <span style="font-size:12.5px; font-weight:700; color:#cbd5e1;">Jasur Bekmurodov</span>
      </div>
      <span style="font-size:12px; font-weight:700; color:#94a3b8;">1,190 ball</span>
    </div>
    <div style="display:flex; align-items:center; justify-content:space-between; background:#111726; padding:8px 10px; border-radius:12px;">
      <div style="display:flex; align-items:center; gap:8px;">
        <span style="font-size:16px;">🥉</span>
        <span style="font-size:12.5px; font-weight:700; color:#cbd5e1;">Dilshod Olimov</span>
      </div>
      <span style="font-size:12px; font-weight:700; color:#94a3b8;">1,045 ball</span>
    </div>
  `;
}

// FAQ Accordion in Profile Tab
function renderFaqTab() {
  const container = document.getElementById('faqAccordionContainerTab');
  if (!container || !QUIZ_DATA.faqs) return;
  container.innerHTML = '';
  QUIZ_DATA.faqs.forEach((item, idx) => {
    const div = document.createElement('div');
    div.className = 'faq-item' + (idx === 0 ? ' open' : '');
    div.innerHTML = `
      <div class="faq-question">
        <span>${item.q}</span>
        <span class="faq-arrow">▼</span>
      </div>
      <div class="faq-answer">${item.a}</div>
    `;
    div.querySelector('.faq-question').onclick = () => {
      triggerHaptic('light');
      div.classList.toggle('open');
    };
    container.appendChild(div);
  });
}

// Canvas Certificate Generator (Signed by Shuhrat)
function renderCanvasCertificate() {
  const canvas = document.getElementById('certCanvasProfile') || document.getElementById('certCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;

  // Background
  const bgGrad = ctx.createLinearGradient(0, 0, w, h);
  bgGrad.addColorStop(0, '#0a0f1d');
  bgGrad.addColorStop(1, '#05070d');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, w, h);

  // Borders
  ctx.lineWidth = 4;
  ctx.strokeStyle = '#d97706';
  ctx.strokeRect(16, 16, w - 32, h - 32);

  ctx.lineWidth = 1;
  ctx.strokeStyle = 'rgba(245, 158, 11, 0.4)';
  ctx.strokeRect(22, 22, w - 44, h - 44);

  // Headers
  ctx.textAlign = 'center';
  ctx.font = 'bold 20px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = '#34d399';
  ctx.fillText("GPTIFY UZBEKISTAN — AI ACADEMY", w / 2, 60);

  ctx.font = 'bold 30px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = '#f8fafc';
  ctx.fillText("RASMIY DIPLOM & SERTIFIKAT", w / 2, 105);

  ctx.font = '13px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = '#94a3b8';
  ctx.fillText("Ushbu sertifikat egasi sun'iy intellekt va professional prompting kursini", w / 2, 140);
  ctx.fillText("a'lo darajada tamomlab, rasmiy imtihondan muvaffaqiyatli o'tganligini tasdiqlaydi:", w / 2, 160);

  // Recipient Name
  ctx.font = 'bold 34px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = '#facc15';
  ctx.fillText(appState.userName, w / 2, 215);

  // Specialty
  ctx.font = 'bold 15px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = '#38bdf8';
  ctx.fillText("MUTAXASSISLIK: AMALIY AI & PROMPT MUHANDISLIGI", w / 2, 255);

  // Serial Details
  ctx.font = '12px monospace';
  ctx.fillStyle = '#64748b';
  ctx.fillText("Seriya: GPT-UZ-2026-0883 · Sana: " + new Date().toLocaleDateString('uz-UZ') + " · Ball: 95%", w / 2, 285);

  // Left Signature
  ctx.textAlign = 'left';
  ctx.font = 'bold 13px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = '#e2e8f0';
  ctx.fillText("Shuhrat", 80, 360);
  ctx.font = '11px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = '#94a3b8';
  ctx.fillText("GPTify Asoschisi & Bosh Murabbiy", 80, 378);

  // Right Seal
  ctx.textAlign = 'right';
  ctx.font = 'bold 14px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = '#10b981';
  ctx.fillText("✓ RASMIY TASDIQLANGAN", w - 80, 360);
  ctx.font = '11px monospace';
  ctx.fillStyle = '#64748b';
  ctx.fillText("ID: VERIFIED-AUTHENTIC", w - 80, 378);
}

function downloadCertificate() {
  const canvas = document.getElementById('certCanvasProfile') || document.getElementById('certCanvas');
  if (!canvas) return;
  const link = document.createElement('a');
  link.download = `GPTify_Sertifikat_${appState.userName}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
  showToast('Sertifikat yuklab olindi! 🎓');
}

// =============================================================================
// 9. PAYWALL & VIRAL QUEST UNLOCK (3 FRIENDS + TELEGRAM CHANNEL)
// =============================================================================
function openPaywall(contextTitle) {
  triggerHaptic('warning');
  const txt = document.getElementById('paywallContextText');
  if (txt) txt.textContent = (contextTitle || 'To\'liq kurs') + ' uchun VIP a\'zolik';
  updateViralQuestUI();
  openOverlay('viewPaywall');
}

function handleStageClick(stageNum, contextTitle, lessonTarget) {
  if (!appState.isVip) {
    openPaywall(contextTitle);
    return;
  }
  triggerHaptic('light');
  if (lessonTarget === 'exam') {
    openTicketQuizModal(1);
  } else {
    openLessonModal(lessonTarget);
  }
}

function handleChannelSubscribeClick() {
  setTimeout(() => {
    verifyChannelSubscription();
  }, 1200);
}

function verifyChannelSubscription() {
  triggerHaptic('success');
  appState.channelSubscribed = true;
  saveState();
  const badge = document.getElementById('channelStatusBadge');
  if (badge) {
    badge.style.background = 'rgba(16, 185, 129, 0.2)';
    badge.style.color = '#34d399';
    badge.innerText = '✓ A\'zo bo\'lindi';
  }
  const btn = document.getElementById('btnVerifyChannel');
  if (btn) {
    btn.style.background = 'rgba(16, 185, 129, 0.15)';
    btn.style.color = '#34d399';
    btn.style.borderColor = 'rgba(16, 185, 129, 0.3)';
    btn.innerText = '✓ Bajarildi';
  }
  showToast('Telegram kanal tekshirildi! (1/2 bajarildi) 📢');
  updateViralQuestUI();
}

function shareInviteLink() {
  triggerHaptic('impact');
  const botUsername = 'gptify_academy_bot';
  const shareText = encodeURIComponent("GPTify Academy — Sun'iy intellekt (AI) va ChatGPTni 0 dan professional darajada bepul o'rganing! 🚀");
  const shareUrl = `https://t.me/share/url?url=https://t.me/${botUsername}?start=ref_${encodeURIComponent(appState.userName)}&text=${shareText}`;
  
  if (window.Telegram?.WebApp?.openTelegramLink) {
    window.Telegram.WebApp.openTelegramLink(shareUrl);
  } else {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`https://t.me/${botUsername}?start=ref_${encodeURIComponent(appState.userName)}`);
    }
    window.open(shareUrl, '_blank');
    showToast("Taklif havolasi nusxalandi va ulashish oynasi ochildi! 📲");
  }
}

function simulateAddFriend() {
  triggerHaptic('medium');
  if (appState.invitedFriendsCount < appState.targetFriendsCount) {
    appState.invitedFriendsCount++;
    saveState();
    showToast(`+1 Do'st qo'shildi! (${appState.invitedFriendsCount}/3) 👥`);
    updateViralQuestUI();
  } else {
    showToast(`Siz allaqachon 3 ta do'stni taklif qildingiz! (3/3) 🎉`);
  }
}

function updateViralQuestUI() {
  const count = appState.invitedFriendsCount || 0;
  const target = appState.targetFriendsCount || 3;
  const pct = Math.min(100, Math.round((count / target) * 100));

  const countBadge = document.getElementById('referralProgressBadge');
  if (countBadge) {
    countBadge.innerText = `${count} / ${target} ta`;
    if (count >= target) {
      countBadge.style.background = 'rgba(16, 185, 129, 0.2)';
      countBadge.style.color = '#34d399';
    } else {
      countBadge.style.background = 'rgba(245, 158, 11, 0.15)';
      countBadge.style.color = '#facc15';
    }
  }

  const progressBar = document.getElementById('referralProgressBar');
  if (progressBar) {
    progressBar.style.width = `${pct}%`;
  }

  const channelBadge = document.getElementById('channelStatusBadge');
  const btnVerify = document.getElementById('btnVerifyChannel');
  if (appState.channelSubscribed) {
    if (channelBadge) {
      channelBadge.style.background = 'rgba(16, 185, 129, 0.2)';
      channelBadge.style.color = '#34d399';
      channelBadge.innerText = '✓ A\'zo bo\'lindi';
    }
    if (btnVerify) {
      btnVerify.style.background = 'rgba(16, 185, 129, 0.15)';
      btnVerify.style.color = '#34d399';
      btnVerify.style.borderColor = 'rgba(16, 185, 129, 0.3)';
      btnVerify.innerText = '✓ Bajarildi';
    }
  }

  const btnClaim = document.getElementById('btnClaimPro');
  if (btnClaim) {
    let tasksCompleted = 0;
    if (appState.channelSubscribed) tasksCompleted++;
    if (count >= target) tasksCompleted++;

    if (tasksCompleted === 2) {
      btnClaim.disabled = false;
      btnClaim.style.cursor = 'pointer';
      btnClaim.style.background = 'linear-gradient(135deg, #10b981, #059669)';
      btnClaim.style.color = '#fff';
      btnClaim.style.border = 'none';
      btnClaim.style.boxShadow = '0 6px 20px rgba(16, 185, 129, 0.4)';
      btnClaim.innerHTML = '✨ PRO\'ni Mutlaqo Bepul Faollashtirish! (0 UZS)';
    } else {
      btnClaim.disabled = true;
      btnClaim.style.cursor = 'not-allowed';
      btnClaim.style.background = '#1e293b';
      btnClaim.style.color = '#64748b';
      btnClaim.style.border = '1px solid rgba(255,255,255,0.1)';
      btnClaim.style.boxShadow = 'none';
      btnClaim.innerHTML = `🔒 Shartlarni bajaring (${tasksCompleted}/2)`;
    }
  }
}

function claimProReward() {
  if (!appState.channelSubscribed || (appState.invitedFriendsCount < appState.targetFriendsCount)) {
    triggerHaptic('error');
    showToast("Iltimos, avval ikkala shartni bajaring! ⚠️");
    return;
  }
  triggerHaptic('success');
  appState.isVip = true;
  saveState();
  closeOverlay('viewPaywall');
  updateRoadmapVipUI();
  showToast("🎉 Tabriklaymiz! 3 ta do'st va kanal orqali PRO to'liq ochildi! 👑");
}

function updateRoadmapVipUI() {
  if (appState.isVip) {
    [4, 5, 6].forEach(stageId => {
      const card = document.getElementById('stageCard' + stageId);
      if (card) {
        card.classList.remove('locked');
      }
      const pill = document.getElementById('stagePill' + stageId);
      if (pill) {
        pill.style.background = 'rgba(16, 185, 129, 0.2)';
        pill.style.color = '#34d399';
        pill.innerText = 'OCHILDI ✓';
      }
      const badge = document.getElementById('stageBadge' + stageId);
      if (badge) {
        badge.style.color = '#34d399';
      }
    });

    const vipBadge = document.getElementById('topVipBadge');
    if (vipBadge) {
      vipBadge.innerHTML = '<span>👑</span> <span>VIP (Faol)</span>';
      vipBadge.style.background = 'linear-gradient(135deg, #10b981, #059669)';
      vipBadge.style.boxShadow = '0 0 12px rgba(16,185,129,0.35)';
    }
  }
}

// =============================================================================
// 10. APP INITIALIZATION ON DOM READY
// =============================================================================
document.addEventListener("DOMContentLoaded", () => {
  loadState();
  initTelegram();
  updateDashboardUI();
  renderPracticeTickets();
  filterPromptsTab('all');
  renderMiniLeaderboard();
  renderFaqTab();
  renderCanvasCertificate();
  updateViralQuestUI();
  updateRoadmapVipUI();
});
