import { Component, Input ,OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
@Input() product:any;
  imgSrc:string="";

  ngOnInit():void{
    this.imgSrc = this.product.img
  }
}
