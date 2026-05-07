// ========== 五十音資料庫 ==========
const kanaData = {
  // 平假名 - 按行分組
  hiragana: {
    rows: ['あ段', 'い段', 'う段', 'え段', 'お段'],
    data: [
      { row: 'あ行', chars: ['あ', 'い', 'う', 'え', 'お'], romaji: ['a', 'i', 'u', 'e', 'o'] },
      { row: 'か行', chars: ['か', 'き', 'く', 'け', 'こ'], romaji: ['ka', 'ki', 'ku', 'ke', 'ko'] },
      { row: 'さ行', chars: ['さ', 'し', 'す', 'せ', 'そ'], romaji: ['sa', 'shi', 'su', 'se', 'so'] },
      { row: 'た行', chars: ['た', 'ち', 'つ', 'て', 'と'], romaji: ['ta', 'chi', 'tsu', 'te', 'to'] },
      { row: 'な行', chars: ['な', 'に', 'ぬ', 'ね', 'の'], romaji: ['na', 'ni', 'nu', 'ne', 'no'] },
      { row: 'は行', chars: ['は', 'ひ', 'ふ', 'へ', 'ほ'], romaji: ['ha', 'hi', 'fu', 'he', 'ho'] },
      { row: 'ま行', chars: ['ま', 'み', 'む', 'め', 'も'], romaji: ['ma', 'mi', 'mu', 'me', 'mo'] },
      { row: 'や行', chars: ['や', '', 'ゆ', '', 'よ'], romaji: ['ya', '', 'yu', '', 'yo'] },
      { row: 'ら行', chars: ['ら', 'り', 'る', 'れ', 'ろ'], romaji: ['ra', 'ri', 'ru', 're', 'ro'] },
      { row: 'わ行', chars: ['わ', '', '', '', 'を'], romaji: ['wa', '', '', '', 'wo'] },
      { row: 'ん', chars: ['ん', '', '', '', ''], romaji: ['n', '', '', '', ''] }
    ]
  },
  
  // 片假名 - 按行分組
  katakana: {
    rows: ['ア段', 'イ段', 'ウ段', 'エ段', 'オ段'],
    data: [
      { row: 'ア行', chars: ['ア', 'イ', 'ウ', 'エ', 'オ'], romaji: ['a', 'i', 'u', 'e', 'o'] },
      { row: 'カ行', chars: ['カ', 'キ', 'ク', 'ケ', 'コ'], romaji: ['ka', 'ki', 'ku', 'ke', 'ko'] },
      { row: 'サ行', chars: ['サ', 'シ', 'ス', 'セ', 'ソ'], romaji: ['sa', 'shi', 'su', 'se', 'so'] },
      { row: 'タ行', chars: ['タ', 'チ', 'ツ', 'テ', 'ト'], romaji: ['ta', 'chi', 'tsu', 'te', 'to'] },
      { row: 'ナ行', chars: ['ナ', 'ニ', 'ヌ', 'ネ', 'ノ'], romaji: ['na', 'ni', 'nu', 'ne', 'no'] },
      { row: 'ハ行', chars: ['ハ', 'ヒ', 'フ', 'ヘ', 'ホ'], romaji: ['ha', 'hi', 'fu', 'he', 'ho'] },
      { row: 'マ行', chars: ['マ', 'ミ', 'ム', 'メ', 'モ'], romaji: ['ma', 'mi', 'mu', 'me', 'mo'] },
      { row: 'ヤ行', chars: ['ヤ', '', 'ユ', '', 'ヨ'], romaji: ['ya', '', 'yu', '', 'yo'] },
      { row: 'ラ行', chars: ['ラ', 'リ', 'ル', 'レ', 'ロ'], romaji: ['ra', 'ri', 'ru', 're', 'ro'] },
      { row: 'ワ行', chars: ['ワ', '', '', '', 'ヲ'], romaji: ['wa', '', '', '', 'wo'] },
      { row: 'ン', chars: ['ン', '', '', '', ''], romaji: ['n', '', '', '', ''] }
    ]
  },
  
  // 平假名濁音/半濁音 - 按行分組
  hiraganaDakuon: {
    rows: ['あ段', 'い段', 'う段', 'え段', 'お段'],
    data: [
      { row: 'が行', chars: ['が', 'ぎ', 'ぐ', 'げ', 'ご'], romaji: ['ga', 'gi', 'gu', 'ge', 'go'] },
      { row: 'ざ行', chars: ['ざ', 'じ', 'ず', 'ぜ', 'ぞ'], romaji: ['za', 'ji', 'zu', 'ze', 'zo'] },
      { row: 'だ行', chars: ['だ', 'ぢ', 'づ', 'で', 'ど'], romaji: ['da', 'ji', 'zu', 'de', 'do'] },
      { row: 'ば行', chars: ['ば', 'び', 'ぶ', 'べ', 'ぼ'], romaji: ['ba', 'bi', 'bu', 'be', 'bo'] },
      { row: 'ぱ行', chars: ['ぱ', 'ぴ', 'ぷ', 'ぺ', 'ぽ'], romaji: ['pa', 'pi', 'pu', 'pe', 'po'] }
    ]
  },
  
  // 片假名濁音/半濁音 - 按行分組
  katakanaDakuon: {
    rows: ['ア段', 'イ段', 'ウ段', 'エ段', 'オ段'],
    data: [
      { row: 'ガ行', chars: ['ガ', 'ギ', 'グ', 'ゲ', 'ゴ'], romaji: ['ga', 'gi', 'gu', 'ge', 'go'] },
      { row: 'ザ行', chars: ['ザ', 'ジ', 'ズ', 'ゼ', 'ゾ'], romaji: ['za', 'ji', 'zu', 'ze', 'zo'] },
      { row: 'ダ行', chars: ['ダ', 'ヂ', 'ヅ', 'デ', 'ド'], romaji: ['da', 'ji', 'zu', 'de', 'do'] },
      { row: 'バ行', chars: ['バ', 'ビ', 'ブ', 'ベ', 'ボ'], romaji: ['ba', 'bi', 'bu', 'be', 'bo'] },
      { row: 'パ行', chars: ['パ', 'ピ', 'プ', 'ペ', 'ポ'], romaji: ['pa', 'pi', 'pu', 'pe', 'po'] }
    ]
  }
};

