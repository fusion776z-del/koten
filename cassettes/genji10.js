const GENJI10 = {
  id: "genji10",
  title: "源氏物語",
  chapter: "第10章 明石",

text: `
須磨にて
嵐の夜を

<span class="word" data-id="0">過ごし</span>たり。

源氏は
夢に

<span class="word" data-id="1">導かれ</span>、

明石へ

<span class="word" data-id="2">渡り</span>ぬ。

そこで
入道の娘を

<span class="word" data-id="3">見</span>たり。

その姿は

<span class="word" data-id="4">美しく</span>、

源氏の心は

<span class="word" data-id="5">動き</span>たり。

やがて
二人は

<span class="word" data-id="6">契り</span>、

姫君が

<span class="word" data-id="7">生まれ</span>ぬ。

源氏は
将来を

<span class="word" data-id="8">思は</span>む

こと多く、

娘の

<span class="word" data-id="9">幸ひ</span>

を願ひたり。
`,

  words:[
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
  formChoices:["連用形","終止形","連体形","已然形"],
  explanation:"須磨での生活を送った。"
},

{
  word:"導かれ",
  grammar:"連用形",
  baseForm:"導く",
  meaning:"導かれて",
  posAnswer:"動詞",
  typeAnswer:"カ行四段活用",
  formAnswer:"連用形",
  posChoices:["動詞","名詞","助動詞","副詞"],
  typeChoices:[
    "カ行四段活用",
    "カ行下二段活用",
    "ラ行四段活用",
    "マ行四段活用"
  ],
  formChoices:["連用形","終止形","連体形","已然形"],
  explanation:"夢のお告げに導かれた。"
},

{
  word:"渡り",
  grammar:"連用形＋完了の助動詞『ぬ』",
  baseForm:"渡る",
  meaning:"渡って",
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
  explanation:"明石へ移った。"
},

{
  word:"見",
  grammar:"連用形＋助動詞『たり』",
  baseForm:"見る",
  meaning:"見て",
  posAnswer:"動詞",
  typeAnswer:"マ行上一段活用",
  formAnswer:"連用形",
  posChoices:["動詞","名詞","助動詞","副詞"],
  typeChoices:[
    "マ行上一段活用",
    "マ行四段活用",
    "ラ行四段活用",
    "カ行下二段活用"
  ],
  formChoices:["連用形","終止形","連体形","已然形"],
  explanation:"明石の君を見た。"
},

{
  word:"美しく",
  grammar:"連用形",
  baseForm:"美し",
  meaning:"美しく",
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
  formChoices:["連用形","終止形","連体形","已然形"],
  explanation:"明石の君の美しさ。"
},

{
  word:"動き",
  grammar:"連用形＋助動詞『たり』",
  baseForm:"動く",
  meaning:"心が動いて",
  posAnswer:"動詞",
  typeAnswer:"カ行四段活用",
  formAnswer:"連用形",
  posChoices:["動詞","名詞","助動詞","副詞"],
  typeChoices:[
    "カ行四段活用",
    "カ行下二段活用",
    "ラ行四段活用",
    "マ行四段活用"
  ],
  formChoices:["連用形","終止形","連体形","已然形"],
  explanation:"源氏の心が動いた。"
},

{
  word:"契り",
  grammar:"連用形",
  baseForm:"契る",
  meaning:"愛を誓って",
  posAnswer:"動詞",
  typeAnswer:"ラ行四段活用",
  formAnswer:"連用形",
  posChoices:["動詞","名詞","助動詞","副詞"],
  typeChoices:[
    "ラ行四段活用",
    "ラ行下二段活用",
    "カ行四段活用",
    "マ行四段活用"
  ],
  formChoices:["連用形","終止形","連体形","已然形"],
  explanation:"二人は結ばれた。"
},

{
  word:"生まれ",
  grammar:"連用形＋完了の助動詞『ぬ』",
  baseForm:"生まる",
  meaning:"生まれて",
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
  formChoices:["連用形","終止形","連体形","已然形"],
  explanation:"明石の姫君が誕生した。"
},

{
  word:"思は",
  grammar:"未然形＋助動詞『む』",
  baseForm:"思ふ",
  meaning:"思おう",
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
  explanation:"将来への思案を表す。"
},

{
  word:"幸ひ",
  grammar:"名詞",
  baseForm:"幸ひ",
  meaning:"幸福",
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
    "ク活用",
    "シク活用",
    "ラ行四段活用"
  ],
  formChoices:[
    "なし",
    "終止形",
    "連用形",
    "連体形"
  ],
  explanation:"娘の幸福を願った。"
}
],

  reading: {
    question:
      "明石の君との間に生まれた姫君は、後にどのような存在となるか。",
    choices: [
      "斎宮",
      "中宮",
      "女房",
      "尼君"
    ],
    answer: 1,
    comment:
      "明石の君の娘は後に中宮となり、源氏一門の栄華を支える重要な存在となる。"
  },

  translation: `
  源氏は須磨での嵐の後、明石へ移った。
  そこで明石入道とその娘である明石の君に出会う。
  入道は源氏を深く敬い、
  娘との縁を願った。
  やがて二人は結ばれ、
  一人の姫君が生まれる。
  この姫君は後に中宮となり、
  源氏一門の繁栄を支える存在となった。
  源氏は流離の苦しみの中から、
  再び希望を見いだしたのであった。
  `
};