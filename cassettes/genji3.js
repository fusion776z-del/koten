const GENJI3 = {
  id: "genji3",
  title: "源氏物語",
  chapter: "第3章 夕顔",

  text: `
源氏は
夕顔の花を

<span class="word" data-id="0">見</span>たり。

その家の女に
心を

<span class="word" data-id="1">寄せ</span>たり。

やがて
逢瀬を

<span class="word" data-id="2">重ね</span>、

深く

<span class="word" data-id="3">契り</span>たり。

ある夜、
荒れた屋敷に

<span class="word" data-id="4">宿り</span>しに、

物の怪が

<span class="word" data-id="5">現れ</span>たり。

夕顔は

<span class="word" data-id="6">苦しみ</span>、

つひに

<span class="word" data-id="7">息絶え</span>ぬ。

源氏は深い

<span class="word" data-id="8">悲嘆</span>

の中で、

人の世の無常を

<span class="word" data-id="9">知り</span>ぬ。
`,

  words:[
    {
      word:"見",
      grammar:"連用形＋助動詞『たり』",
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
      formChoices:[
        "連用形",
        "終止形",
        "連体形",
        "已然形"
      ],
      explanation:"夕顔の花を見つけた。"
    },

    {
      word:"寄せ",
      grammar:"連用形＋助動詞『たり』",
      baseForm:"寄す",
      meaning:"心を向けて",
      posAnswer:"動詞",
      typeAnswer:"サ行下二段活用",
      formAnswer:"連用形",
      posChoices:["動詞","名詞","助動詞","副詞"],
      typeChoices:[
        "サ行下二段活用",
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
      explanation:"夕顔に恋心を抱いた。"
    },

    {
      word:"重ね",
      grammar:"連用形",
      baseForm:"重ぬ",
      meaning:"繰り返して",
      posAnswer:"動詞",
      typeAnswer:"ナ行下二段活用",
      formAnswer:"連用形",
      posChoices:["動詞","名詞","助動詞","副詞"],
      typeChoices:[
        "ナ行下二段活用",
        "ナ行四段活用",
        "ラ行四段活用",
        "マ行四段活用"
      ],
      formChoices:[
        "連用形",
        "終止形",
        "連体形",
        "已然形"
      ],
      explanation:"逢瀬を何度も重ねた。"
    },

    {
      word:"契り",
      grammar:"連用形＋助動詞『たり』",
      baseForm:"契る",
      meaning:"愛を誓って",
      posAnswer:"動詞",
      typeAnswer:"ラ行四段活用",
      formAnswer:"連用形",
      posChoices:["動詞","名詞","助動詞","副詞"],
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
      explanation:"夕顔と深く結ばれた。"
    },

    {
      word:"宿り",
      grammar:"連用形＋助動詞『き』",
      baseForm:"宿る",
      meaning:"泊まって",
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
      explanation:"荒れた屋敷に泊まった。"
    },

    {
      word:"現れ",
      grammar:"連用形＋助動詞『たり』",
      baseForm:"現る",
      meaning:"現れて",
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
      explanation:"物の怪が現れた。"
    },

    {
      word:"苦しみ",
      grammar:"連用形",
      baseForm:"苦しむ",
      meaning:"苦しんで",
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
      explanation:"夕顔は急に苦しみ始めた。"
    },

    {
      word:"息絶え",
      grammar:"連用形＋完了の助動詞『ぬ』",
      baseForm:"息絶ゆ",
      meaning:"息絶えて",
      posAnswer:"動詞",
      typeAnswer:"ヤ行下二段活用",
      formAnswer:"連用形",
      posChoices:["動詞","名詞","助動詞","副詞"],
      typeChoices:[
        "ヤ行下二段活用",
        "ヤ行上二段活用",
        "ラ行四段活用",
        "マ行四段活用"
      ],
      formChoices:[
        "連用形",
        "終止形",
        "連体形",
        "已然形"
      ],
      explanation:"夕顔の死を表す。"
    },

    {
      word:"悲嘆",
      grammar:"名詞",
      baseForm:"悲嘆",
      meaning:"深い悲しみ",
      posAnswer:"名詞",
      typeAnswer:"なし",
      formAnswer:"なし",
      posChoices:["名詞","動詞","助動詞","副詞"],
      explanation:"夕顔を失った悲しみ。"
    },

    {
      word:"知り",
      grammar:"連用形＋完了の助動詞『ぬ』",
      baseForm:"知る",
      meaning:"知って",
      posAnswer:"動詞",
      typeAnswer:"ラ行四段活用",
      formAnswer:"連用形",
      posChoices:["動詞","名詞","助動詞","副詞"],
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
      explanation:"人の世の無常を思い知った。"
    }
  ],

  reading:{
    question:"夕顔が亡くなった原因として最も適切なものはどれか。",
    choices:[
      "病気",
      "戦",
      "物の怪",
      "事故"
    ],
    answer:2,
    comment:"夕顔は荒れた屋敷で物の怪に取りつかれ、命を落としたと描かれている。"
  },

  translation:`
源氏は夕顔の花をきっかけに、
夕顔という女性と出会った。

二人は親しくなったが、
ある夜、荒れた屋敷で物の怪が現れる。

夕顔は苦しみの末に亡くなり、
源氏は深い悲しみに包まれた。

この出来事によって源氏は、
人生の無常を強く感じることになる。
`
};