// ========== 全域狀態 ==========
let currentTab = 'hiragana';
let currentSubTab = 'hiragana-dakuon';
let score = 0;
let totalQuiz = 0;

// ========== DOM 元素 ==========
const kanaTableContainer = document.getElementById('kanaTableContainer');
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
  renderTable();
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
      } else {
        dakuonSubTabs.style.display = 'none';
      }
      
      renderTable();
      generateQuiz();
    });
  });

  // 濁音子選單
  document.querySelectorAll('.sub-tab-button').forEach(button => {
    button.addEventListener('click', (e) => {
      document.querySelectorAll('.sub-tab-button').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentSubTab = e.target.dataset.sub;
      renderTable();
      generateQuiz();
    });
  });

  // 搜尋
  searchInput.addEventListener('input', renderTable);
  
  // 隨機顯示
  randomButton.addEventListener('click', () => {
    const allChars = getAllCurrentChars();
    if (allChars.length > 0) {
      const randomChar = allChars[Math.floor(Math.random() * allChars.length)];
      showDetail(randomChar);
    }
  });

  // 顯示全部
  resetButton.addEventListener('click', () => {
    searchInput.value = '';
    renderTable();
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

// ========== 獲取當前資料集 ==========
function getCurrentDataset() {
  if (currentTab === 'dakuon') {
    return currentSubTab === 'hiragana-dakuon' ? kanaData.hiraganaDakuon : kanaData.katakanaDakuon;
  }
  return kanaData[currentTab];
}

// ========== 獲取所有當前字元 ==========
function getAllCurrentChars() {
  const dataset = getCurrentDataset();
  const allChars = [];
  const searchTerm = searchInput.value.toLowerCase();
  
  dataset.data.forEach(rowData => {
    rowData.chars.forEach((char, index) => {
      if (char && rowData.romaji[index]) {
        const charInfo = {
          char: char,
          romaji: rowData.romaji[index],
          type: getCurrentType(),
          row: rowData.row,
          column: dataset.rows[index]
        };
        
        if (!searchTerm || 
            char.includes(searchTerm) || 
            rowData.romaji[index].includes(searchTerm) ||
            rowData.row.includes(searchTerm) ||
            dataset.rows[index].includes(searchTerm)) {
          allChars.push(charInfo);
        }
      }
    });
  });
  
  return allChars;
}

// ========== 獲取當前類型名稱 ==========
function getCurrentType() {
  if (currentTab === 'dakuon') {
    return currentSubTab === 'hiragana-dakuon' ? '平假名濁音/半濁音' : '片假名濁音/半濁音';
  }
  return currentTab === 'hiragana' ? '平假名' : '片假名';
}

// ========== 渲染表格 ==========
function renderTable() {
  const dataset = getCurrentDataset();
  const searchTerm = searchInput.value.toLowerCase();
  let totalVisible = 0;
  
  let tableHTML = '<table class="kana-table"><thead><tr><th>行</th>';
  
  // 表頭 - 段
  dataset.rows.forEach(row => {
    tableHTML += `<th>${row}</th>`;
  });
  tableHTML += '</tr></thead><tbody>';
  
  // 表格內容 - 每行
  dataset.data.forEach(rowData => {
    tableHTML += '<tr>';
    tableHTML += `<td class="row-label">${rowData.row}</td>`;
    
    rowData.chars.forEach((char, index) => {
      const romaji = rowData.romaji[index];
      const column = dataset.rows[index];
      
      if (char && romaji) {
        const isVisible = !searchTerm || 
          char.includes(searchTerm) || 
          romaji.includes(searchTerm) ||
          rowData.row.includes(searchTerm) ||
          column.includes(searchTerm);
        
        if (isVisible) {
          totalVisible++;
          tableHTML += `
            <td>
              <div class="kana-cell" onclick="handleCellClick('${char}', '${romaji}', '${rowData.row}', '${column}')">
                <span class="kana-char">${char}</span>
                <span class="kana-romaji">${romaji}</span>
              </div>
            </td>
          `;
        } else {
          tableHTML += '<td></td>';
        }
      } else {
        tableHTML += '<td><div class="kana-cell empty"></div></td>';
      }
    });
    
    tableHTML += '</tr>';
  });
  
  tableHTML += '</tbody></table>';
  kanaTableContainer.innerHTML = tableHTML;
  displayCount.textContent = totalVisible;
}

// ========== 處理儲存格點擊 ==========
function handleCellClick(char, romaji, row, column) {
  const charInfo = {
    char: char,
    romaji: romaji,
    type: getCurrentType(),
    row: row,
    column: column
  };
  showDetail(charInfo);
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
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    utterance.rate = 0.8;
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
  }
}

// ========== 測驗功能 ==========
function generateQuiz() {
  const allChars = getAllCurrentChars();
  if (allChars.length < 4) return;
  
  const correctAnswer = allChars[Math.floor(Math.random() * allChars.length)];
  
  // 生成3個錯誤選項
  let wrongOptions = allChars.filter(item => item.char !== correctAnswer.char);
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