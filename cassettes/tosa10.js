const TOSA_CHAPTER10 = {

  id:"tosa10",

  title:"土佐日記",

  chapter:"第10章 帰京",

  text:`

  <span class="word" data-id="0">京</span>

  に

  <span class="word" data-id="1">着き</span>

  て、

  <span class="word" data-id="2">家</span>

  に

  <span class="word" data-id="3">入り</span>

  ぬ。

  <span class="word" data-id="4">旅</span>

  の

  <span class="word" data-id="5">終はり</span>

  を

  <span class="word" data-id="6">喜ぶ</span>

  人

  も

  あれど、

  <span class="word" data-id="7">亡き</span>

  <span class="word" data-id="8">娘</span>

  の

  ことを

  <span class="word" data-id="9">思へ</span>

  ば、

  <span class="word" data-id="10">悲しさ</span>

  なお

  尽き

  せず。

  `,

  words:[

    {
      word:"京",
      baseForm:"京",
      meaning:"みやこ",
      posAnswer:"名詞",
      typeAnswer:"なし",
      formAnswer:"なし",
      posChoices:["名詞","動詞","副詞","助動詞"],
      explanation:"旅の目的地である都。"
    },

    {
      word:"着き",
      baseForm:"着く",
      meaning:"到着する",
      posAnswer:"動詞",
      typeAnswer:"カ行四段活用",
      formAnswer:"連用形",
      posChoices:["動詞","名詞","助動詞","副詞"],
      typeChoices:[
        "カ行四段活用",
        "ラ行四段活用",
        "タ行四段活用",
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
      explanation:"都へ到着すること。"
    },

    {
      word:"家",
      baseForm:"家",
      meaning:"いえ",
      posAnswer:"名詞",
      typeAnswer:"なし",
      formAnswer:"なし",
      posChoices:["名詞","動詞","副詞","助動詞"],
      explanation:"帰ってきた自宅。"
    },

    {
      word:"入り",
      baseForm:"入る",
      meaning:"入る",
      posAnswer:"動詞",
      typeAnswer:"ラ行四段活用",
      formAnswer:"連用形",
      posChoices:["動詞","名詞","助動詞","副詞"],
      typeChoices:[
        "ラ行四段活用",
        "カ行四段活用",
        "マ行四段活用",
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
      explanation:"家の中へ入ること。"
    },

    {
      word:"旅",
      baseForm:"旅",
      meaning:"たび",
      posAnswer:"名詞",
      typeAnswer:"なし",
      formAnswer:"なし",
      posChoices:["名詞","動詞","副詞","助動詞"],
      explanation:"長かった帰京の旅。"
    },

    {
      word:"終はり",
      baseForm:"終はり",
      meaning:"終わり",
      posAnswer:"名詞",
      typeAnswer:"なし",
      formAnswer:"なし",
      posChoices:["名詞","動詞","副詞","助動詞"],
      explanation:"旅の終わり。"
    },

    {
      word:"喜ぶ",
      baseForm:"喜ぶ",
      meaning:"よろこぶ",
      posAnswer:"動詞",
      typeAnswer:"バ行四段活用",
      formAnswer:"終止形",
      posChoices:["動詞","名詞","助動詞","副詞"],
      typeChoices:[
        "バ行四段活用",
        "ラ行四段活用",
        "マ行四段活用",
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
      explanation:"旅が終わったことを喜ぶ。"
    },

    {
      word:"亡き",
      baseForm:"なし",
      meaning:"亡くなった",
      posAnswer:"形容詞",
      typeAnswer:"ク活用",
      formAnswer:"連体形",
      posChoices:["形容詞","動詞","助動詞","名詞"],
      typeChoices:[
        "ク活用",
        "シク活用",
        "ナリ活用",
        "タリ活用"
      ],
      formChoices:[
        "未然形",
        "連用形",
        "終止形",
        "連体形",
        "已然形",
        "命令形"
      ],
      explanation:"亡くなった娘を指す。"
    },

    {
      word:"娘",
      baseForm:"娘",
      meaning:"むすめ",
      posAnswer:"名詞",
      typeAnswer:"なし",
      formAnswer:"なし",
      posChoices:["名詞","動詞","副詞","助動詞"],
      explanation:"土佐で亡くなった娘。"
    },

    {
      word:"思へ",
      baseForm:"思ふ",
      meaning:"思う",
      posAnswer:"動詞",
      typeAnswer:"ハ行四段活用",
      formAnswer:"已然形",
      posChoices:["動詞","名詞","助動詞","副詞"],
      typeChoices:[
        "ハ行四段活用",
        "ラ行四段活用",
        "カ行四段活用",
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
      explanation:"『ば』が続くので已然形。"
    },

    {
      word:"悲しさ",
      baseForm:"悲し",
      meaning:"悲しみ",
      posAnswer:"形容詞",
      typeAnswer:"シク活用",
      formAnswer:"語幹",
      posChoices:["形容詞","動詞","助動詞","名詞"],
      typeChoices:[
        "シク活用",
        "ク活用",
        "ナリ活用",
        "タリ活用"
      ],
      formChoices:[
        "語幹",
        "連用形",
        "終止形",
        "連体形"
      ],
      explanation:"深い悲しみを表す。"
    }

  ],

  reading:{

    question:
    "作者が都へ帰っても悲しみが残った理由は何か。",

    choices:[
      "旅が続いたから",
      "家が壊れていたから",
      "亡くなった娘を思い出したから",
      "都が変わっていたから"
    ],

    answer:2,

    comment:
    "土佐日記は、帰京の喜びだけでなく、娘を失った悲しみも描いて終わる。"

  },

  translation:`

  都へ帰り、

  家に入った。

  旅の終わりを喜ぶ人もいたが、

  亡くなった娘のことを思うと、

  悲しみは消えなかった。

  `

};
