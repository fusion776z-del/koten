const drawer =
document.getElementById("drawer");

const term =
document.getElementById("term");

const choices =
document.getElementById("choices");

const result =
document.getElementById("result");

const CHAPTERS = [
  MAKURA,
  MAKURA_CHAPTER2,
  MAKURA_CHAPTER3,
  MAKURA_CHAPTER4,
  MAKURA_CHAPTER5,
  MAKURA_CHAPTER6,
  MAKURA_CHAPTER7,
  MAKURA_CHAPTER8,
  MAKURA_CHAPTER9,
  MAKURA_CHAPTER10
];
const TAKETORI_CHAPTERS = [
  TAKETORI,
  TAKETORI_CHAPTER2,
  TAKETORI_CHAPTER3,
  TAKETORI_CHAPTER4,
  TAKETORI_CHAPTER5,
  TAKETORI_CHAPTER6,
  TAKETORI_CHAPTER7,
  TAKETORI_CHAPTER8,
  TAKETORI_CHAPTER9,
  TAKETORI_CHAPTER10
];

const ISE_CHAPTERS = [
  ISE,
  ISE_CHAPTER2,
  ISE_CHAPTER3,
  ISE_CHAPTER4,
  ISE_CHAPTER5,
  ISE_CHAPTER6,
  ISE_CHAPTER7,
  ISE_CHAPTER8,
  ISE_CHAPTER9,
  ISE_CHAPTER10
];

const TOSA_CHAPTERS = [
  TOSA,
  TOSA_CHAPTER2,
  TOSA_CHAPTER3,
  TOSA_CHAPTER4,
  TOSA_CHAPTER5,
  TOSA_CHAPTER6,
  TOSA_CHAPTER7,
  TOSA_CHAPTER8,
  TOSA_CHAPTER9,
  TOSA_CHAPTER10
];

const SARASHINA_CHAPTERS = [
  SARASHINA,
  SARASHINA_02,
  SARASHINA_03,
  SARASHINA_04,
  SARASHINA_05,
  SARASHINA_06,
  SARASHINA_07,
  SARASHINA_08,
  SARASHINA_09,
  SARASHINA_10
];

const WORKS = {

  makura:{
    id:"makura",
    title:"枕草子",
    chapters:CHAPTERS
  },

  taketori:{
    id:"taketori",
    title:"竹取物語",
    chapters:TAKETORI_CHAPTERS
  },

ise:{
  id:"ise",
  title:"伊勢物語",
  chapters:ISE_CHAPTERS
},

tosa:{
  id:"tosa",
  title:"土佐日記",
  chapters:TOSA_CHAPTERS
},

sarashina:{
  id:"sarashina",
  title:"更級日記",
  chapters:SARASHINA_CHAPTERS
}






};

let currentWork;
let currentData;
let currentSeries = null;
let currentWordElement;

let solved = 0;
let exp = 0;

let currentStep = "pos";
let drawerTimer = null;
let questionLocked = false;

window.onload = () => {

  const area =
  document.getElementById("workSelect");

area.innerHTML = `

<div class="work-card"
onclick="openSeries('makura')">
<h3>枕草子</h3>
<p>全10章</p>
</div>

<div class="work-card"
onclick="openSeries('taketori')">
<h3>竹取物語</h3>
<p>全10章</p>
</div>

<div class="work-card"
onclick="openSeries('ise')">
<h3>伊勢物語</h3>
<p>全10章</p>
</div>

<div class="work-card"
onclick="openSeries('tosa')">
<h3>土佐日記</h3>
<p>全10章</p>
</div>

<div class="work-card"
onclick="openSeries('sarashina')">
<h3>更級日記</h3>
<p>全10章</p>
</div>
`;

};
function openSeries(seriesId){

  currentSeries = seriesId;

  const series =
  WORKS[seriesId];

  const chapterArea =
  document.getElementById(
    "chapterSelect"
  );

  document.getElementById(
    "workSelect"
  ).style.display = "none";

  chapterArea.style.display =
  "block";

  chapterArea.innerHTML = "";

  series.chapters.forEach(
    chapter => {

      chapterArea.innerHTML += `

      <div
        class="work-card"
        onclick="openWork('${chapter.id}')">

        <h3>${chapter.chapter}</h3>

      </div>

      `;

    }

  );

}

