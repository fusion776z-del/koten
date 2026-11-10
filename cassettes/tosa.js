const TOSA = {

  id:"tosa",

  title:"土佐日記",

  chapter:"第1章 男もすなる日記",

text:`

<span class="word" data-id="0">男</span>

<span class="word" data-id="1">も</span>

<span class="word" data-id="2">す</span>

<span class="word" data-id="3">なる</span>

<span class="word" data-id="4">日記</span>

<span class="word" data-id="5">と</span>

<span class="word" data-id="6">いふ</span>

ものを、

<span class="word" data-id="7">女</span>

もして

<span class="word" data-id="8">み</span>

<span class="word" data-id="9">む</span>

<span class="word" data-id="10">とて</span>

<span class="word" data-id="11">する</span>

なり。

<span class="word" data-id="12">それ</span>

の

<span class="word" data-id="13">年</span>

の

<span class="word" data-id="14">門出</span>

なり。

`,

words:[

{
  word:"男",
  baseForm:"男",
  meaning:"男性",
  posAnswer:"名詞",
  typeAnswer:"なし",
  formAnswer:"なし",
  posChoices:["名詞","動詞","助詞","副詞"],
  explanation:"男性を表す。"
},

{
  word:"も",
  baseForm:"も",
  meaning:"〜も",
  posAnswer:"助詞",
  typeAnswer:"なし",
  formAnswer:"なし",
  posChoices:["助詞","名詞","副詞","助動詞"],
  explanation:"係助詞。"
},

{
  word:"す",
  baseForm:"す",
  meaning:"する",
  posAnswer:"動詞",
  typeAnswer:"サ行変格活用",
  formAnswer:"終止形",
  posChoices:["動詞","助動詞","名詞","副詞"],
  typeChoices:[
    "サ行変格活用",
    "カ行変格活用",
    "ラ行四段活用",
    "下二段活用"
  ],
  formChoices:[
    "終止形",
    "連体形",
    "連用形",
    "未然形"
  ],
  explanation:"サ変動詞。"
},

{
  word:"なる",
  baseForm:"なり",
  meaning:"〜だそうだ",
  posAnswer:"助動詞",
  typeAnswer:"特殊型",
  formAnswer:"連体形",
  posChoices:["助動詞","動詞","助詞","名詞"],
  typeChoices:[
    "特殊型",
    "ク活用",
    "シク活用",
    "タリ活用"
  ],
  formChoices:[
    "連体形",
    "終止形",
    "連用形",
    "未然形"
  ],
  explanation:"伝聞の助動詞『なり』。"
},

{
  word:"日記",
  baseForm:"日記",
  meaning:"にっき",
  posAnswer:"名詞",
  typeAnswer:"なし",
  formAnswer:"なし",
  posChoices:["名詞","動詞","助詞","副詞"],
  explanation:"毎日の出来事を書くもの。"
},

{
  word:"と",
  baseForm:"と",
  meaning:"〜と",
  posAnswer:"助詞",
  typeAnswer:"なし",
  formAnswer:"なし",
  posChoices:["助詞","副詞","名詞","助動詞"],
  explanation:"格助詞。"
},

{
  word:"いふ",
  baseForm:"言ふ",
  meaning:"いう",
  posAnswer:"動詞",
  typeAnswer:"ハ行四段活用",
  formAnswer:"連体形",
  posChoices:["動詞","助動詞","名詞","副詞"],
  typeChoices:[
    "ハ行四段活用",
    "ラ行四段活用",
    "カ行四段活用",
    "下二段活用"
  ],
  formChoices:[
    "連体形",
    "終止形",
    "連用形",
    "未然形"
  ],
  explanation:"『〜という』の形。"
},

{
  word:"女",
  baseForm:"女",
  meaning:"女性",
  posAnswer:"名詞",
  typeAnswer:"なし",
  formAnswer:"なし",
  posChoices:["名詞","動詞","助詞","副詞"],
  explanation:"紀貫之が女性になりきっている。"
},

{
  word:"み",
  baseForm:"見る",
  meaning:"やってみる",
  posAnswer:"動詞",
  typeAnswer:"マ行上一段活用",
  formAnswer:"未然形",
  posChoices:["動詞","助動詞","名詞","副詞"],
  typeChoices:[
    "マ行上一段活用",
    "マ行四段活用",
    "ラ行四段活用",
    "下二段活用"
  ],
  formChoices:[
    "未然形",
    "連用形",
    "終止形",
    "連体形"
  ],
  explanation:"助動詞『む』が続く。"
},

{
  word:"む",
  baseForm:"む",
  meaning:"〜しよう",
  posAnswer:"助動詞",
  typeAnswer:"特殊型",
  formAnswer:"終止形",
  posChoices:["助動詞","動詞","助詞","名詞"],
  typeChoices:[
    "特殊型",
    "ク活用",
    "シク活用",
    "タリ活用"
  ],
  formChoices:[
    "終止形",
    "連体形",
    "連用形",
    "未然形"
  ],
  explanation:"意志の助動詞。"
},

{
  word:"とて",
  baseForm:"とて",
  meaning:"〜と思って",
  posAnswer:"助詞",
  typeAnswer:"なし",
  formAnswer:"なし",
  posChoices:["助詞","副詞","助動詞","名詞"],
  explanation:"理由を表す。"
},

{
  word:"する",
  baseForm:"す",
  meaning:"する",
  posAnswer:"動詞",
  typeAnswer:"サ行変格活用",
  formAnswer:"連体形",
  posChoices:["動詞","助動詞","名詞","副詞"],
  typeChoices:[
    "サ行変格活用",
    "カ行変格活用",
    "ラ行四段活用",
    "下二段活用"
  ],
  formChoices:[
    "連体形",
    "終止形",
    "連用形",
    "未然形"
  ],
  explanation:"サ変動詞。"
},

{
  word:"それ",
  baseForm:"それ",
  meaning:"その",
  posAnswer:"連体詞",
  typeAnswer:"なし",
  formAnswer:"なし",
  posChoices:["連体詞","名詞","副詞","助詞"],
  explanation:"後ろの名詞を修飾する。"
},

{
  word:"年",
  baseForm:"年",
  meaning:"とし",
  posAnswer:"名詞",
  typeAnswer:"なし",
  formAnswer:"なし",
  posChoices:["名詞","副詞","動詞","助詞"],
  explanation:"年月の年。"
},

{
  word:"門出",
  baseForm:"門出",
  meaning:"旅立ち",
  posAnswer:"名詞",
  typeAnswer:"なし",
  formAnswer:"なし",
  posChoices:["名詞","動詞","副詞","助詞"],
  explanation:"旅の出発。"
}

],

  reading:{

    question:
    "土佐日記は誰の立場で書かれているか。",

    choices:[
      "武士",
      "僧",
      "女性",
      "天皇"
    ],

    answer:2,

    comment:
    "作者の紀貫之は男性だが、女性の立場で日記を書いている。"

  },

  translation:`

  男が書くという日記というものを、

  女の私も書いてみようと思って書くのである。

  `

};