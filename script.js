// ========== 五十音資料庫 ==========
const kanaData = {
  // 平假名
  hiragana: [
    { char: 'あ', romaji: 'a', type: '平假名', row: 'あ行', column: 'あ段' },
    { char: 'い', romaji: 'i', type: '平假名', row: 'あ行', column: 'い段' },
    { char: 'う', romaji: 'u', type: '平假名', row: 'あ行', column: 'う段' },
    { char: 'え', romaji: 'e', type: '平假名', row: 'あ行', column: 'え段' },
    { char: 'お', romaji: 'o', type: '平假名', row: 'あ行', column: 'お段' },
    { char: 'か', romaji: 'ka', type: '平假名', row: 'か行', column: 'あ段' },
    { char: 'き', romaji: 'ki', type: '平假名', row: 'か行', column: 'い段' },
    { char: 'く', romaji: 'ku', type: '平假名', row: 'か行', column: 'う段' },
    { char: 'け', romaji: 'ke', type: '平假名', row: 'か行', column: 'え段' },
    { char: 'こ', romaji: 'ko', type: '平假名', row: 'か行', column: 'お段' },
    { char: 'さ', romaji: 'sa', type: '平假名', row: 'さ行', column: 'あ段' },
    { char: 'し', romaji: 'shi', type: '平假名', row: 'さ行', column: 'い段' },
    { char: 'す', romaji: 'su', type: '平假名', row: 'さ行', column: 'う段' },
    { char: 'せ', romaji: 'se', type: '平假名', row: 'さ行', column: 'え段' },
    { char: 'そ', romaji: 'so', type: '平假名', row: 'さ行', column: 'お段' },
    { char: 'た', romaji: 'ta', type: '平假名', row: 'た行', column: 'あ段' },
    { char: 'ち', romaji: 'chi', type: '平假名', row: 'た行', column: 'い段' },
    { char: 'つ', romaji: 'tsu', type: '平假名', row: 'た行', column: 'う段' },
    { char: 'て', romaji: 'te', type: '平假名', row: 'た行', column: 'え段' },
    { char: 'と', romaji: 'to', type: '平假名', row: 'た行', column: 'お段' },
    { char: 'な', romaji: 'na', type: '平假名', row: 'な行', column: 'あ段' },
    { char: 'に', romaji: 'ni', type: '平假名', row: 'な行', column: 'い段' },
    { char: 'ぬ', romaji: 'nu', type: '平假名', row: 'な行', column: 'う段' },
    { char: 'ね', romaji: 'ne', type: '平假名', row: 'な行', column: 'え段' },
    { char: 'の', romaji: 'no', type: '平假名', row: 'な行', column: 'お段' },
    { char: 'は', romaji: 'ha', type: '平假名', row: 'は行', column: 'あ段' },
    { char: 'ひ', romaji: 'hi', type: '平假名', row: 'は行', column: 'い段' },
    { char: 'ふ', romaji: 'fu', type: '平假名', row: 'は行', column: 'う段' },
    { char: 'へ', romaji: 'he', type: '平假名', row: 'は行', column: 'え段' },
    { char: 'ほ', romaji: 'ho', type: '平假名', row: 'は行', column: 'お段' },
    { char: 'ま', romaji: 'ma', type: '平假名', row: 'ま行', column: 'あ段' },
    { char: 'み', romaji: 'mi', type: '平假名', row: 'ま行', column: 'い段' },
    { char: 'む', romaji: 'mu', type: '平假名', row: 'ま行', column: 'う段' },
    { char: 'め', romaji: 'me', type: '平假名', row: 'ま行', column: 'え段' },
    { char: 'も', romaji: 'mo', type: '平假名', row: 'ま行', column: 'お段' },
    { char: 'や', romaji: 'ya', type: '平假名', row: 'や行', column: 'あ段' },
    { char: 'ゆ', romaji: 'yu', type: '平假名', row: 'や行', column: 'う段' },
    { char: 'よ', romaji: 'yo', type: '平假名', row: 'や行', column: 'お段' },
    { char: 'ら', romaji: 'ra', type: '平假名', row: 'ら行', column: 'あ段' },
    { char: 'り', romaji: 'ri', type: '平假名', row: 'ら行', column: 'い段' },
    { char: 'る', romaji: 'ru', type: '平假名', row: 'ら行', column: 'う段' },
    { char: 'れ', romaji: 're', type: '平假名', row: 'ら行', column: 'え段' },
    { char: 'ろ', romaji: 'ro', type: '平假名', row: 'ら行', column: 'お段' },
    { char: 'わ', romaji: 'wa', type: '平假名', row: 'わ行', column: 'あ段' },
    { char: 'を', romaji: 'wo', type: '平假名', row: 'わ行', column: 'お段' },
    { char: 'ん', romaji: 'n', type: '平假名', row: 'ん行', column: 'ん段' }
  ],
  
  // 片假名
  katakana: [
    { char: 'ア', romaji: 'a', type: '片假名', row: 'ア行', column: 'ア段' },
    { char: 'イ', romaji: 'i', type: '片假名', row: 'ア行', column: 'イ段' },
    { char: 'ウ', romaji: 'u', type: '片假名', row: 'ア行', column: 'ウ段' },
    { char: 'エ', romaji: 'e', type: '片假名', row: 'ア行', column: 'エ段' },
    { char: 'オ', romaji: 'o', type: '片假名', row: 'ア行', column: 'オ段' },
    { char: 'カ', romaji: 'ka', type: '片假名', row: 'カ行', column: 'ア段' },
    { char: 'キ', romaji: 'ki', type: '片假名', row: 'カ行', column: 'イ段' },
    { char: 'ク', romaji: 'ku', type: '片假名', row: 'カ行', column: 'ウ段' },
    { char: 'ケ', romaji: 'ke', type: '片假名', row: 'カ行', column: 'エ段' },
    { char: 'コ', romaji: 'ko', type: '片假名', row: 'カ行', column: 'オ段' },
    { char: 'サ', romaji: 'sa', type: '片假名', row: 'サ行', column: 'ア段' },
    { char: 'シ', romaji: 'shi', type: '片假名', row: 'サ行', column: 'イ段' },
    { char: 'ス', romaji: 'su', type: '片假名', row: 'サ行', column: 'ウ段' },
    { char: 'セ', romaji: 'se', type: '片假名', row: 'サ行', column: 'エ段' },
    { char: 'ソ', romaji: 'so', type: '片假名', row: 'サ行', column: 'オ段' },
    { char: 'タ', romaji: 'ta', type: '片假名', row: 'タ行', column: 'ア段' },
    { char: 'チ', romaji: 'chi', type: '片假名', row: 'タ行', column: 'イ段' },
    { char: 'ツ', romaji: 'tsu', type: '片假名', row: 'タ行', column: 'ウ段' },
    { char: 'テ', romaji: 'te', type: '片假名', row: 'タ行', column: 'エ段' },
    { char: 'ト', romaji: 'to', type: '片假名', row: 'タ行', column: 'オ段' },
    { char: 'ナ', romaji: 'na', type: '片假名', row: 'ナ行', column: 'ア段' },
    { char: 'ニ', romaji: 'ni', type: '片假名', row: 'ナ行', column: 'イ段' },
    { char: 'ヌ', romaji: 'nu', type: '片假名', row: 'ナ行', column: 'ウ段' },
    { char: 'ネ', romaji: 'ne', type: '片假名', row: 'ナ行', column: 'エ段' },
    { char: 'ノ', romaji: 'no', type: '片假名', row: 'ナ行', column: 'オ段' },
    { char: 'ハ', romaji: 'ha', type: '片假名', row: 'ハ行', column: 'ア段' },
    { char: 'ヒ', romaji: 'hi', type: '片假名', row: 'ハ行', column: 'イ段' },
    { char: 'フ', romaji: 'fu', type: '片假名', row: 'ハ行', column: 'ウ段' },
    { char: 'ヘ', romaji: 'he', type: '片假名', row: 'ハ行', column: 'エ段' },
    { char: 'ホ', romaji: 'ho', type: '片假名', row: 'ハ行', column: 'オ段' },
    { char: 'マ', romaji: 'ma', type: '片假名', row: 'マ行', column: 'ア段' },
    { char: 'ミ', romaji: 'mi', type: '片假名', row: 'マ行', column: 'イ段' },
    { char: 'ム', romaji: 'mu', type: '片假名', row: 'マ行', column: 'ウ段' },
    { char: 'メ', romaji: 'me', type: '片假名', row: 'マ行', column: 'エ段' },
    { char: 'モ', romaji: 'mo', type: '片假名', row: 'マ行', column: 'オ段' },
    { char: 'ヤ', romaji: 'ya', type: '片假名', row: 'ヤ行', column: 'ア段' },
    { char: 'ユ', romaji: 'yu', type: '片假名', row: 'ヤ行', column: 'ウ段' },
    { char: 'ヨ', romaji: 'yo', type: '片假名', row: 'ヤ行', column: 'オ段' },
    { char: 'ラ', romaji: 'ra', type: '片假名', row: 'ラ行', column: 'ア段' },
    { char: 'リ', romaji: 'ri', type: '片假名', row: 'ラ行', column: 'イ段' },
    { char: 'ル', romaji: 'ru', type: '片假名', row: 'ラ行', column: 'ウ段' },
    { char: 'レ', romaji: 're', type: '片假名', row: 'ラ行', column: 'エ段' },
    { char: 'ロ', romaji: 'ro', type: '片假名', row: 'ラ行', column: 'オ段' },
    { char: 'ワ', romaji: 'wa', type: '片假名', row: 'ワ行', column: 'ア段' },
    { char: 'ヲ', romaji: 'wo', type: '片假名', row: 'ワ行', column: 'オ段' },
    { char: 'ン', romaji: 'n', type: '片假名', row: 'ン行', column: 'ン段' }
  ],
  
  // 平假名濁音/半濁音
  hiraganaDakuon: [
    { char: 'が', romaji: 'ga', type: '平假名濁音', row: 'が行', column: 'あ段' },
    { char: 'ぎ', romaji: 'gi', type: '平假名濁音', row: 'が行', column: 'い段' },
    { char: 'ぐ', romaji: 'gu', type: '平假名濁音', row: 'が行', column: 'う段' },
    { char: 'げ', romaji: 'ge', type: '平假名濁音', row: 'が行', column: 'え段' },
    { char: 'ご', romaji: 'go', type: '平假名濁音', row: 'が行', column: 'お段' },
    { char: 'ざ', romaji: 'za', type: '平假名濁音', row: 'ざ行', column: 'あ段' },
    { char: 'じ', romaji: 'ji', type: '平假名濁音', row: 'ざ行', column: 'い段' },
    { char: 'ず', romaji: 'zu', type: '平假名濁音', row: 'ざ行', column: 'う段' },
    { char: 'ぜ', romaji: 'ze', type: '平假名濁音', row: 'ざ行', column: 'え段' },
    { char: 'ぞ', romaji: 'zo', type: '平假名濁音', row: 'ざ行', column: 'お段' },
    { char: 'だ', romaji: 'da', type: '平假名濁音', row: 'だ行', column: 'あ段' },
    { char: 'ぢ', romaji: 'ji', type: '平假名濁音', row: 'だ行', column: 'い段' },
    { char: 'づ', romaji: 'zu', type: '平假名濁音', row: 'だ行', column: 'う段' },
    { char: 'で', romaji: 'de', type: '平假名濁音', row: 'だ行', column: 'え段' },
    { char: 'ど', romaji: 'do', type: '平假名濁音', row: 'だ行', column: 'お段' },
    { char: 'ば', romaji: 'ba', type: '平假名濁音', row: 'ば行', column: 'あ段' },
    { char: 'び', romaji: 'bi', type: '平假名濁音', row: 'ば行', column: 'い段' },
    { char: 'ぶ', romaji: 'bu', type: '平假名濁音', row: 'ば行', column: 'う段' },
    { char: 'べ', romaji: 'be', type: '平假名濁音', row: 'ば行', column: 'え段' },
    { char: 'ぼ', romaji: 'bo', type: '平假名濁音', row: 'ば行', column: 'お段' },
    { char: 'ぱ', romaji: 'pa', type: '平假名半濁音', row: 'ぱ行', column: 'あ段' },
    { char: 'ぴ', romaji: 'pi', type: '平假名半濁音', row: 'ぱ行', column: 'い段' },
    { char: 'ぷ', romaji: 'pu', type: '平假名半濁音', row: 'ぱ行', column: 'う段' },
    { char: 'ぺ', romaji: 'pe', type: '平假名半濁音', row: 'ぱ行', column: 'え段' },
    { char: 'ぽ', romaji: 'po', type: '平假名半濁音', row: 'ぱ行', column: 'お段' }
  ],
  
  // 片假名濁音/半濁音
  katakanaDakuon: [
    { char: 'ガ', romaji: 'ga', type: '片假名濁音', row: 'ガ行', column: 'ア段' },
    { char: 'ギ', romaji: 'gi', type: '片假名濁音', row: 'ガ行', column: 'イ段' },
    { char: 'グ', romaji: 'gu', type: '片假名濁音', row: 'ガ行', column: 'ウ段' },
    { char: 'ゲ', romaji: 'ge', type: '片假名濁音', row: 'ガ行', column: 'エ段' },
    { char: 'ゴ', romaji: 'go', type: '片假名濁音', row: 'ガ行', column: 'オ段' },
    { char: 'ザ', romaji: 'za', type: '片假名濁音', row: 'ザ行', column: 'ア段' },
    { char: 'ジ', romaji: 'ji', type: '片假名濁音', row: 'ザ行', column: 'イ段' },
    { char: 'ズ', romaji: 'zu', type: '片假名濁音', row: 'ザ行', column: 'ウ段' },
    { char: 'ゼ', romaji: 'ze', type: '片假名濁音', row: 'ザ行', column: 'エ段' },
    { char: 'ゾ', romaji: 'zo', type: '片假名濁音', row: 'ザ行', column: 'オ段' },
    { char: 'ダ', romaji: 'da', type: '片假名濁音', row: 'ダ行', column: 'ア段' },
    { char: 'ヂ', romaji: 'ji', type: '片假名濁音', row: 'ダ行', column: 'イ段' },
    { char: 'ヅ', romaji: 'zu', type: '片假名濁音', row: 'ダ行', column: 'ウ段' },
    { char: 'デ', romaji: 'de', type: '片假名濁音', row: 'ダ行', column: 'エ段' },
    { char: 'ド', romaji: 'do', type: '片假名濁音', row: 'ダ行', column: 'オ段' },
    { char: 'バ', romaji: 'ba', type: '片假名濁音', row: 'バ行', column: 'ア段' },
    { char: 'ビ', romaji: 'bi', type: '片假名濁音', row: 'バ行', column: 'イ段' },
    { char: 'ブ', romaji: 'bu', type: '片假名濁音', row: 'バ行', column: 'ウ段' },
    { char: 'ベ', romaji: 'be', type: '片假名濁音', row: 'バ行', column: 'エ段' },
    { char: 'ボ', romaji: 'bo', type: '片假名濁音', row: 'バ行', column: 'オ段' },
    { char: 'パ', romaji: 'pa', type: '片假名半濁音', row: 'パ行', column: 'ア段' },
    { char: 'ピ', romaji: 'pi', type: '片假名半濁音', row: 'パ行', column: 'イ段' },
    { char: 'プ', romaji: 'pu', type: '片假名半濁音', row: 'パ行', column: 'ウ段' },
    { char: 'ペ', romaji: 'pe', type: '片假名半濁音', row: 'パ行', column: 'エ段' },
    { char: 'ポ', romaji: 'po', type: '片假名半濁音', row: 'パ行', column: 'オ段' }
  ]
};

