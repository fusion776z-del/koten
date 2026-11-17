const GENJI5 = {
  id: "genji5",
  title: "源氏物語",
  chapter: "第5章 末摘花",

  text: `
源氏は
末摘花のうはさを

<span class="word" data-id="0">聞き</span>て、

一度

<span class="word" data-id="1">会は</span>む

と思ひたり。

やがて対面してみれば、
その姿は
期待に

<span class="word" data-id="2">及ば</span>ず。

されど、
源氏には
どこか

<span class="word" data-id="3">見え</span>たり

ところあり。

末摘花の心を

<span class="word" data-id="4">知り</span>、

深く

<span class="word" data-id="5">思ひ</span>たり。

人々は

<span class="word" data-id="6">笑ひ</span>たり

けれど、

源氏は

<span class="word" data-id="7">見捨て</span>ず、

長く

<span class="word" data-id="8">援助</span>

せり。

これぞ
源氏の

<span class="word" data-id="9">情け深し</span>

心なり。
`,

  words:[
    {
      word:"聞き",
      grammar:"連用形＋接続助詞『て』",
      baseForm:"聞く",
      meaning:"聞いて",
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
        "連用形","終止形","連体形","已然形"
      ],
      explanation:"末摘花の評判を聞いた。"
    },

    {
      word:"会は",
      grammar:"未然形＋助動詞『む』",
      baseForm:"会ふ",
      meaning:"会おう",
      posAnswer:"動詞",
      typeAnswer:"ハ行四段活用",
      formAnswer:"未然形",
      posChoices:["動詞","名詞","助動詞","副詞"],
      typeChoices:[
        "ハ行四段活用",
        "ハ行上二段活用",
        "ラ行四段活用",
        "マ行四段活用"
      ],
      formChoices:[
        "未然形","連用形","終止形","連体形"
      ],
      explanation:"意志の助動詞『む』が続く。"
    },

    {
      word:"及ば",
      grammar:"未然形＋助動詞『ず』",
      baseForm:"及ぶ",
      meaning:"達しない",
      posAnswer:"動詞",
      typeAnswer:"バ行四段活用",
      formAnswer:"未然形",
      posChoices:["動詞","名詞","助動詞","副詞"],
      typeChoices:[
        "バ行四段活用",
        "マ行四段活用",
        "ラ行四段活用",
        "カ行四段活用"
      ],
      formChoices:[
        "未然形","連用形","終止形","連体形"
      ],
      explanation:"打消の助動詞『ず』が続く。"
    },

    {
      word:"見え",
      grammar:"連用形＋助動詞『たり』",
      baseForm:"見ゆ",
      meaning:"見えて",
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
        "連用形","終止形","連体形","已然形"
      ],
      explanation:"源氏には魅力が感じられた。"
    },

    {
      word:"知り",
      grammar:"連用形",
      baseForm:"知る",
      meaning:"理解して",
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
        "連用形","終止形","連体形","已然形"
      ],
      explanation:"末摘花の人柄を理解した。"
    },

    {
      word:"思ひ",
      grammar:"連用形＋助動詞『たり』",
      baseForm:"思ふ",
      meaning:"思って",
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
        "連用形","終止形","連体形","已然形"
      ],
      explanation:"源氏は末摘花を気の毒に思った。"
    },

    {
      word:"笑ひ",
      grammar:"連用形＋助動詞『たり』",
      baseForm:"笑ふ",
      meaning:"笑って",
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
        "連用形","終止形","連体形","已然形"
      ],
      explanation:"人々は末摘花を笑った。"
    },

    {
      word:"見捨て",
      grammar:"連用形＋助動詞『ず』",
      baseForm:"見捨つ",
      meaning:"見放さず",
      posAnswer:"動詞",
      typeAnswer:"タ行下二段活用",
      formAnswer:"連用形",
      posChoices:["動詞","名詞","助動詞","副詞"],
      typeChoices:[
        "タ行下二段活用",
        "タ行四段活用",
        "ラ行四段活用",
        "マ行四段活用"
      ],
      formChoices:[
        "連用形","終止形","連体形","已然形"
      ],
      explanation:"最後まで見放さなかった。"
    },

    {
      word:"援助",
      grammar:"名詞",
      baseForm:"援助",
      meaning:"助け支えること",
      posAnswer:"名詞",
      typeAnswer:"なし",
      formAnswer:"なし",
      posChoices:["名詞","動詞","助動詞","副詞"],
      explanation:"源氏は末摘花を支え続けた。"
    },

    {
      word:"情け深し",
      grammar:"終止形",
      baseForm:"情け深し",
      meaning:"思いやりが深い",
      posAnswer:"形容詞",
      typeAnswer:"シク活用",
      formAnswer:"終止形",
      posChoices:["形容詞","動詞","助動詞","名詞"],
      typeChoices:[
        "シク活用",
        "ク活用",
        "ナリ活用",
        "タリ活用"
      ],
      formChoices:[
        "終止形","連体形","連用形","未然形"
      ],
      explanation:"源氏の優しさを表す。"
    }
  ],

  reading:{
    question:"源氏が末摘花を見捨てなかった理由として最も適切なものはどれか。",
    choices:[
      "美しかったから",
      "身分が高かったから",
      "人柄に誠実さを感じたから",
      "帝に命令されたから"
    ],
    answer:2,
    comment:"源氏は末摘花の外見ではなく、その人柄を理解し支え続けた。"
  },

  translation:`
源氏は末摘花の評判を聞き、
会ってみたいと思った。

しかし実際に会うと、
期待した姿とは違っていた。

それでも源氏は末摘花の誠実な心を知り、
見捨てることなく支え続けた。

ここには源氏の情け深さがよく表れている。
`
};