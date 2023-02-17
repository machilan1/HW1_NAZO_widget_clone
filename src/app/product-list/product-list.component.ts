import { Component } from '@angular/core';
interface prods{
  title:string,
  img:string,
  imgHover:string,
  price:number,
  discount:number
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  products:prods[]=[
    {
      title:'NAZO x GEMMA吳映潔 | 初心潔淨沐浴露 - 玻尿酸極潤保濕精華',
      img:'/assets/img/products/1-1.jpg',
      imgHover:'/assets/img/products/1-2.jpg',
      price:699,
      discount:599
    },
    {
      title:'NAZO x GEMMA吳映潔 | 初心',
      img:'/assets/img/products/2-2.jpg',
      imgHover:'/assets/img/products/2-1.jpg',
      price:2200,
      discount:0
    }
    ,
    {
      title:'NAZOxGEMMA吳映潔 | 動心',
      img:'/assets/img/products/3-1.jpg',
      imgHover:'/assets/img/products/3-2.jpg',
      price:2200,
      discount:0
    }
    ,
    {
      title:'「初心」暖心融蠟禮盒｜限量50組',
      img:'/assets/img/products/4-1.jpg',
      imgHover:'/assets/img/products/4-2.jpg',
      price:4200,
      discount:3990
    }
    ,
    {
      title:'「動心」暖心融蠟禮盒｜限量50組',
      img:'/assets/img/products/5-1.jpg',
      imgHover:'/assets/img/products/5-2.jpg',
      price:4200,
      discount:3990
    }
    ,
    {
      title:'NAZOxTyla 聯名| 愛情辛香酒香調',
      img:'/assets/img/products/6-1.jpg',
      imgHover:'/assets/img/products/6-2.jpg',
      price:3180,
      discount:2999
    }
    ,
    {
      title:'NAZO x Tyla 淡香水｜愛情',
      img:'/assets/img/products/7-1.jpg',
      imgHover:'/assets/img/products/7-2.jpg',
      price:980,
      discount:0
    }
    ,
    {
      title:'NAZO x Tyla 淡香水｜皇后',
      img:'/assets/img/products/8-1.jpg',
      imgHover:'/assets/img/products/8-2.jpg',
      price:980,
      discount:0
    }
    ,
    {
      title:'【巴比倫花園】木質玫瑰茶調',
      img:'/assets/img/products/9-1.jpg',
      imgHover:'/assets/img/products/9-2.jpg',
      price:1800,
      discount:0
    }
    ,
    {
      title:'【蒙娜麗莎】花果清香調',
      img:'/assets/img/products/10-1.jpg',
      imgHover:'/assets/img/products/10-2.jpg',
      price:1800,
      discount:0
    }
    ,
    {
      title:'【烏魯魯】雪松森林調',
      img:'/assets/img/products/11-1.jpg',
      imgHover:'/assets/img/products/11-2.jpg',
      price:1800,
      discount:0
    }
    ,
    {
      title:'【巨石陣】木質重菸草調',
      img:'/assets/img/products/12-1.jpg',
      imgHover:'/assets/img/products/12-2.jpg',
      price:1800,
      discount:0
    }
  ]

}