// ========== 全域狀態 ==========
let currentTab = 'hiragana';
let currentSubTab = 'hiragana-dakuon';
let currentData = [...kanaData.hiragana];
let quizQuestions = [];
let currentQuizIndex = 0;
let score = 0;
let totalQuiz = 0;

// ========== DOM 元素 ==========
const cardsGrid = document.getElementById('cardsGrid');
const searchInput = document.getElementById('searchInput');
const randomButton = document.getElementById('randomButton');
const resetButton = document.getElementById('resetButton');
const displayCount = document.getElementById('displayCount');
const detailPanel = document.getElementById('detailPanel');
const detailChar = document.getElementById('detailChar');
const detailRomaji = document.getElementById('detailRomaji');
const detailType = document.getElementById('detailType');
const detailRow = document.getElementById('detailRow');
const detailColumn = document.getElementById('detailColumn');
const closeDetail = document.getElementById('closeDetail');
const playSound = document.getElementById('playSound');
const quizRomaji = document.getElementById('quizRomaji');
const quizType = document.getElementById('quizType');
const quizOptions = document.getElementById('quizOptions');
const quizResult = document.getElementById('quizResult');
const quizNext = document.getElementById('quizNext');
const scoreDisplay = document.getElementById('score');
const totalDisplay = document.getElementById('totalQuestions');
const dakuonSubTabs = document.getElementById('dakuonSubTabs');

