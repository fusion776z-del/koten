const GENJI6 = {
  id: "genji6",
  title: "源氏物語",
  chapter: "第6章 花宴",

  text: `
花の宴が

<span class="word" data-id="0">開かれ</span>、

源氏は
美しき女君を

<span class="word" data-id="1">見</span>たり。

二人は
やがて

<span class="word" data-id="2">語らひ</span>、

心を

<span class="word" data-id="3">寄せ</span>たり。

源氏は
その人に

<span class="word" data-id="4">ひかれ</span>、

深く

<span class="word" data-id="5">思ひ</span>たり。

やがて
二人は

<span class="word" data-id="6">契り</span>、

再び

<span class="word" data-id="7">会は</span>む

ことを願ひたり。

されど
その恋は

<span class="word" data-id="8">知られ</span>ず

危うさを秘めたり。

これが後の

<span class="word" data-id="9">運命</span>

を変へてゆく。
`,

  words:[
    {
      word:"開かれ",
      grammar:"連用形",
      baseForm:"開かる",
      meaning:"開かれて",
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
        "連用形","終止形","連体形","已然形"
      ],
      explanation:"花の宴が催された。"
    },

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
        "連用形","終止形","連体形","已然形"
      ],
      explanation:"朧月夜を見かけた。"
    },

    {
      word:"語らひ",
      grammar:"連用形",
      baseForm:"語らふ",
      meaning:"語り合って",
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
      explanation:"二人は親しく語り合った。"
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
        "連用形","終止形","連体形","已然形"
      ],
      explanation:"互いに心を寄せた。"
    },

    {
      word:"ひかれ",
      grammar:"連用形",
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
      explanation:"深い恋心を抱いた。"
    },

    {
      word:"契り",
      grammar:"連用形",
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
        "連用形","終止形","連体形","已然形"
      ],
      explanation:"二人は結ばれた。"
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
      explanation:"再会への願いを表す。"
    },

    {
      word:"知られ",
      grammar:"未然形＋助動詞『ず』",
      baseForm:"知らる",
      meaning:"知られず",
      posAnswer:"動詞",
      typeAnswer:"ラ行下二段活用",
      formAnswer:"未然形",
      posChoices:["動詞","名詞","助動詞","副詞"],
      typeChoices:[
        "ラ行下二段活用",
        "ラ行四段活用",
        "カ行下二段活用",
        "マ行四段活用"
      ],
      formChoices:[
        "未然形","連用形","終止形","連体形"
      ],
      explanation:"秘密の恋であった。"
    },

    {
      word:"運命",
      grammar:"名詞",
      baseForm:"運命",
      meaning:"人生の巡り合わせ",
      posAnswer:"名詞",
      typeAnswer:"なし",
      formAnswer:"なし",
      posChoices:["名詞","動詞","助動詞","副詞"],
      explanation:"後の出来事につながる。"
    }
  ],

  reading:{
    question:"花宴巻で源氏が出会った女性は誰か。",
    choices:[
      "紫の上",
      "空蝉",
      "朧月夜",
      "夕顔"
    ],
    answer:2,
    comment:"花宴巻では源氏は朧月夜と出会い、後の運命を左右する恋へと進んでいく。"
  },

  translation:`
花の宴で源氏は美しい女性と出会った。

二人は語り合い、
互いに心を寄せるようになる。

やがて二人は結ばれるが、
その恋は秘密のものであった。

この出会いは、
後に源氏の人生を大きく変える
出来事となるのである。
`
};