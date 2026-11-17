const GENJI20 = {
  id: "genji20",
  title: "源氏物語",
  chapter: "第20章 御法",

  text: `
紫の上は

<span class="word" data-id="0">病み</span>たり。

源氏は
その身を

<span class="word" data-id="1">案じ</span>、

回復を

<span class="word" data-id="2">願ひ</span>たり。

されど
病は

<span class="word" data-id="3">重く</span>、

日ごとに

<span class="word" data-id="4">衰へ</span>たり。

紫の上は
静かに

<span class="word" data-id="5">語り</span>、

人々に思ひを

<span class="word" data-id="6">伝へ</span>たり。

やがて
その命は

<span class="word" data-id="7">尽き</span>ぬ。

源氏は深く

<span class="word" data-id="8">悲しみ</span>、

人生の

<span class="word" data-id="9">無常</span>

を思ひ知る。
`,

  words:[
{
  word:"病み",
  grammar:"連用形＋助動詞『たり』",
  baseForm:"病む",
  meaning:"病気になって",
  posAnswer:"動詞",
  typeAnswer:"マ行四段活用",
  formAnswer:"連用形",
  posChoices:["動詞","名詞","助動詞","副詞"],
  typeChoices:[
    "マ行四段活用",
    "ラ行四段活用",
    "バ行四段活用",
    "カ行四段活用"
  ],
  formChoices:[
    "連用形",
    "終止形",
    "連体形",
    "已然形"
  ],
  explanation:"紫の上が病気になった。"
},

{
  word:"案じ",
  grammar:"連用形",
  baseForm:"案ず",
  meaning:"心配して",
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
  formChoices:[
    "連用形",
    "終止形",
    "連体形",
    "已然形"
  ],
  explanation:"源氏は病状を心配した。"
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
  formChoices:[
    "連用形",
    "終止形",
    "連体形",
    "已然形"
  ],
  explanation:"回復を願った。"
},

{
  word:"重く",
  grammar:"連用形",
  baseForm:"重し",
  meaning:"重く",
  posAnswer:"形容詞",
  typeAnswer:"ク活用",
  formAnswer:"連用形",
  posChoices:["形容詞","動詞","助動詞","副詞"],
  typeChoices:[
    "ク活用",
    "シク活用",
    "ナリ活用",
    "タリ活用"
  ],
  formChoices:[
    "連用形",
    "終止形",
    "連体形",
    "已然形"
  ],
  explanation:"病状が悪化した。"
},

{
  word:"衰へ",
  grammar:"連用形＋助動詞『たり』",
  baseForm:"衰ふ",
  meaning:"衰えて",
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
  formChoices:[
    "連用形",
    "終止形",
    "連体形",
    "已然形"
  ],
  explanation:"体力が衰えていった。"
},

{
  word:"語り",
  grammar:"連用形",
  baseForm:"語る",
  meaning:"語って",
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
    "連用形",
    "終止形",
    "連体形",
    "已然形"
  ],
  explanation:"最後の思いを語った。"
},

{
  word:"伝へ",
  grammar:"連用形＋助動詞『たり』",
  baseForm:"伝ふ",
  meaning:"伝えて",
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
  formChoices:[
    "連用形",
    "終止形",
    "連体形",
    "已然形"
  ],
  explanation:"周囲の人へ思いを伝えた。"
},

{
  word:"尽き",
  grammar:"連用形＋完了の助動詞『ぬ』",
  baseForm:"尽く",
  meaning:"尽きて",
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
  formChoices:[
    "連用形",
    "終止形",
    "連体形",
    "已然形"
  ],
  explanation:"紫の上の命が尽きた。"
},

{
  word:"悲しみ",
  grammar:"連用形",
  baseForm:"悲しむ",
  meaning:"悲しんで",
  posAnswer:"動詞",
  typeAnswer:"マ行四段活用",
  formAnswer:"連用形",
  posChoices:["動詞","名詞","助動詞","副詞"],
  typeChoices:[
    "マ行四段活用",
    "ラ行四段活用",
    "バ行四段活用",
    "カ行四段活用"
  ],
  formChoices:[
    "連用形",
    "終止形",
    "連体形",
    "已然形"
  ],
  explanation:"源氏は深い悲しみに沈んだ。"
},

{
  word:"無常",
  grammar:"名詞",
  baseForm:"無常",
  meaning:"すべては移り変わること",
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
  explanation:"源氏物語全体を貫く思想。"
}
],

  reading:{
  question:"紫の上の死によって源氏が強く感じたものは何か。",
  choices:[
    "勝利の喜び",
    "権力の大切さ",
    "人生の無常",
    "旅への憧れ"
  ],
  answer:2,
  comment:"最愛の紫の上を失ったことで、源氏は人生の無常を深く思い知った。"
},

translation: `
紫の上は重い病に苦しんでいた。

源氏は回復を願ったが、
病状は次第に悪化していく。

紫の上は静かに人々へ思いを伝え、
やがてその命を終えた。

源氏は深い悲しみに沈み、
最愛の人との別れを受け入れることになる。

そして人生の無常を改めて思い知ったのであった。
`
};