// ========== 初始化 ==========
function init() {
  setupEventListeners();
  updateDisplay();
  generateQuiz();
}

// ========== 事件監聽器 ==========
function setupEventListeners() {
  // 主選單
  document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', (e) => {
      document.querySelectorAll('.tab-button').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentTab = e.target.dataset.tab;
      
      if (currentTab === 'dakuon') {
        dakuonSubTabs.style.display = 'flex';
        currentSubTab = 'hiragana-dakuon';
        document.querySelector('.sub-tab-button[data-sub="hiragana-dakuon"]').classList.add('active');
        document.querySelector('.sub-tab-button[data-sub="katakana-dakuon"]').classList.remove('active');
        updateCurrentData();
      } else {
        dakuonSubTabs.style.display = 'none';
        updateCurrentData();
      }
      
      updateDisplay();
      generateQuiz();
    });
  });

  // 濁音子選單
  document.querySelectorAll('.sub-tab-button').forEach(button => {
    button.addEventListener('click', (e) => {
      document.querySelectorAll('.sub-tab-button').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentSubTab = e.target.dataset.sub;
      updateCurrentData();
      updateDisplay();
      generateQuiz();
    });
  });

  // 搜尋
  searchInput.addEventListener('input', updateDisplay);
  
  // 隨機顯示
  randomButton.addEventListener('click', () => {
    if (currentData.length > 0) {
      const randomItem = currentData[Math.floor(Math.random() * currentData.length)];
      showDetail(randomItem);
    }
  });

  // 顯示全部
  resetButton.addEventListener('click', () => {
    searchInput.value = '';
    updateDisplay();
  });

  // 詳細面板關閉
  closeDetail.addEventListener('click', () => {
    detailPanel.style.display = 'none';
  });

  detailPanel.addEventListener('click', (e) => {
    if (e.target === detailPanel) {
      detailPanel.style.display = 'none';
    }
  });

  // 發音示範
  playSound.addEventListener('click', () => {
    const romaji = detailRomaji.textContent;
    speakJapanese(romaji);
  });

  // 測驗下一題
  quizNext.addEventListener('click', () => {
    quizResult.textContent = '';
    quizNext.style.display = 'none';
    generateQuiz();
  });
}

