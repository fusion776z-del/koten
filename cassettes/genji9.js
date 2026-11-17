const GENJI9 = {
  id: "genji9",
  title: "源氏物語",
  chapter: "第9章 須磨",

  text: `
源氏は
都を

<span class="word" data-id="0">離れ</span>て、

須磨に

<span class="word" data-id="1">移り</span>ぬ。

海辺の暮らしは
都とは異なり、

<span class="word" data-id="2">わびしく</span>

感じられたり。

源氏は
都の日々を

<span class="word" data-id="3">思ひ</span>、

藤壺や紫の上を

<span class="word" data-id="4">恋ひ</span>たり。

やがて
嵐が

<span class="word" data-id="5">起こり</span>、

不安は

<span class="word" data-id="6">増し</span>たり。

されど
心を

<span class="word" data-id="7">失は</span>ず、

日々を

<span class="word" data-id="8">過ごし</span>たり。

この経験は
後の

<span class="word" data-id="9">成長</span>

につながる。
`,

 words:[
{
  word:"離れ",
  grammar:"連用形＋接続助詞『て』",
  baseForm:"離る",
  meaning:"離れて",
  posAnswer:"動詞",
  typeAnswer:"ラ行下二段活用",
  formAnswer:"連用形",
  posChoices:["動詞","名詞","助動詞","副詞"],
  typeChoices:[
    "ラ行下二段活用",
    "ラ行四段活用",
    "カ行下二段活用",
    "マ行四段活用"
  ],
  formChoices:[
    "連用形","終止形","連体形","已然形"
  ],
  explanation:"都を離れた。"
},

{
  word:"移り",
  grammar:"連用形＋完了の助動詞『ぬ』",
  baseForm:"移る",
  meaning:"移って",
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
  formChoices:[
    "連用形","終止形","連体形","已然形"
  ],
  explanation:"須磨へ移った。"
},

{
  word:"わびしく",
  grammar:"連用形",
  baseForm:"わびし",
  meaning:"さびしく",
  posAnswer:"形容詞",
  typeAnswer:"シク活用",
  formAnswer:"連用形",
  posChoices:["形容詞","動詞","助動詞","副詞"],
  typeChoices:[
    "シク活用",
    "ク活用",
    "ナリ活用",
    "タリ活用"
  ],
  formChoices:[
    "連用形","終止形","連体形","已然形"
  ],
  explanation:"孤独な心情を表す。"
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
  formChoices:[
    "連用形","終止形","連体形","已然形"
  ],
  explanation:"都での日々を思い出す。"
},

{
  word:"恋ひ",
  grammar:"連用形＋助動詞『たり』",
  baseForm:"恋ふ",
  meaning:"恋しく思って",
  posAnswer:"動詞",
  typeAnswer:"ハ行上二段活用",
  formAnswer:"連用形",
  posChoices:["動詞","名詞","助動詞","副詞"],
  typeChoices:[
    "ハ行上二段活用",
    "ハ行四段活用",
    "ラ行四段活用",
    "マ行四段活用"
  ],
  formChoices:[
    "連用形","終止形","連体形","已然形"
  ],
  explanation:"都の人々を恋しく思う。"
},

{
  word:"起こり",
  grammar:"連用形",
  baseForm:"起こる",
  meaning:"起こって",
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
  formChoices:[
    "連用形","終止形","連体形","已然形"
  ],
  explanation:"嵐が発生した。"
},

{
  word:"増し",
  grammar:"連用形＋助動詞『たり』",
  baseForm:"増す",
  meaning:"増して",
  posAnswer:"動詞",
  typeAnswer:"サ行四段活用",
  formAnswer:"連用形",
  posChoices:["動詞","名詞","助動詞","副詞"],
  typeChoices:[
    "サ行四段活用",
    "サ行変格活用",
    "ラ行四段活用",
    "マ行四段活用"
  ],
  formChoices:[
    "連用形","終止形","連体形","已然形"
  ],
  explanation:"不安が大きくなった。"
},

{
  word:"失は",
  grammar:"未然形＋助動詞『ず』",
  baseForm:"失ふ",
  meaning:"失わず",
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
  formChoices:[
    "未然形","連用形","終止形","連体形"
  ],
  explanation:"希望を失わなかった。"
},

{
  word:"過ごし",
  grammar:"連用形＋助動詞『たり』",
  baseForm:"過ごす",
  meaning:"過ごして",
  posAnswer:"動詞",
  typeAnswer:"サ行四段活用",
  formAnswer:"連用形",
  posChoices:["動詞","名詞","助動詞","副詞"],
  typeChoices:[
    "サ行四段活用",
    "サ行変格活用",
    "ラ行四段活用",
    "マ行四段活用"
  ],
  formChoices:[
    "連用形","終止形","連体形","已然形"
  ],
  explanation:"須磨での日々を送った。"
},

{
  word:"成長",
  grammar:"名詞",
  baseForm:"成長",
  meaning:"人としての成長",
  posAnswer:"名詞",
  typeAnswer:"なし",
  formAnswer:"なし",
  posChoices:[
    "名詞",
    "動詞",
    "助動詞",
    "副詞"
  ],
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
  explanation:"須磨での経験が源氏を成長させた。"
}
],

  reading: {
    question:
      "須磨での生活が源氏にもたらしたものとして最も適切なものはどれか。",
    choices: [
      "さらなる権力",
      "戦いの勝利",
      "人間的な成長",
      "即位"
    ],
    answer: 2,
    comment:
      "須磨での孤独と苦難の日々は、源氏に自己を見つめ直させ、人間的な成長をもたらした。"
  },

  translation: `
  源氏は世間の非難を避けるため、
  須磨へ退いた。
  都を離れた生活は孤独で、
  海辺の景色を眺めながら
  親しい人々を恋しく思った。
  激しい嵐にも見舞われ、
  自らの運命を深く考えるようになる。
  しかしこの流離の日々は、
  源氏を大きく成長させ、
  後の栄華への土台となったのである。
  `
};