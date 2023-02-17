import { Component } from '@angular/core';

interface Tags{
  title:string,
  subtags:string[],
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {



  navTags:Tags[] =[
    {
    title:"NAZO",
    subtags:["手工燭杯","FAQ","社群媒體"]
  },
  {
    title:"購物須知",
    subtags:["退換貨處理","海外訂購"]
  },
  {
  title:"NAZO 獨家聯名",
  subtags:["聖元 X 未解之謎 聯名系列","泰辣 X 愛情皇后 聯名系列","GEMMA X 初心動心 聯名系列"]
},
  {
  title:"淡香水/淡香精",
  subtags:["未解之謎","時間系列"]
},
  {
  title:"居家香氛",
  subtags:["香氛袋","香氛融燭燈","香薰精油","水晶擴香石","滅燭組","身體護理"]
},
  {
  title:"香氛按摩美肌蠟燭",
  subtags:["mini圓球系列","FAQ","香氛按摩美肌蠟燭"]
},
  {
  title:"送禮專區",
  subtags:[]
},
  {
  title:"NAZO 生活美學",
  subtags:[]
},
  {
  title:"聯絡我們",
  subtags:[]
},
]
}
