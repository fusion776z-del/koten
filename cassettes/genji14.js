const GENJI14 = {
  id: "genji14",
  title: "源氏物語",
  chapter: "第14章 胡蝶",

 text: `
玉鬘の美しさは

<span class="word" data-id="0">広まり</span>、

多くの人が

<span class="word" data-id="1">集まり</span>たり。

貴公子たちは

<span class="word" data-id="2">求め</span>て、

文を

<span class="word" data-id="3">送り</span>たり。

されど
玉鬘は

<span class="word" data-id="4">迷ひ</span>、

心は

<span class="word" data-id="5">定まら</span>ず。

源氏は
玉鬘を

<span class="word" data-id="6">守り</span>、

軽々しく

<span class="word" data-id="7">決め</span>む

ことを許さず。

玉鬘は

<span class="word" data-id="8">美しく</span>、

その将来には

<span class="word" data-id="9">期待</span>

が集まりたり。
`,

 words:[
{
  word:"広まり",
  grammar:"連用形",
  baseForm:"広まる",
  meaning:"広まって",
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
  explanation:"玉鬘の評判が広まった。"
},

{
  word:"集まり",
  grammar:"連用形＋助動詞『たり』",
  baseForm:"集まる",
  meaning:"集まって",
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
  explanation:"多くの人が集まった。"
},

{
  word:"求め",
  grammar:"連用形＋接続助詞『て』",
  baseForm:"求む",
  meaning:"求めて",
  posAnswer:"動詞",
  typeAnswer:"マ行下二段活用",
  formAnswer:"連用形",
  posChoices:["動詞","名詞","助動詞","副詞"],
  typeChoices:[
    "マ行下二段活用",
    "マ行四段活用",
    "ラ行下二段活用",
    "カ行下二段活用"
  ],
  formChoices:["連用形","終止形","連体形","已然形"],
  explanation:"求婚しようとした。"
},

{
  word:"送り",
  grammar:"連用形＋助動詞『たり』",
  baseForm:"送る",
  meaning:"送って",
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
  explanation:"恋文を送った。"
},

{
  word:"迷ひ",
  grammar:"連用形",
  baseForm:"迷ふ",
  meaning:"迷って",
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
  explanation:"将来について迷った。"
},

{
  word:"定まら",
  grammar:"未然形＋助動詞『ず』",
  baseForm:"定まる",
  meaning:"定まらず",
  posAnswer:"動詞",
  typeAnswer:"ラ行四段活用",
  formAnswer:"未然形",
  posChoices:["動詞","名詞","助動詞","副詞"],
  typeChoices:[
    "ラ行四段活用",
    "ラ行下二段活用",
    "マ行四段活用",
    "カ行四段活用"
  ],
  formChoices:["未然形","連用形","終止形","連体形"],
  explanation:"気持ちが定まらなかった。"
},

{
  word:"守り",
  grammar:"連用形",
  baseForm:"守る",
  meaning:"守って",
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
  explanation:"源氏が玉鬘を保護した。"
},

{
  word:"決め",
  grammar:"未然形＋助動詞『む』",
  baseForm:"決む",
  meaning:"決めよう",
  posAnswer:"動詞",
  typeAnswer:"マ行下二段活用",
  formAnswer:"未然形",
  posChoices:["動詞","名詞","助動詞","副詞"],
  typeChoices:[
    "マ行下二段活用",
    "マ行四段活用",
    "ラ行下二段活用",
    "カ行下二段活用"
  ],
  formChoices:["未然形","連用形","終止形","連体形"],
  explanation:"結婚相手を決めようとすること。"
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
  explanation:"玉鬘の美貌を表す。"
},

{
  word:"期待",
  grammar:"名詞",
  baseForm:"期待",
  meaning:"将来への望み",
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
  explanation:"多くの期待を集めた。"
}
],

reading:{
  question:"玉鬘が結婚相手について迷っていた理由は何か。",
  choices:[
    "求婚者が多かったから",
    "都を離れたかったから",
    "出家したかったから",
    "病気だったから"
  ],
  answer:0,
  comment:"玉鬘には多くの求婚者がおり、結婚相手を簡単に決めることができなかった。"
},

  translation: `
玉鬘の評判は広く知られ、
多くの貴公子が求婚した。

恋文も数多く届けられたが、
玉鬘の心は簡単には定まらない。

源氏は玉鬘を守り、
軽々しく結婚相手を決めることを
許さなかった。

玉鬘の将来には、
多くの期待が寄せられていた。
`
};