function openWork(id){
document
.getElementById("chapterSelect")
.style.display = "none";


currentWork =
[
  ...CHAPTERS,
  ...TAKETORI_CHAPTERS,
  ...ISE_CHAPTERS,
  ...TOSA_CHAPTERS,
  ...SARASHINA_CHAPTERS
].find(
  chapter => chapter.id === id
);

  // 最大20問制限
  if(currentWork.words.length > 20){

    alert(
      "この章の問題数は20問を超えています。"
    );

    return;
  }

  solved = 0;
  exp = 0;
  document.getElementById("exp")
  .textContent = 0;

  document.getElementById("level")
  .textContent = 1;

  document.getElementById("count")
  .textContent =
  `0 / ${currentWork.words.length}`;

  document.getElementById("progressBar")
  .style.width = "0%";

  document.getElementById("workTitle")
  .textContent =
  currentWork.title;

  document.getElementById("chapterTitle")
  .textContent =
  currentWork.chapter;

  document.getElementById("lessonScreen")
  .innerHTML =
  currentWork.text;

  document.getElementById("workSelect")
  .style.display = "none";

  document.getElementById("studyUI")
  .style.display = "block";

  document.getElementById("translation")
  .classList.remove("show");

  document.getElementById("readingQuiz")
  .classList.remove("show");

  setupWords();

  buildReadingQuiz();

  document.getElementById("translation")
  .innerHTML = `
    <h3>現代語訳</h3>
    ${currentWork.translation}
  `;

}

function setupWords(){

  document
  .querySelectorAll(".word")
  .forEach(word => {

    word.onclick = () => {

      if(word.classList.contains("done")){
        return;
      }

      currentWordElement = word;

      currentData =
      currentWork.words[
        Number(word.dataset.id)
      ];

      if(!currentData){

        alert(
          `問題データがありません (ID:${word.dataset.id})`
        );

        return;
      }

      currentStep = "pos";

      showQuestion();

    };

  });

}

