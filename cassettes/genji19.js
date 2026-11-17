const GENJI19 = {
  id: "genji19",
  title: "源氏物語",
  chapter: "第19章 横笛",

  text: `
柏木は
罪の意識に

<span class="word" data-id="0">苦しみ</span>たり。

心は

<span class="word" data-id="1">休まら</span>ず、

病は

<span class="word" data-id="2">重く</span>

なりぬ。

柏木は
友を

<span class="word" data-id="3">呼び</span>、

最後の言葉を

<span class="word" data-id="4">語り</span>たり。

やがて
命は

<span class="word" data-id="5">尽き</span>ぬ。

人々は

<span class="word" data-id="6">悲しみ</span>、

その死を

<span class="word" data-id="7">惜しみ</span>たり。

残された横笛は

<span class="word" data-id="8">思ひ出</span>

を伝へ、

深い

<span class="word" data-id="9">哀しみ</span>

を残した。
`,

 words:[
{
  word:"苦しみ",
  grammar:"連用形＋助動詞『たり』",
  baseForm:"苦しむ",
  meaning:"苦しんで",
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
  formChoices:["連用形","終止形","連体形","已然形"],
  explanation:"柏木は罪の意識に苦しんだ。"
},

{
  word:"休まら",
  grammar:"未然形＋助動詞『ず』",
  baseForm:"休まる",
  meaning:"休まらず",
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
  explanation:"心が安まらなかった。"
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
  formChoices:["連用形","終止形","連体形","已然形"],
  explanation:"病状が悪化した。"
},

{
  word:"呼び",
  grammar:"連用形",
  baseForm:"呼ぶ",
  meaning:"呼んで",
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
  explanation:"友人を呼び寄せた。"
},

{
  word:"語り",
  grammar:"連用形＋助動詞『たり』",
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
  formChoices:["連用形","終止形","連体形","已然形"],
  explanation:"最後の言葉を語った。"
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
  formChoices:["連用形","終止形","連体形","已然形"],
  explanation:"柏木の命が尽きた。"
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
  formChoices:["連用形","終止形","連体形","已然形"],
  explanation:"人々は深く悲しんだ。"
},

{
  word:"惜しみ",
  grammar:"連用形＋助動詞『たり』",
  baseForm:"惜しむ",
  meaning:"惜しんで",
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
  formChoices:["連用形","終止形","連体形","已然形"],
  explanation:"死を惜しんだ。"
},

{
  word:"思ひ出",
  grammar:"名詞",
  baseForm:"思ひ出",
  meaning:"思い出",
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
  explanation:"横笛に込められた記憶。"
},

{
  word:"哀しみ",
  grammar:"名詞",
  baseForm:"哀しみ",
  meaning:"深い悲しみ",
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
  explanation:"柏木の死が残した悲しみ。"
}
],

  reading:{
  question:"柏木の死後、人々に残されたものは何か。",
  choices:[
    "名誉",
    "財産",
    "深い悲しみと思い出",
    "新しい権力"
  ],
  answer:2,
  comment:"柏木の死は人々に深い悲しみを残し、横笛は思い出の象徴となった。"
},

translation: `
柏木は罪の意識に苦しみ続けた。

心は休まらず、
病も次第に重くなっていく。

やがて柏木は友人たちに別れを告げ、
静かに人生を終えた。

人々はその死を深く悲しみ、
失われた存在を惜しんだ。

残された横笛は、
柏木との思い出を今に伝えていた。
`
};