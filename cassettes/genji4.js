const GENJI4 = {
  id: "genji4",
  title: "源氏物語",
  chapter: "第4章 若紫",

  text: `
源氏は
北山を

<span class="word" data-id="0">訪ね</span>たり。

そこで
美しき少女を

<span class="word" data-id="1">見つけ</span>、

そのけはひを

<span class="word" data-id="2">ゆかしく</span>

思ひたり。

少女は
藤壺に

<span class="word" data-id="3">似</span>たり。

源氏は
その姿に

<span class="word" data-id="4">ひかれ</span>たり。

やがて
少女を

<span class="word" data-id="5">引き取り</span>て、

理想の女性に

<span class="word" data-id="6">育て</span>む

と
思ひたり。

この少女は
後の

<span class="word" data-id="7">紫の上</span>

なり。

ここより
二人の運命は

<span class="word" data-id="8">動き始め</span>たり。

源氏は
未来を

<span class="word" data-id="9">思ひ</span>たり。
`,

  words:[
    {
      word:"訪ね",
      grammar:"連用形＋助動詞『たり』",
      baseForm:"訪ぬ",
      meaning:"訪ねて",
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
        "連用形","終止形","連体形","已然形"
      ],
      explanation:"源氏が北山を訪れた。"
    },

    {
      word:"見つけ",
      grammar:"連用形",
      baseForm:"見つく",
      meaning:"見つけて",
      posAnswer:"動詞",
      typeAnswer:"カ行下二段活用",
      formAnswer:"連用形",
      posChoices:["動詞","名詞","助動詞","副詞"],
      typeChoices:[
        "カ行下二段活用",
        "カ行四段活用",
        "ラ行下二段活用",
        "マ行四段活用"
      ],
      formChoices:[
        "連用形","終止形","連体形","已然形"
      ],
      explanation:"若紫を見つけた。"
    },

    {
      word:"ゆかしく",
      grammar:"連用形",
      baseForm:"ゆかし",
      meaning:"知りたい・見たい",
      posAnswer:"形容詞",
      typeAnswer:"シク活用",
      formAnswer:"連用形",
      posChoices:["形容詞","動詞","副詞","助動詞"],
      typeChoices:[
        "シク活用",
        "ク活用",
        "ナリ活用",
        "タリ活用"
      ],
      formChoices:[
        "連用形","終止形","連体形","已然形"
      ],
      explanation:"興味をひかれる気持ち。"
    },

    {
      word:"似",
      grammar:"連用形＋助動詞『たり』",
      baseForm:"似る",
      meaning:"似て",
      posAnswer:"動詞",
      typeAnswer:"ナ行上一段活用",
      formAnswer:"連用形",
      posChoices:["動詞","名詞","助動詞","副詞"],
      typeChoices:[
        "ナ行上一段活用",
        "ナ行下二段活用",
        "ラ行四段活用",
        "マ行四段活用"
      ],
      formChoices:[
        "連用形","終止形","連体形","已然形"
      ],
      explanation:"藤壺によく似ていた。"
    },

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
        "連用形","終止形","連体形","已然形"
      ],
      explanation:"源氏は強く魅了された。"
    },

    {
      word:"引き取り",
      grammar:"連用形＋接続助詞『て』",
      baseForm:"引き取る",
      meaning:"迎え入れて",
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
        "連用形","終止形","連体形","已然形"
      ],
      explanation:"若紫を自邸へ迎えた。"
    },

    {
      word:"育て",
      grammar:"未然形＋助動詞『む』",
      baseForm:"育つ",
      meaning:"育てよう",
      posAnswer:"動詞",
      typeAnswer:"タ行下二段活用",
      formAnswer:"未然形",
      posChoices:["動詞","名詞","助動詞","副詞"],
      typeChoices:[
        "タ行下二段活用",
        "タ行四段活用",
        "ラ行四段活用",
        "マ行四段活用"
      ],
      formChoices:[
        "未然形","連用形","終止形","連体形"
      ],
      explanation:"理想の女性に育てようと考えた。"
    },

    {
      word:"紫の上",
      grammar:"名詞",
      baseForm:"紫の上",
      meaning:"後の源氏の最愛の女性",
      posAnswer:"名詞",
      typeAnswer:"なし",
      formAnswer:"なし",
      posChoices:["名詞","動詞","助動詞","副詞"],
      explanation:"若紫巻の中心人物。"
    },

    {
      word:"動き始め",
      grammar:"連用形＋助動詞『たり』",
      baseForm:"動き始む",
      meaning:"動き始めて",
      posAnswer:"動詞",
      typeAnswer:"マ行下二段活用",
      formAnswer:"連用形",
      posChoices:["動詞","名詞","助動詞","副詞"],
      typeChoices:[
        "マ行下二段活用",
        "マ行四段活用",
        "ラ行四段活用",
        "カ行下二段活用"
      ],
      formChoices:[
        "連用形","終止形","連体形","已然形"
      ],
      explanation:"二人の運命が動き始めた。"
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
      explanation:"源氏の理想や願い。"
    }
  ],

  reading:{
    question:"源氏が若紫に強く心をひかれた理由は何か。",
    choices:[
      "身分が高かったから",
      "藤壺によく似ていたから",
      "歌が上手だったから",
      "都で有名だったから"
    ],
    answer:1,
    comment:"若紫は源氏が思い続けていた藤壺によく似ていたため、強く心をひかれた。"
  },

  translation:`
源氏は北山で美しい少女を見つけた。

その少女は藤壺によく似ており、
源氏は強く心をひかれた。

やがて源氏は少女を引き取り、
理想の女性として育てようと考える。

この少女こそ、
後の紫の上である。

ここから二人の長い物語が始まる。
`
};