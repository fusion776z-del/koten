const GENJI8 = {
  id: "genji8",
  title: "源氏物語",
  chapter: "第8章 賢木",

  text: `
源氏は
藤壺への思ひを

<span class="word" data-id="0">忘れ</span>ず。

されど
世の目を

<span class="word" data-id="1">恐れ</span>、

二人は

<span class="word" data-id="2">別れ</span>ぬ。

源氏は
藤壺の姿を

<span class="word" data-id="3">慕ひ</span>、

心は

<span class="word" data-id="4">乱れ</span>たり。

やがて
帝も

<span class="word" data-id="5">崩れ</span>ぬ。

世の中は

<span class="word" data-id="6">変はり</span>、

源氏は
次第に

<span class="word" data-id="7">追ひ詰め</span>られたり。

都を

<span class="word" data-id="8">離れ</span>む

決意をし、

その先の

<span class="word" data-id="9">運命</span>

を思ふ。
`,

 words:[
{
  word:"忘れ",
  grammar:"未然形＋助動詞『ず』",
  baseForm:"忘る",
  meaning:"忘れず",
  posAnswer:"動詞",
  typeAnswer:"ラ行下二段活用",
  formAnswer:"未然形",
  posChoices:["動詞","名詞","助動詞","副詞"],
  typeChoices:["ラ行下二段活用","ラ行四段活用","カ行下二段活用","マ行四段活用"],
  formChoices:["未然形","連用形","終止形","連体形"],
  explanation:"藤壺を忘れられない。"
},

{
  word:"恐れ",
  grammar:"連用形",
  baseForm:"恐る",
  meaning:"恐れて",
  posAnswer:"動詞",
  typeAnswer:"ラ行下二段活用",
  formAnswer:"連用形",
  posChoices:["動詞","名詞","助動詞","副詞"],
  typeChoices:["ラ行下二段活用","ラ行四段活用","マ行四段活用","カ行下二段活用"],
  formChoices:["連用形","終止形","連体形","已然形"],
  explanation:"世間の目を恐れた。"
},

{
  word:"別れ",
  grammar:"連用形＋完了の助動詞『ぬ』",
  baseForm:"別る",
  meaning:"別れて",
  posAnswer:"動詞",
  typeAnswer:"ラ行下二段活用",
  formAnswer:"連用形",
  posChoices:["動詞","名詞","助動詞","副詞"],
  typeChoices:["ラ行下二段活用","ラ行四段活用","カ行下二段活用","マ行四段活用"],
  formChoices:["連用形","終止形","連体形","已然形"],
  explanation:"二人は別れた。"
},

{
  word:"慕ひ",
  grammar:"連用形",
  baseForm:"慕ふ",
  meaning:"恋い慕って",
  posAnswer:"動詞",
  typeAnswer:"ハ行四段活用",
  formAnswer:"連用形",
  posChoices:["動詞","名詞","助動詞","副詞"],
  typeChoices:["ハ行四段活用","ハ行上二段活用","ラ行四段活用","マ行四段活用"],
  formChoices:["連用形","終止形","連体形","已然形"],
  explanation:"藤壺への思慕。"
},

{
  word:"乱れ",
  grammar:"連用形＋助動詞『たり』",
  baseForm:"乱る",
  meaning:"乱れて",
  posAnswer:"動詞",
  typeAnswer:"ラ行下二段活用",
  formAnswer:"連用形",
  posChoices:["動詞","名詞","助動詞","副詞"],
  typeChoices:["ラ行下二段活用","ラ行四段活用","カ行下二段活用","マ行四段活用"],
  formChoices:["連用形","終止形","連体形","已然形"],
  explanation:"源氏の心情を表す。"
},

{
  word:"崩れ",
  grammar:"連用形＋完了の助動詞『ぬ』",
  baseForm:"崩る",
  meaning:"崩御して",
  posAnswer:"動詞",
  typeAnswer:"ラ行下二段活用",
  formAnswer:"連用形",
  posChoices:["動詞","名詞","助動詞","副詞"],
  typeChoices:["ラ行下二段活用","ラ行四段活用","カ行下二段活用","マ行四段活用"],
  formChoices:["連用形","終止形","連体形","已然形"],
  explanation:"帝の死を表す。"
},

{
  word:"変はり",
  grammar:"連用形",
  baseForm:"変はる",
  meaning:"変わって",
  posAnswer:"動詞",
  typeAnswer:"ラ行四段活用",
  formAnswer:"連用形",
  posChoices:["動詞","名詞","助動詞","副詞"],
  typeChoices:["ラ行四段活用","ラ行下二段活用","マ行四段活用","カ行四段活用"],
  formChoices:["連用形","終止形","連体形","已然形"],
  explanation:"政局の変化。"
},

{
  word:"追ひ詰め",
  grammar:"連用形＋助動詞『らる』",
  baseForm:"追ひ詰む",
  meaning:"追い詰められて",
  posAnswer:"動詞",
  typeAnswer:"マ行下二段活用",
  formAnswer:"連用形",
  posChoices:["動詞","名詞","助動詞","副詞"],
  typeChoices:["マ行下二段活用","マ行四段活用","ラ行四段活用","カ行下二段活用"],
  formChoices:["連用形","終止形","連体形","已然形"],
  explanation:"受身の助動詞『らる』が続く。"
},

{
  word:"離れ",
  grammar:"未然形＋助動詞『む』",
  baseForm:"離る",
  meaning:"離れよう",
  posAnswer:"動詞",
  typeAnswer:"ラ行下二段活用",
  formAnswer:"未然形",
  posChoices:["動詞","名詞","助動詞","副詞"],
  typeChoices:["ラ行下二段活用","ラ行四段活用","カ行下二段活用","マ行四段活用"],
  formChoices:["未然形","連用形","終止形","連体形"],
  explanation:"須磨へ退く決意。"
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
  typeChoices:["なし","ラ行四段活用","ク活用","シク活用"],
  formChoices:["なし","終止形","連用形","連体形"],
  explanation:"この後の須磨流謫へ続く。"
}
],


  reading: {
    question:
      "源氏が須磨へ退くことになった主な理由として最も適切なものはどれか。",
    choices: [
      "病気になったから",
      "右大臣家との対立と世間の非難を受けたから",
      "外国へ留学するため",
      "出家するため"
    ],
    answer: 1,
    comment:
      "政治的な立場の悪化と朧月夜との関係が問題となり、源氏は須磨へ退くことを決意した。"
  },

  translation: `
  藤壺は世間のうわさを恐れ、
  仏の道に入ろうと考えるようになった。
  源氏は藤壺を忘れられなかったが、
  二人は野宮で別れを迎える。
  さらに右大臣家の勢力が強まり、
  源氏は宮中で孤立していった。
  朧月夜との秘密の恋も問題となり、
  世間から非難を受ける。
  こうして源氏は須磨へ退く決意を固めたのであった。
  `
};