function shuffleArray(arr){
  const array = [...arr];

  for(let i = array.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}


function showQuestion(){
questionLocked = false;
  drawer.classList.add("show");

  document
  .getElementById("overlay")
  .classList
  .add("show");
  term.textContent =
  currentData.word;

  result.innerHTML = "";
  choices.innerHTML = "";

  if(currentStep === "pos"){

    showPosQuestion();

  }
  else if(currentStep === "type"){

    showTypeQuestion();

  }
  else if(currentStep === "form"){

    showFormQuestion();

  }

}

function showPosQuestion(){
  document.querySelector(".question")
  .textContent =
  "品詞を選ぼう";

  shuffleArray(currentData.posChoices).forEach(choice => {

    const btn =
    document.createElement("button");

    btn.className = "option";

    btn.textContent = choice;

    btn.onclick = () => {

      if(choice === currentData.posAnswer){

        if(
          currentData.typeAnswer === "なし" ||
          !currentData.typeAnswer
        ){

          finishQuestion();

        }else{

          currentStep = "type";

          showQuestion();

        }

      }else{

        wrong();

      }

    };

    choices.appendChild(btn);

  });

}

function showTypeQuestion(){

  document.querySelector(".question")
  .textContent =
  "活用の種類を選ぼう";

  shuffleArray(currentData.typeChoices).forEach(choice => {

    const btn =
    document.createElement("button");

    btn.className = "option";

    btn.textContent = choice;

    btn.onclick = () => {

      if(choice === currentData.typeAnswer){

        currentStep = "form";

        showQuestion();

      }else{

        wrong();

      }

    };

    choices.appendChild(btn);

  });

}

function showFormQuestion(){

  document.querySelector(".question")
  .textContent =
  "活用形を選ぼう";

  shuffleArray(currentData.formChoices).forEach(choice => {

    const btn =
    document.createElement("button");

    btn.className = "option";

    btn.textContent = choice;

    btn.onclick = () => {

      if(choice === currentData.formAnswer){

        finishQuestion();

      }else{

        wrong();

      }

    };

    choices.appendChild(btn);

  });

}

function finishQuestion(){

  if(questionLocked){
    return;
  }

  questionLocked = true;

  choices.innerHTML = "";

  result.innerHTML = `

  <div class="correct">

  ✅ 完全正解

  <hr>

  基本形：
  ${currentData.baseForm || "-"}

  <br>

  品詞：
  ${currentData.posAnswer}

  <br>

  活用種類：
  ${currentData.typeAnswer || "-"}

  <br>

  活用形：
  ${currentData.formAnswer || "-"}

  <br>

  意味：
  ${currentData.meaning || "-"}

  <br><br>

  ${currentData.explanation || ""}

  <br><br>

  EXP +20

  </div>

  `;

  currentWordElement
  .classList
  .add("done");

  solved++;

  updateStats();

  currentStep = "pos";



}

function wrong(){

  result.innerHTML = `
    <div class="wrong">
      ❌ 不正解
    </div>
  `;

}

function updateStats(){

  const total =
  currentWork.words.length;



  document.getElementById("count")
  .textContent =
  `${solved} / ${total}`;

  document.getElementById("progressBar")
  .style.width =
  `${(solved / total) * 100}%`;

  exp += 20;

  document.getElementById("exp")
  .textContent = exp;

  document.getElementById("level")
  .textContent =
  Math.floor(exp / 40) + 1;

  if(solved === total){

    document
    .getElementById("translationBtn")
    .classList
    .remove("lock");

  }

}

function buildReadingQuiz(){

  const q =
  currentWork.reading;

  document
  .getElementById("readingQuiz")
  .innerHTML = `

    <h3>読解問題</h3>

    <p>${q.question}</p>

    ${q.choices.map((c,i) => `
      <button
        class="option"
        onclick="checkReading(${i})">
        ${c}
      </button>
    `).join("")}

    <div id="readingResult"></div>

  `;

}

function checkReading(num){

  const q =
  currentWork.reading;

  const readingResult =
  document.getElementById("readingResult");

  if(num === q.answer){

    readingResult.innerHTML =
    `✅ 正解<br>${q.comment}`;

    setTimeout(() => {

      document
      .getElementById("translation")
      .classList
      .add("show");

      document
      .getElementById("chapterComplete")
      .style.display = "block";

    },1000);

  }else{

    readingResult.innerHTML =
    "❌ 不正解";

  }

}

document
.getElementById("translationBtn")
.onclick = () => {

  if(
    solved <
    currentWork.words.length
  ){
    return;
  }

  document
  .getElementById("readingQuiz")
  .classList
  .add("show");

};

function showHint(){

  if(
    confirm("章選択へ戻りますか？")
  ){
    backToChapter();
  }

}
function backToChapter(){

  document.getElementById("studyUI")
  .style.display = "none";

  document.getElementById("translation")
  .classList.remove("show");

  document.getElementById("readingQuiz")
  .classList.remove("show");

  document.getElementById("chapterComplete")
  .style.display = "none";

  document.getElementById("chapterSelect")
  .style.display = "block";

}

function backToTitle(){

  document.getElementById("studyUI")
  .style.display = "none";

  document.getElementById("chapterSelect")
  .style.display = "none";

  document.getElementById("workSelect")
  .style.display = "block";

  document.getElementById("translation")
  .classList.remove("show");

  document.getElementById("readingQuiz")
  .classList.remove("show");

  document.getElementById("chapterComplete")
  .style.display = "none";

}



function nextChapter(){

  const current =
  parseInt(
    currentWork.id.replace(
      "makura",
      ""
    )
  );

  const next =
  WORKS[
    "makura" + (current + 1)
  ];

  if(next){

    openWork(next.id);

  }else{

    alert(
      "読破しました！"
    );

    backToMenu();

  }

}

function closeDrawer(){

  drawer.classList.remove("show");

  document
  .getElementById("overlay")
  .classList
  .remove("show");

}

document
.getElementById("overlay")
.onclick = closeDrawer;