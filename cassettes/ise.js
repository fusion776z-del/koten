const ISE = {

  id:"ise",

  title:"伊勢物語",

  chapter:"第1章 初冠",

  text:`

  <span class="word" data-id="0">昔</span>、

  <span class="word" data-id="1">男</span>

  あり

  <span class="word" data-id="2">けり</span>。

  <span class="word" data-id="3">初冠</span>

  して、

  <span class="word" data-id="4">奈良</span>

  の

  <span class="word" data-id="5">京</span>、

  <span class="word" data-id="6">春日</span>

  の

  <span class="word" data-id="7">里</span>

  に

  <span class="word" data-id="8">しる</span>

  よしして、

  <span class="word" data-id="9">狩り</span>

  に

  <span class="word" data-id="10">往に</span>

  <span class="word" data-id="11">けり</span>。

  `,

  words:[

    {
      word:"昔",
      baseForm:"昔",
      meaning:"むかし",
      posAnswer:"名詞",
      typeAnswer:"なし",
      formAnswer:"なし",
      posChoices:["名詞","動詞","副詞","助動詞"],
      explanation:"物語の始まりを表す。"
    },

    {
      word:"男",
      baseForm:"男",
      meaning:"おとこ",
      posAnswer:"名詞",
      typeAnswer:"なし",
      formAnswer:"なし",
      posChoices:["名詞","動詞","副詞","助動詞"],
      explanation:"主人公。在原業平がモデルとされる。"
    },

    {
      word:"けり",
      baseForm:"けり",
      meaning:"〜た",
      posAnswer:"助動詞",
      typeAnswer:"特殊型",
      formAnswer:"終止形",
      posChoices:["助動詞","動詞","助詞","形容詞"],
      typeChoices:["特殊型","ク活用","シク活用","タリ活用"],
      formChoices:["終止形","連体形","連用形","未然形"],
      explanation:"過去を表す助動詞。"
    },

    {
      word:"初冠",
      baseForm:"初冠",
      meaning:"元服",
      posAnswer:"名詞",
      typeAnswer:"なし",
      formAnswer:"なし",
      posChoices:["名詞","動詞","副詞","助動詞"],
      explanation:"成人の儀式。"
    },

    {
      word:"奈良",
      baseForm:"奈良",
      meaning:"奈良",
      posAnswer:"名詞",
      typeAnswer:"なし",
      formAnswer:"なし",
      posChoices:["名詞","動詞","副詞","助動詞"],
      explanation:"奈良の都。"
    },

    {
      word:"京",
      baseForm:"京",
      meaning:"都",
      posAnswer:"名詞",
      typeAnswer:"なし",
      formAnswer:"なし",
      posChoices:["名詞","動詞","副詞","助動詞"],
      explanation:"都のこと。"
    },

    {
      word:"春日",
      baseForm:"春日",
      meaning:"春日地方",
      posAnswer:"名詞",
      typeAnswer:"なし",
      formAnswer:"なし",
      posChoices:["名詞","動詞","副詞","助動詞"],
      explanation:"奈良の地名。"
    },

    {
      word:"里",
      baseForm:"里",
      meaning:"村・集落",
      posAnswer:"名詞",
      typeAnswer:"なし",
      formAnswer:"なし",
      posChoices:["名詞","動詞","副詞","助動詞"],
      explanation:"人の住む場所。"
    },

    {
      word:"しる",
      baseForm:"知る",
      meaning:"知っている",
      posAnswer:"動詞",
      typeAnswer:"ラ行四段活用",
      formAnswer:"連体形",
      posChoices:["動詞","名詞","助動詞","副詞"],
      typeChoices:[
        "ラ行四段活用",
        "カ行四段活用",
        "ハ行四段活用",
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
      explanation:"ラ行四段活用動詞『知る』。"
    },

    {
      word:"狩り",
      baseForm:"狩り",
      meaning:"狩猟",
      posAnswer:"名詞",
      typeAnswer:"なし",
      formAnswer:"なし",
      posChoices:["名詞","動詞","副詞","助動詞"],
      explanation:"狩りをすること。"
    },

    {
      word:"往に",
      baseForm:"往ぬ",
      meaning:"行く",
      posAnswer:"動詞",
      typeAnswer:"ナ行変格活用",
      formAnswer:"連用形",
      posChoices:["動詞","名詞","助動詞","副詞"],
      typeChoices:[
        "ナ行変格活用",
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
      explanation:"ナ変動詞『往ぬ』の連用形。"
    },

    {
      word:"けり",
      baseForm:"けり",
      meaning:"〜た",
      posAnswer:"助動詞",
      typeAnswer:"特殊型",
      formAnswer:"終止形",
      posChoices:["助動詞","動詞","助詞","形容詞"],
      typeChoices:["特殊型","ク活用","シク活用","タリ活用"],
      formChoices:["終止形","連体形","連用形","未然形"],
      explanation:"過去を表す助動詞。"
    }

  ],

  reading:{

    question:
    "男は初冠の後、何をしに行ったか。",

    choices:[
      "都へ戻った",
      "勉強した",
      "狩りに行った",
      "旅に出た"
    ],

    answer:2,

    comment:
    "男は春日の里へ狩りに出かけた。"

  },

  translation:`

  昔、

  一人の男がいた。

  元服をして、

  奈良の都の春日の里へ、

  狩りに出かけた。

  `

};