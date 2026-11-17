const GENJI16 = {
  id: "genji16",
  title: "源氏物語",
  chapter: "第16章 藤裏葉",

 text: `
姫君は

<span class="word" data-id="0">成長し</span>、

やがて
東宮に

<span class="word" data-id="1">仕へ</span>ぬ。

人々は
その姿を

<span class="word" data-id="2">喜び</span>、

将来を

<span class="word" data-id="3">祝ひ</span>たり。

源氏は
明石の君を

<span class="word" data-id="4">思ひ</span>、

長年の願ひが

<span class="word" data-id="5">叶ひ</span>たり

と感じたり。

紫の上も

<span class="word" data-id="6">見守り</span>、

姫君の幸せを

<span class="word" data-id="7">願は</span>む

と思ひたり。

源氏の家には

<span class="word" data-id="8">栄え</span>

が満ち、

誰もがその

<span class="word" data-id="9">繁栄</span>

を認めたり。
`,

 words:[
{
  word:"成長し",
  grammar:"連用形",
  baseForm:"成長す",
  meaning:"成長して",
  posAnswer:"動詞",
  typeAnswer:"サ行変格活用",
  formAnswer:"連用形",
  posChoices:["動詞","名詞","助動詞","副詞"],
  typeChoices:[
    "サ行変格活用",
    "サ行四段活用",
    "ラ行四段活用",
    "マ行四段活用"
  ],
  formChoices:["連用形","終止形","連体形","已然形"],
  explanation:"姫君が立派に成長した。"
},

{
  word:"仕へ",
  grammar:"連用形＋完了の助動詞『ぬ』",
  baseForm:"仕ふ",
  meaning:"お仕えして",
  posAnswer:"動詞",
  typeAnswer:"ハ行下二段活用",
  formAnswer:"連用形",
  posChoices:["動詞","名詞","助動詞","副詞"],
  typeChoices:[
    "ハ行下二段活用",
    "ハ行四段活用",
    "ラ行下二段活用",
    "マ行四段活用"
  ],
  formChoices:["連用形","終止形","連体形","已然形"],
  explanation:"東宮に仕えるようになった。"
},

{
  word:"喜び",
  grammar:"連用形",
  baseForm:"喜ぶ",
  meaning:"喜んで",
  posAnswer:"動詞",
  typeAnswer:"バ行四段活用",
  formAnswer:"連用形",
  posChoices:["動詞","名詞","助動詞","副詞"],
  typeChoices:[
    "バ行四段活用",
    "マ行四段活用",
    "ラ行四段活用",
    "カ行四段活用"
  ],
  formChoices:["連用形","終止形","連体形","已然形"],
  explanation:"人々は喜んだ。"
},

{
  word:"祝ひ",
  grammar:"連用形＋助動詞『たり』",
  baseForm:"祝ふ",
  meaning:"祝って",
  posAnswer:"動詞",
  typeAnswer:"ハ行四段活用",
  formAnswer:"連用形",
  posChoices:["動詞","名詞","助動詞","副詞"],
  typeChoices:[
    "ハ行四段活用",
    "ハ行上二段活用",
    "ラ行四段活用",
    "マ行四段活用"
  ],
  formChoices:["連用形","終止形","連体形","已然形"],
  explanation:"将来を祝福した。"
},

{
  word:"思ひ",
  grammar:"連用形",
  baseForm:"思ふ",
  meaning:"思って",
  posAnswer:"動詞",
  typeAnswer:"ハ行四段活用",
  formAnswer:"連用形",
  posChoices:["動詞","名詞","助動詞","副詞"],
  typeChoices:[
    "ハ行四段活用",
    "ハ行上二段活用",
    "ラ行四段活用",
    "マ行四段活用"
  ],
  formChoices:["連用形","終止形","連体形","已然形"],
  explanation:"明石の君を思い出した。"
},

{
  word:"叶ひ",
  grammar:"連用形＋助動詞『たり』",
  baseForm:"叶ふ",
  meaning:"叶って",
  posAnswer:"動詞",
  typeAnswer:"ハ行四段活用",
  formAnswer:"連用形",
  posChoices:["動詞","名詞","助動詞","副詞"],
  typeChoices:[
    "ハ行四段活用",
    "ハ行上二段活用",
    "ラ行四段活用",
    "マ行四段活用"
  ],
  formChoices:["連用形","終止形","連体形","已然形"],
  explanation:"長年の願いが実現した。"
},

{
  word:"見守り",
  grammar:"連用形",
  baseForm:"見守る",
  meaning:"見守って",
  posAnswer:"動詞",
  typeAnswer:"ラ行四段活用",
  formAnswer:"連用形",
  posChoices:["動詞","名詞","助動詞","副詞"],
  typeChoices:[
    "ラ行四段活用",
    "ラ行下二段活用",
    "マ行四段活用",
    "カ行四段活用"
  ],
  formChoices:["連用形","終止形","連体形","已然形"],
  explanation:"紫の上は成長を見守った。"
},

{
  word:"願は",
  grammar:"未然形＋助動詞『む』",
  baseForm:"願ふ",
  meaning:"願おう",
  posAnswer:"動詞",
  typeAnswer:"ハ行四段活用",
  formAnswer:"未然形",
  posChoices:["動詞","名詞","助動詞","副詞"],
  typeChoices:[
    "ハ行四段活用",
    "ハ行上二段活用",
    "ラ行四段活用",
    "マ行四段活用"
  ],
  formChoices:["未然形","連用形","終止形","連体形"],
  explanation:"幸せを願おうとする気持ち。"
},

{
  word:"栄え",
  grammar:"名詞",
  baseForm:"栄え",
  meaning:"繁栄",
  posAnswer:"名詞",
  typeAnswer:"なし",
  formAnswer:"なし",
  posChoices:["名詞","動詞","助動詞","副詞"],
  typeChoices:[
    "なし",
    "ラ行四段活用",
    "ク活用",
    "シク活用"
  ],
  formChoices:[
    "なし",
    "終止形",
    "連用形",
    "連体形"
  ],
  explanation:"源氏一族の栄華。"
},

{
  word:"繁栄",
  grammar:"名詞",
  baseForm:"繁栄",
  meaning:"大いに栄えること",
  posAnswer:"名詞",
  typeAnswer:"なし",
  formAnswer:"なし",
  posChoices:["名詞","動詞","助動詞","副詞"],
  typeChoices:[
    "なし",
    "ラ行四段活用",
    "ク活用",
    "シク活用"
  ],
  formChoices:[
    "なし",
    "終止形",
    "連用形",
    "連体形"
  ],
  explanation:"源氏家の絶頂期を表す。"
}
],

  reading:{
  question:"源氏が長年の願いが叶ったと感じた理由は何か。",
  choices:[
    "須磨へ戻れたから",
    "姫君が東宮に仕えるようになったから",
    "右大臣に勝ったから",
    "出家できたから"
  ],
  answer:1,
  comment:"姫君が立派に成長し東宮に仕えるようになったことで、源氏は長年の願いが実現したと感じた。"
},

translation: `
姫君は立派に成長し、
やがて東宮に仕えるようになった。

人々はその将来を喜び、
源氏も深く満足した。

源氏は明石の君との縁を思い、
長年の願いが叶ったと感じる。

紫の上も姫君を見守り、
その幸せを願っていた。

源氏一族の繁栄は頂点に達し、
誰もがその栄華を認めていた。
`
};