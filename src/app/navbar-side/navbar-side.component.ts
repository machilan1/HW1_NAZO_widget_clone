import { Component } from '@angular/core';
interface Tags{
  title:string,
  subtags:string[],
}

@Component({
  selector: 'app-navbar-side',
  templateUrl: './navbar-side.component.html',
  styleUrls: ['./navbar-side.component.scss']
})
export class NavbarSideComponent {


  navTags:Tags[] =[
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
}
]
}
