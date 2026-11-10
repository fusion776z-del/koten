const TOSA = {

  id:"tosa",

  title:"土佐日記",

  chapter:"第1章 男もすなる日記",

  text:`

  <span class="word" data-id="0">男</span>

  も

  <span class="word" data-id="1">すなる</span>

  <span class="word" data-id="2">日記</span>

  と

  いふものを、

  <span class="word" data-id="3">女</span>

  もして

  <span class="word" data-id="4">みむ</span>

  とてするなり。

  `,

  words:[

    {
      word:"男",
      baseForm:"男",
      meaning:"男性",
      posAnswer:"名詞",
      typeAnswer:"なし",
      formAnswer:"なし",
      posChoices:["名詞","動詞","副詞","助動詞"],
      explanation:"男性を表す。"
    },

    {
      word:"すなる",
      baseForm:"す",
      meaning:"するらしい",
      posAnswer:"動詞",
      typeAnswer:"サ行変格活用",
      formAnswer:"連体形",
      posChoices:["動詞","助動詞","名詞","副詞"],
      typeChoices:[
        "サ行変格活用",
        "ラ行四段活用",
        "カ行変格活用",
        "下二段活用"
      ],
      formChoices:[
        "未然形",
        "連用形",
        "終止形",
        "連体形",
        "已然形",
        "命令形"
      ],
      explanation:"『なり』が付いた形。"
    },

    {
      word:"日記",
      baseForm:"日記",
      meaning:"にっき",
      posAnswer:"名詞",
      typeAnswer:"なし",
      formAnswer:"なし",
      posChoices:["名詞","動詞","副詞","助動詞"],
      explanation:"毎日の出来事を書くもの。"
    },

    {
      word:"女",
      baseForm:"女",
      meaning:"女性",
      posAnswer:"名詞",
      typeAnswer:"なし",
      formAnswer:"なし",
      posChoices:["名詞","動詞","副詞","助動詞"],
      explanation:"作者が女性になりきっている。"
    },

    {
      word:"みむ",
      baseForm:"見る",
      meaning:"やってみよう",
      posAnswer:"動詞",
      typeAnswer:"マ行上一段活用",
      formAnswer:"未然形",
      posChoices:["動詞","名詞","助動詞","副詞"],
      typeChoices:[
        "マ行上一段活用",
        "ラ行四段活用",
        "下二段活用",
        "ナ行変格活用"
      ],
      formChoices:[
        "未然形",
        "連用形",
        "終止形",
        "連体形",
        "已然形",
        "命令形"
      ],
      explanation:"意志の助動詞『む』が続く。"
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