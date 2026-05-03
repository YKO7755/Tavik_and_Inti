const CHAPTERS = [
{
  id:"ch0",
  group:"第一章",
  nav:"📘 00：印提",
  title:"00：印提",
  available:true,
  secret:true,
  r18:true, 
  denyRedirect:"index",
  filePath:"chapters/part1/ch0.txt",
  cg:[
    { src:"images/SideCG/第0章-印提.png", alt:"印提 CG" }
  ]
},
{
  id:"ch1",
  group:"第一章",
  nav:"📘 01：倒臥廢土",
  title:"01：倒臥廢土",
  available:true,
  filePath:"chapters/part1/ch1.txt",
  cg:[]
},
{
  id:"ch2",
  group:"第一章",
  nav:"📘 02：異鄉人",
  title:"02：異鄉人",
  available:true,
  filePath:"chapters/part1/ch2.txt",
  cg:[]
},
{
  id:"ch3",
  group:"第一章",
  nav:"📘 03：澤洛瓦",
  title:"03：澤洛瓦",
  available:true,
  filePath:"chapters/part1/ch3.txt",
  cg:[
    { src:"images/cg/塔哥親媽資料001.png", alt:"澤洛瓦" }
  ]
},
{
  id:"ch4",
  group:"第一章",
  nav:"📘 04：姓名",
  title:"04：姓名",
  available:true,
  filePath:"chapters/part1/ch4.txt",
  cg:[]
},
{
  id:"ch5",
  group:"第一章",
  nav:"📘 05：沙塵與棋局",
  title:"05：沙塵與棋局",
  available:true,
  filePath:"chapters/part1/ch5.txt",
  cg:[
    { src:"images/cg/棋局.png", alt:"棋局" }
]
},
{
  id:"ch6",
  group:"第一章",
  nav:"📘 06：整備",
  title:"06：整備",
  available:true,
  filePath:"chapters/part1/ch6.txt",
  cg:[]
},
{
  id:"ch7",
  group:"第一章",
  nav:"📘 07：初次配合",
  title:"07：初次配合",
  available:true,
  filePath:"chapters/part1/ch7.txt",
  cg:[]
},
{
  id:"ch8",
  group:"第一章",
  nav:"📘 08：遺跡探索",
  title:"08：遺跡探索",
  available:true,
  filePath:"chapters/part1/ch8.txt",
  cg:[
    { src:"images/cg/遺跡探險.png", alt:"遺跡" }
]
},
{
  id:"ch9",
  group:"第一章",
  nav:"📘 09：回營",
  title:"09：回營",
  available:false,
  filePath:"chapters/part1/ch9.txt",
  cg:[]
}

];

// 自動補齊 prev / next
(function addChapterLinks() {
  const mainChapters = CHAPTERS.filter(ch => !ch.secret);

  mainChapters.forEach((ch, index) => {
    ch.prev = index > 0 ? mainChapters[index - 1].id : null;
    ch.next = index < mainChapters.length - 1 ? mainChapters[index + 1].id : null;
  });

  // secret 章不進主線，但如果你想保留手動接回主線，可以在這裡特別指定
  const secretCh0 = CHAPTERS.find(ch => ch.id === "ch0");
  if (secretCh0) {
    secretCh0.prev = null;
    secretCh0.next = "ch1";
  }
})();
