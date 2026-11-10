const TOSA_CHAPTER3 = {

  id:"tosa3",

  title:"土佐日記",

  chapter:"第3章 船出",

  text:`

  <span class="word" data-id="0">舟</span>

  に

  <span class="word" data-id="1">乗り</span>

  て、

  <span class="word" data-id="2">浦</span>

  より

  <span class="word" data-id="3">漕ぎ</span>

  出づ。

  <span class="word" data-id="4">人々</span>

  、

  <span class="word" data-id="5">別れ</span>

  を

  <span class="word" data-id="6">惜しみ</span>

  て、

  <span class="word" data-id="7">酒</span>

  飲み

  <span class="word" data-id="8">けり</span>。

  <span class="word" data-id="9">海</span>

  の

  <span class="word" data-id="10">上</span>

  は

  いと

  <span class="word" data-id="11">静か</span>

  なり。

  `,

  words:[

    {
      word:"舟",
      baseForm:"舟",
      meaning:"ふね",
      posAnswer:"名詞",
      typeAnswer:"なし",
      formAnswer:"なし",
      posChoices:["名詞","動詞","副詞","助動詞"],
      explanation:"帰京のための船。"
    },

    {
      word:"乗り",
      baseForm:"乗る",
      meaning:"乗る",
      posAnswer:"動詞",
      typeAnswer:"ラ行四段活用",
      formAnswer:"連用形",
      posChoices:["動詞","名詞","助動詞","副詞"],
      typeChoices:[
        "ラ行四段活用",
        "カ行四段活用",
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
      explanation:"船に乗ること。"
    },

    {
      word:"浦",
      baseForm:"浦",
      meaning:"海辺",
      posAnswer:"名詞",
      typeAnswer:"なし",
      formAnswer:"なし",
      posChoices:["名詞","動詞","副詞","助動詞"],
      explanation:"船が出る海辺。"
    },

    {
      word:"漕ぎ",
      baseForm:"漕ぐ",
      meaning:"こぐ",
      posAnswer:"動詞",
      typeAnswer:"ガ行四段活用",
      formAnswer:"連用形",
      posChoices:["動詞","名詞","助動詞","副詞"],
      typeChoices:[
        "ガ行四段活用",
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
      explanation:"船をこぐこと。"
    },

    {
      word:"人々",
      baseForm:"人々",
      meaning:"人たち",
      posAnswer:"名詞",
      typeAnswer:"なし",
      formAnswer:"なし",
      posChoices:["名詞","動詞","副詞","助動詞"],
      explanation:"同行者たち。"
    },

    {
      word:"別れ",
      baseForm:"別る",
      meaning:"別れること",
      posAnswer:"動詞",
      typeAnswer:"ラ行下二段活用",
      formAnswer:"連用形",
      posChoices:["動詞","名詞","助動詞","副詞"],
      typeChoices:[
        "ラ行下二段活用",
        "ラ行四段活用",
        "ハ行下二段活用",
        "上一段活用"
      ],
      formChoices:[
        "未然形",
        "連用形",
        "終止形",
        "連体形",
        "已然形",
        "命令形"
      ],
      explanation:"人との別れ。"
    },

    {
      word:"惜しみ",
      baseForm:"惜しむ",
      meaning:"名残を惜しむ",
      posAnswer:"動詞",
      typeAnswer:"マ行四段活用",
      formAnswer:"連用形",
      posChoices:["動詞","名詞","助動詞","副詞"],
      typeChoices:[
        "マ行四段活用",
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
      explanation:"別れを残念に思うこと。"
    },

    {
      word:"酒",
      baseForm:"酒",
      meaning:"さけ",
      posAnswer:"名詞",
      typeAnswer:"なし",
      formAnswer:"なし",
      posChoices:["名詞","動詞","副詞","助動詞"],
      explanation:"送別の酒。"
    },

    {
      word:"けり",
      baseForm:"けり",
      meaning:"〜た",
      posAnswer:"助動詞",
      typeAnswer:"特殊型",
      formAnswer:"終止形",
      posChoices:["助動詞","動詞","助詞","形容詞"],
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
      explanation:"過去を表す助動詞。"
    },

    {
      word:"海",
      baseForm:"海",
      meaning:"うみ",
      posAnswer:"名詞",
      typeAnswer:"なし",
      formAnswer:"なし",
      posChoices:["名詞","動詞","副詞","助動詞"],
      explanation:"土佐から京へ向かう海。"
    },

    {
      word:"上",
      baseForm:"上",
      meaning:"うえ",
      posAnswer:"名詞",
      typeAnswer:"なし",
      formAnswer:"なし",
      posChoices:["名詞","動詞","副詞","助動詞"],
      explanation:"海の上。"
    },

    {
      word:"静か",
      baseForm:"静かなり",
      meaning:"静かだ",
      posAnswer:"形容動詞",
      typeAnswer:"ナリ活用",
      formAnswer:"語幹",
      posChoices:[
        "形容動詞",
        "形容詞",
        "動詞",
        "名詞"
      ],
      typeChoices:[
        "ナリ活用",
        "タリ活用",
        "ク活用",
        "シク活用"
      ],
      formChoices:[
        "語幹",
        "連用形",
        "終止形",
        "連体形"
      ],
      explanation:"穏やかな海の様子。"
    }

  ],

  reading:{

    question:
    "船が出るとき、人々は何をしたか。",

    choices:[
      "狩りをした",
      "和歌を書いた",
      "別れを惜しんで酒を飲んだ",
      "海で泳いだ"
    ],

    answer:2,

    comment:
    "人々は別れを惜しみ、送別の酒を飲んだ。"

  },

  translation:`

  船に乗り、

  海辺から出発した。

  人々は別れを惜しみながら

  酒を飲んだ。

  海の上はとても静かだった。

  `

};