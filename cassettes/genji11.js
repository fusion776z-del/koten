const GENJI11 = {
  id: "genji11",
  title: "源氏物語",
  chapter: "第11章 澪標",

 text: `
源氏は
都へ

<span class="word" data-id="0">帰り</span>ぬ。

その名誉は

<span class="word" data-id="1">回復し</span>たり。

人々は
源氏を

<span class="word" data-id="2">迎へ</span>、

栄華は

<span class="word" data-id="3">戻り</span>たり。

源氏は
明石の君との縁を

<span class="word" data-id="4">思ひ</span>、

姫君の成長を

<span class="word" data-id="5">願ひ</span>たり。

やがて
娘は

<span class="word" data-id="6">育ち</span>、

将来への期待は

<span class="word" data-id="7">増し</span>たり。

源氏は
新たな

<span class="word" data-id="8">希望</span>

を抱き、

未来を

<span class="word" data-id="9">見つめ</span>たり。
`,

 words:[
{
  word:"帰り",
  grammar:"連用形＋完了の助動詞『ぬ』",
  baseForm:"帰る",
  meaning:"帰って",
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
  explanation:"源氏は都へ戻った。"
},

{
  word:"回復し",
  grammar:"連用形＋助動詞『たり』",
  baseForm:"回復す",
  meaning:"回復して",
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
  explanation:"名誉が回復した。"
},

{
  word:"迎へ",
  grammar:"連用形",
  baseForm:"迎ふ",
  meaning:"迎えて",
  posAnswer:"動詞",
  typeAnswer:"ハ行下二段活用",
  formAnswer:"連用形",
  posChoices:["動詞","名詞","助動詞","副詞"],
  typeChoices:[
    "ハ行下二段活用",
    "ハ行四段活用",
    "ラ行四段活用",
    "マ行四段活用"
  ],
  formChoices:["連用形","終止形","連体形","已然形"],
  explanation:"人々が源氏を歓迎した。"
},

{
  word:"戻り",
  grammar:"連用形＋助動詞『たり』",
  baseForm:"戻る",
  meaning:"戻って",
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
  explanation:"源氏の栄華が戻った。"
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
  explanation:"明石の君を思う。"
},

{
  word:"願ひ",
  grammar:"連用形＋助動詞『たり』",
  baseForm:"願ふ",
  meaning:"願って",
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
  explanation:"姫君の将来を願った。"
},

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
  formChoices:["連用形","終止形","連体形","已然形"],
  explanation:"期待が大きくなった。"
},

{
  word:"希望",
  grammar:"名詞",
  baseForm:"希望",
  meaning:"のぞみ",
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
  explanation:"新たな人生への希望。"
},

{
  word:"見つめ",
  grammar:"連用形＋助動詞『たり』",
  baseForm:"見つむ",
  meaning:"見つめて",
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
  explanation:"未来へ目を向けた。"
}
],

reading:{
  question:"野分の巻で人々が特に感心した人物は誰か。",
  choices:[
    "朧月夜",
    "空蝉",
    "紫の上",
    "六条御息所"
  ],
  answer:2,
  comment:"紫の上は落ち着いた気品を保ち、多くの人から尊敬されていた。"
},
translation: `
源氏は都へ戻り、
再び名誉と地位を取り戻した。

人々は源氏を歓迎し、
失われていた栄華も戻ってきた。

源氏は明石の君との縁を思い、
成長する姫君の将来に希望を抱く。

苦しい流離の日々を越え、
新たな人生が始まろうとしていた。
`
};