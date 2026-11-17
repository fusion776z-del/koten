const GENJI13 = {
  id: "genji13",
  title: "源氏物語",
  chapter: "第13章 玉鬘",

 text: `
夕顔の娘は

<span class="word" data-id="0">育ち</span>、

美しい姫君と

<span class="word" data-id="1">なり</span>ぬ。

その姫君を

<span class="word" data-id="2">尋ね</span>て、

人々は長く

<span class="word" data-id="3">歩き</span>たり。

やがて
玉鬘は

<span class="word" data-id="4">見いだされ</span>、

源氏のもとへ

<span class="word" data-id="5">迎へ</span>られたり。

源氏は
夕顔を

<span class="word" data-id="6">思ひ</span>、

玉鬘を

<span class="word" data-id="7">守ら</span>む

と考へたり。

その姿は

<span class="word" data-id="8">美しく</span>、

多くの

<span class="word" data-id="9">注目</span>

を集めたり。
`,

 words:[
{
  word:"育ち",
  grammar:"連用形",
  baseForm:"育つ",
  meaning:"成長して",
  posAnswer:"動詞",
  typeAnswer:"タ行四段活用",
  formAnswer:"連用形",
  posChoices:["動詞","名詞","助動詞","副詞"],
  typeChoices:[
    "タ行四段活用",
    "タ行下二段活用",
    "ラ行四段活用",
    "マ行四段活用"
  ],
  formChoices:["連用形","終止形","連体形","已然形"],
  explanation:"玉鬘は立派に成長した。"
},

{
  word:"なり",
  grammar:"連用形＋完了の助動詞『ぬ』",
  baseForm:"なる",
  meaning:"なって",
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
  formChoices:["連用形","終止形","連体形","已然形"],
  explanation:"美しい姫君になった。"
},

{
  word:"尋ね",
  grammar:"連用形＋接続助詞『て』",
  baseForm:"尋ぬ",
  meaning:"探して",
  posAnswer:"動詞",
  typeAnswer:"ナ行下二段活用",
  formAnswer:"連用形",
  posChoices:["動詞","名詞","助動詞","副詞"],
  typeChoices:[
    "ナ行下二段活用",
    "ナ行四段活用",
    "ラ行下二段活用",
    "マ行四段活用"
  ],
  formChoices:["連用形","終止形","連体形","已然形"],
  explanation:"玉鬘を探し求めた。"
},

{
  word:"歩き",
  grammar:"連用形＋助動詞『たり』",
  baseForm:"歩く",
  meaning:"歩いて",
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
  formChoices:["連用形","終止形","連体形","已然形"],
  explanation:"長い旅を続けた。"
},

{
  word:"見いだされ",
  grammar:"連用形",
  baseForm:"見いだす",
  meaning:"見つけられて",
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
  formChoices:["連用形","終止形","連体形","已然形"],
  explanation:"玉鬘が発見された。"
},

{
  word:"迎へ",
  grammar:"連用形＋助動詞『らる』",
  baseForm:"迎ふ",
  meaning:"迎えられて",
  posAnswer:"動詞",
  typeAnswer:"ハ行下二段活用",
  formAnswer:"連用形",
  posChoices:["動詞","名詞","助動詞","副詞"],
  typeChoices:[
    "ハ行下二段活用",
    "ハ行四段活用",
    "ラ行下二段活用",
    "マ行四段活用"
  ],
  formChoices:["連用形","終止形","連体形","已然形"],
  explanation:"源氏に迎え入れられた。"
},

{
  word:"思ひ",
  grammar:"連用形",
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
  formChoices:["連用形","終止形","連体形","已然形"],
  explanation:"夕顔を思い出した。"
},

{
  word:"守ら",
  grammar:"未然形＋助動詞『む』",
  baseForm:"守る",
  meaning:"守ろう",
  posAnswer:"動詞",
  typeAnswer:"ラ行四段活用",
  formAnswer:"未然形",
  posChoices:["動詞","名詞","助動詞","副詞"],
  typeChoices:[
    "ラ行四段活用",
    "ラ行下二段活用",
    "マ行四段活用",
    "カ行四段活用"
  ],
  formChoices:["未然形","連用形","終止形","連体形"],
  explanation:"玉鬘を守ろうと考えた。"
},

{
  word:"美しく",
  grammar:"連用形",
  baseForm:"美し",
  meaning:"美しく",
  posAnswer:"形容詞",
  typeAnswer:"シク活用",
  formAnswer:"連用形",
  posChoices:["形容詞","動詞","助動詞","副詞"],
  typeChoices:[
    "シク活用",
    "ク活用",
    "ナリ活用",
    "タリ活用"
  ],
  formChoices:["連用形","終止形","連体形","已然形"],
  explanation:"玉鬘の美しさを表す。"
},

{
  word:"注目",
  grammar:"名詞",
  baseForm:"注目",
  meaning:"人々の関心",
  posAnswer:"名詞",
  typeAnswer:"なし",
  formAnswer:"なし",
  posChoices:["名詞","動詞","助動詞","副詞"],
  typeChoices:["なし","ラ行四段活用","ク活用","シク活用"],
  formChoices:["なし","終止形","連用形","連体形"],
  explanation:"多くの人が玉鬘に関心を持った。"
}
],

 reading:{
  question:"源氏が玉鬘を保護しようと考えた理由は何か。",
  choices:[
    "夕顔の娘だったから",
    "帝の命令だったから",
    "明石の君の頼みだったから",
    "紫の上に頼まれたから"
  ],
  answer:0,
  comment:"玉鬘は夕顔の娘であり、源氏は亡き夕顔との縁を思って保護した。"
},


 translation: `
夕顔の娘である玉鬘は、
美しい姫君へと成長していた。

長い年月の後、
玉鬘はついに見いだされ、
源氏のもとへ迎えられる。

源氏は亡き夕顔を思い出し、
玉鬘を守ろうと決意した。

その美しさは多くの人々の
注目を集めることとなった。
`
};