// ========== 更新當前資料 ==========
function updateCurrentData() {
  switch(currentTab) {
    case 'hiragana':
      currentData = [...kanaData.hiragana];
      break;
    case 'katakana':
      currentData = [...kanaData.katakana];
      break;
    case 'dakuon':
      if (currentSubTab === 'hiragana-dakuon') {
        currentData = [...kanaData.hiraganaDakuon];
      } else {
        currentData = [...kanaData.katakanaDakuon];
      }
      break;
  }
}

// ========== 更新顯示 ==========
function updateDisplay() {
  const searchTerm = searchInput.value.toLowerCase();
  let filteredData = currentData;
  
  if (searchTerm) {
    filteredData = currentData.filter(item => 
      item.char.includes(searchTerm) || 
      item.romaji.includes(searchTerm) ||
      item.row.includes(searchTerm) ||
      item.column.includes(searchTerm)
    );
  }
  
  displayCount.textContent = filteredData.length;
  renderCards(filteredData);
}

// ========== 渲染卡片 ==========
function renderCards(data) {
  cardsGrid.innerHTML = '';
  
  if (data.length === 0) {
    cardsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #999;">沒有找到相關假名</p>';
    return;
  }
  
  data.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <span class="card-char">${item.char}</span>
      <span class="card-romaji">${item.romaji}</span>
      <span class="card-type">${item.type}</span>
    `;
    
    card.addEventListener('click', () => showDetail(item));
    cardsGrid.appendChild(card);
  });
}

// ========== 顯示詳細資訊 ==========
function showDetail(item) {
  detailChar.textContent = item.char;
  detailRomaji.textContent = item.romaji;
  detailType.textContent = item.type;
  detailRow.textContent = item.row;
  detailColumn.textContent = item.column;
  detailPanel.style.display = 'block';
  speakJapanese(item.romaji);
}

// ========== 發音功能（使用Web Speech API） ==========
function speakJapanese(text) {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    utterance.rate = 0.8;
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
  }
}

// ========== 測驗功能 ==========
function generateQuiz() {
  // 從當前資料中隨機選擇一個作為題目
  if (currentData.length < 4) return;
  
  const correctAnswer = currentData[Math.floor(Math.random() * currentData.length)];
  
  // 生成3個錯誤選項
  let wrongOptions = currentData.filter(item => item.char !== correctAnswer.char);
  wrongOptions = shuffleArray(wrongOptions).slice(0, 3);
  
  // 合併並隨機排列選項
  const options = shuffleArray([correctAnswer, ...wrongOptions]);
  
  // 更新UI
  quizRomaji.textContent = correctAnswer.romaji;
  quizType.textContent = `提示：${correctAnswer.type}`;
  quizOptions.innerHTML = '';
  quizResult.textContent = '';
  quizNext.style.display = 'none';
  
  options.forEach(option => {
    const button = document.createElement('button');
    button.className = 'quiz-option';
    button.textContent = option.char;
    button.addEventListener('click', () => checkAnswer(option, correctAnswer, button));
    quizOptions.appendChild(button);
  });
}

function checkAnswer(selected, correct, button) {
  totalQuiz++;
  const allOptions = document.querySelectorAll('.quiz-option');
  allOptions.forEach(opt => opt.style.pointerEvents = 'none');
  
  if (selected.char === correct.char) {
    score++;
    button.classList.add('correct');
    quizResult.innerHTML = '✅ 正確！太棒了！';
    quizResult.style.color = '#27ae60';
  } else {
    button.classList.add('wrong');
    quizResult.innerHTML = `❌ 錯誤！正確答案是：${correct.char}`;
    quizResult.style.color = '#e74c3c';
    
    // 標示正確答案
    allOptions.forEach(opt => {
      if (opt.textContent === correct.char) {
        opt.classList.add('correct');
      }
    });
  }
  
  scoreDisplay.textContent = score;
  totalDisplay.textContent = totalQuiz;
  quizNext.style.display = 'inline-block';
}

// ========== 輔助函數 ==========
function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

// ========== 鍵盤快捷鍵 ==========
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    detailPanel.style.display = 'none';
  }
  
  if (e.key === ' ' && document.activeElement !== searchInput) {
    e.preventDefault();
    generateQuiz();
  }
});

// ========== 啟動應用 ==========
init();