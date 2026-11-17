const GENJI12 = {
  id: "genji12",
  title: "源氏物語",
  chapter: "第12章 少女",

 text: `
姫君は

<span class="word" data-id="0">育ち</span>、

美しく

<span class="word" data-id="1">なり</span>ぬ。

紫の上は
姫君を

<span class="word" data-id="2">愛し</span>、

大切に

<span class="word" data-id="3">育て</span>たり。

姫君は
学問を

<span class="word" data-id="4">学び</span>、

教養を

<span class="word" data-id="5">身につけ</span>たり。

源氏は
その姿を

<span class="word" data-id="6">見</span>て、

将来を

<span class="word" data-id="7">頼もしく</span>

思ひたり。

やがて
姫君は

<span class="word" data-id="8">成長し</span>、

多くの

<span class="word" data-id="9">期待</span>

を集めたり。
`,

words:[
{
  word:"育ち",
  grammar:"連用形",
  baseForm:"育つ",
  meaning:"成長して",
  posAnswer:"動詞",
  typeAnswer:"タ行四段活用",
  formAnswer:"連用形",
  posChoices:["動詞","名詞","助動詞","副詞"],
  typeChoices:[
    "タ行四段活用",
    "タ行下二段活用",
    "ラ行四段活用",
    "マ行四段活用"
  ],
  formChoices:["連用形","終止形","連体形","已然形"],
  explanation:"姫君が成長した。"
},

{
  word:"なり",
  grammar:"連用形＋完了の助動詞『ぬ』",
  baseForm:"なる",
  meaning:"なって",
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
  explanation:"美しい女性へ成長した。"
},

{
  word:"愛し",
  grammar:"連用形",
  baseForm:"愛す",
  meaning:"愛して",
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
  explanation:"紫の上は姫君を深く愛した。"
},

{
  word:"育て",
  grammar:"連用形＋助動詞『たり』",
  baseForm:"育つ",
  meaning:"育てて",
  posAnswer:"動詞",
  typeAnswer:"タ行下二段活用",
  formAnswer:"連用形",
  posChoices:["動詞","名詞","助動詞","副詞"],
  typeChoices:[
    "タ行下二段活用",
    "タ行四段活用",
    "ラ行四段活用",
    "マ行四段活用"
  ],
  formChoices:["連用形","終止形","連体形","已然形"],
  explanation:"大切に養育した。"
},

{
  word:"学び",
  grammar:"連用形",
  baseForm:"学ぶ",
  meaning:"学んで",
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
  explanation:"学問を修めた。"
},

{
  word:"身につけ",
  grammar:"連用形＋助動詞『たり』",
  baseForm:"身につく",
  meaning:"身につけて",
  posAnswer:"動詞",
  typeAnswer:"カ行下二段活用",
  formAnswer:"連用形",
  posChoices:["動詞","名詞","助動詞","副詞"],
  typeChoices:[
    "カ行下二段活用",
    "カ行四段活用",
    "ラ行下二段活用",
    "マ行四段活用"
  ],
  formChoices:["連用形","終止形","連体形","已然形"],
  explanation:"教養を身につけた。"
},

{
  word:"見",
  grammar:"連用形＋接続助詞『て』",
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
  explanation:"姫君の成長した姿を見た。"
},

{
  word:"頼もしく",
  grammar:"連用形",
  baseForm:"頼もし",
  meaning:"頼もしく",
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
  explanation:"将来に期待する気持ち。"
},

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
  explanation:"姫君の成長を表す。"
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
  explanation:"周囲の期待を集めた。"
}
],

reading:{
  question:"紫の上が姫君に対して行ったことは何か。",
  choices:[
    "都へ追放した",
    "養育し教養を身につけさせた",
    "出家させた",
    "明石へ返した"
  ],
  answer:1,
  comment:"紫の上は姫君を大切に育て、優れた教養を身につけさせた。"
},

translation: `
姫君は美しく成長し、
学問や教養を身につけていった。

紫の上は実の母のように
姫君を大切に育てた。

源氏はその姿を見て喜び、
将来を頼もしく感じる。

姫君には多くの期待が集まり、
明るい未来が開かれていた。
`
};