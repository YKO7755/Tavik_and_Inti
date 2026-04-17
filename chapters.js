const CHAPTERS = [
{
  id:"ch0",
  group:"第一章",
  nav:"📘 00：印提",
  title:"00：印提",
  available:true,

  filePath:"chapters/part1/ch0.txt",

  cg:[
    { src:"images/SideCG/第0章-印提.png", alt:"印提 CG" }
  ],

  prev:null,
  next:"ch1"
},
{
  id:"ch1",
  group:null,
  nav:"📘 01：倒臥廢土",
  title:"01：倒臥廢土",
  available:true,

  filePath:"chapters/part1/ch1.txt",

  cg:[],

  prev:null,
  next:"ch2"
},
{
  id:"ch2",
  group:null,
  nav:"📘 02：異鄉人",
  title:"02：異鄉人",
  available:true,

  filePath:"chapters/part1/ch2.txt",

  cg:[],
  prev:"ch1",
  next:"ch3"
},
{
  id:"ch3",
  group:null,
  nav:"📘 03：澤洛瓦",
  title:"03：澤洛瓦",
  available:true,

  filePath:"chapters/part1/ch3.txt",

  cg:[
    { src:"images/cg/塔哥親媽資料001.png", alt:"澤洛瓦" }
  ],
  prev:"ch2",
  next: null
},
{
  id:"ch4",
  group:null,
  nav:"📘 04：沙塵之夜",
  title:"04：沙塵之夜",
  available:false,

  filePath:"chapters/part1/ch4.txt",

  cg:[],
  prev:"ch3",
  next: null
},
];
