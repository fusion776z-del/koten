const GENJI2 = {
  id: "genji2",
  title: "源氏物語",
  chapter: "第2章 空蝉",

  text: `
源氏は
空蝉に

<span class="word" data-id="0">ひかれ</span>たり。

空蝉は
身分の差を思ひて、

源氏を

<span class="word" data-id="1">避け</span>たり。

されど、
源氏の

<span class="word" data-id="2">思ひ</span>

は

<span class="word" data-id="3">深く</span>、

<span class="word" data-id="4">忘るる</span>

こと

<span class="word" data-id="5">なし</span>。

ある夜、
空蝉は

<span class="word" data-id="6">逃げ去り</span>て、

ただ衣のみを

<span class="word" data-id="7">残し</span>たり。

源氏は
その形見を見て、

いと

<span class="word" data-id="8">悲しく</span>

思ひ、

恋の

<span class="word" data-id="9">苦しさ</span>

を知りぬ。
`,

  words:[
    {
      word:"ひかれ",
      grammar:"連用形＋助動詞『たり』",
      baseForm:"ひかる",
      meaning:"心をひかれて",
      posAnswer:"動詞",
      typeAnswer:"ラ行四段活用",
      formAnswer:"連用形",
      posChoices:["動詞","名詞","助動詞","副詞"],
      typeChoices:[
        "ラ行四段活用",
        "カ行四段活用",
        "マ行四段活用",
        "バ行四段活用"
      ],
      formChoices:[
        "連用形",
        "終止形",
        "連体形",
        "已然形"
      ],
      explanation:"源氏は空蝉に魅了された。"
    },

    {
      word:"避け",
      grammar:"連用形＋助動詞『たり』",
      baseForm:"避く",
      meaning:"避けて",
      posAnswer:"動詞",
      typeAnswer:"カ行下二段活用",
      formAnswer:"連用形",
      posChoices:["動詞","名詞","助動詞","副詞"],
      typeChoices:[
        "カ行下二段活用",
        "カ行四段活用",
        "ラ行四段活用",
        "マ行四段活用"
      ],
      formChoices:[
        "連用形",
        "終止形",
        "連体形",
        "已然形"
      ],
      explanation:"空蝉は源氏を避けた。"
    },

    {
      word:"思ひ",
      grammar:"連用形",
      baseForm:"思ふ",
      meaning:"恋心",
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
      explanation:"源氏の強い恋心。"
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
      explanation:"思いの強さを表す。"
    },

    {
      word:"忘るる",
      grammar:"連体形",
      baseForm:"忘る",
      meaning:"忘れる",
      posAnswer:"動詞",
      typeAnswer:"ラ行下二段活用",
      formAnswer:"連体形",
      posChoices:["動詞","名詞","助動詞","副詞"],
      typeChoices:[
        "ラ行下二段活用",
        "ラ行四段活用",
        "カ行下二段活用",
        "マ行四段活用"
      ],
      formChoices:[
        "連体形",
        "連用形",
        "終止形",
        "已然形"
      ],
      explanation:"空蝉を忘れられない。"
    },

    {
      word:"なし",
      grammar:"終止形",
      baseForm:"なし",
      meaning:"ない",
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
      explanation:"打消を表す。"
    },

    {
      word:"逃げ去り",
      grammar:"連用形＋接続助詞『て』",
      baseForm:"逃げ去る",
      meaning:"逃げ去って",
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
      explanation:"空蝉は姿を消した。"
    },

    {
      word:"残し",
      grammar:"連用形＋助動詞『たり』",
      baseForm:"残す",
      meaning:"残して",
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
      formChoices:[
        "連用形",
        "終止形",
        "連体形",
        "已然形"
      ],
      explanation:"衣だけを残した。"
    },

    {
      word:"悲しく",
      grammar:"連用形",
      baseForm:"悲し",
      meaning:"悲しく",
      posAnswer:"形容詞",
      typeAnswer:"シク活用",
      formAnswer:"連用形",
      posChoices:["形容詞","動詞","助動詞","名詞"],
      typeChoices:[
        "シク活用",
        "ク活用",
        "ナリ活用",
        "タリ活用"
      ],
      formChoices:[
        "連用形",
        "終止形",
        "連体形",
        "已然形"
      ],
      explanation:"源氏の心情を表す。"
    },

    {
      word:"苦しさ",
      grammar:"名詞",
      baseForm:"苦しさ",
      meaning:"つらさ",
      posAnswer:"名詞",
      typeAnswer:"なし",
      formAnswer:"なし",
      posChoices:["名詞","動詞","助動詞","副詞"],
      explanation:"恋の苦悩を表す。"
    }
  ],

  reading:{
    question:"空蝉が源氏を避け続けた理由として最も適切なものはどれか。",
    choices:[
      "源氏が嫌いだったから",
      "都を離れる予定だったから",
      "身分の差を意識していたから",
      "他に恋人がいたから"
    ],
    answer:2,
    comment:"空蝉は身分の差を意識し、源氏の思いに応えようとしなかった。"
  },

  translation:`
源氏は空蝉に心をひかれた。

しかし空蝉は身分の違いを考え、
源氏を避け続けた。

それでも源氏は空蝉を忘れられなかった。

ある夜、空蝉は姿を消し、
衣だけを残した。

源氏はその衣を見て深く悲しみ、
恋の苦しさを知ったのであった。
`
};