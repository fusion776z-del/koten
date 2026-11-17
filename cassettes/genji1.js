const GENJI1 = {
  id: "genji1",
  title: "源氏物語",
  chapter: "第1章 桐壺",

  text: `
桐壺更衣は
帝の寵愛を

<span class="word" data-id="0">受け</span>たり。

されど、
人々の

<span class="word" data-id="1">ねたみ</span>

<span class="word" data-id="2">深く</span>、

心

<span class="word" data-id="3">安から</span>ず。

やがて皇子

<span class="word" data-id="4">生まれ</span>

<span class="word" data-id="5">給ひ</span>て、

のちの光源氏と

<span class="word" data-id="6">なり</span>ぬ。

されど、
更衣は病

<span class="word" data-id="7">重く</span>

なりて、

つひに

<span class="word" data-id="8">亡く</span>。

帝の悲しみは

<span class="word" data-id="9">限りなし</span>。
`,

  words:[
    {
      word:"受け",
      grammar:"連用形＋助動詞『たり』",
      baseForm:"受く",
      meaning:"受けて",
      posAnswer:"動詞",
      typeAnswer:"カ行下二段活用",
      formAnswer:"連用形",
      posChoices:["動詞","名詞","助動詞","副詞"],
      typeChoices:[
        "カ行下二段活用",
        "カ行四段活用",
        "ラ行四段活用",
        "ナ行変格活用"
      ],
      formChoices:[
        "連用形",
        "終止形",
        "連体形",
        "已然形"
      ],
      explanation:"帝の寵愛を受けた。"
    },

    {
      word:"ねたみ",
      grammar:"連用形",
      baseForm:"ねたむ",
      meaning:"嫉妬して",
      posAnswer:"動詞",
      typeAnswer:"マ行四段活用",
      formAnswer:"連用形",
      posChoices:["動詞","名詞","助動詞","副詞"],
      typeChoices:[
        "マ行四段活用",
        "ラ行四段活用",
        "カ行四段活用",
        "バ行四段活用"
      ],
      formChoices:[
        "連用形",
        "終止形",
        "連体形",
        "已然形"
      ],
      explanation:"周囲の人々の嫉妬。"
    },

    {
      word:"深く",
      grammar:"連用形",
      baseForm:"深し",
      meaning:"非常に",
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
      explanation:"ねたみの強さを表す。"
    },

    {
      word:"安から",
      grammar:"未然形＋助動詞『ず』",
      baseForm:"安し",
      meaning:"穏やかでなく",
      posAnswer:"形容詞",
      typeAnswer:"ク活用",
      formAnswer:"未然形",
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
        "連体形"
      ],
      explanation:"心安らかでない状態。"
    },

    {
      word:"生まれ",
      grammar:"連用形",
      baseForm:"生まる",
      meaning:"生まれて",
      posAnswer:"動詞",
      typeAnswer:"ラ行下二段活用",
      formAnswer:"連用形",
      posChoices:["動詞","名詞","助動詞","副詞"],
      typeChoices:[
        "ラ行下二段活用",
        "ラ行四段活用",
        "カ行下二段活用",
        "マ行四段活用"
      ],
      formChoices:[
        "連用形",
        "終止形",
        "連体形",
        "已然形"
      ],
      explanation:"皇子の誕生。"
    },

    {
      word:"給ひ",
      grammar:"連用形＋接続助詞『て』",
      baseForm:"給ふ",
      meaning:"お〜になって",
      posAnswer:"動詞",
      typeAnswer:"ハ行四段活用",
      formAnswer:"連用形",
      posChoices:["動詞","助動詞","名詞","副詞"],
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
      explanation:"尊敬の補助動詞。"
    },

    {
      word:"なり",
      grammar:"連用形＋完了の助動詞『ぬ』",
      baseForm:"なる",
      meaning:"なって",
      posAnswer:"動詞",
      typeAnswer:"ラ行四段活用",
      formAnswer:"連用形",
      posChoices:["動詞","助動詞","名詞","副詞"],
      typeChoices:[
        "ラ行四段活用",
        "ラ行下二段活用",
        "カ行四段活用",
        "マ行四段活用"
      ],
      formChoices:[
        "連用形",
        "終止形",
        "連体形",
        "已然形"
      ],
      explanation:"光源氏となった。"
    },

    {
      word:"重く",
      grammar:"連用形",
      baseForm:"重し",
      meaning:"重く",
      posAnswer:"形容詞",
      typeAnswer:"ク活用",
      formAnswer:"連用形",
      posChoices:["形容詞","動詞","副詞","助動詞"],
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
      explanation:"病状を表す。"
    },

    {
      word:"亡く",
      grammar:"連用形",
      baseForm:"亡く",
      meaning:"死んで",
      posAnswer:"動詞",
      typeAnswer:"カ行四段活用",
      formAnswer:"連用形",
      posChoices:["動詞","名詞","助動詞","副詞"],
      typeChoices:[
        "カ行四段活用",
        "ラ行四段活用",
        "マ行四段活用",
        "サ行変格活用"
      ],
      formChoices:[
        "連用形",
        "終止形",
        "連体形",
        "已然形"
      ],
      explanation:"更衣の死を表す。"
    },

    {
      word:"限りなし",
      grammar:"終止形",
      baseForm:"限りなし",
      meaning:"際限がない",
      posAnswer:"形容詞",
      typeAnswer:"ク活用",
      formAnswer:"終止形",
      posChoices:["形容詞","動詞","助動詞","名詞"],
      typeChoices:[
        "ク活用",
        "シク活用",
        "ナリ活用",
        "タリ活用"
      ],
      formChoices:[
        "終止形",
        "連体形",
        "連用形",
        "未然形"
      ],
      explanation:"帝の悲しみの深さを表す。"
    }
  ],

  reading:{
    question:"桐壺更衣が人々からねたまれた理由は何か。",
    choices:[
      "身分が高かったから",
      "帝の寵愛を受けたから",
      "財産が多かったから",
      "学問に優れていたから"
    ],
    answer:1,
    comment:"桐壺更衣は帝から特別な寵愛を受けたため、人々の嫉妬を集めた。"
  },

  translation:`
桐壺更衣は帝の寵愛を受けていた。
しかし周囲の人々の嫉妬は激しく、
心安らかに暮らせなかった。

やがて皇子が生まれ、
後の光源氏となる。

しかし桐壺更衣は病に倒れ、
若くして亡くなってしまう。

帝の悲しみは限りなく深かった。
`
};