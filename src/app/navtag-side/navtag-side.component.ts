import { Component ,Input  } from '@angular/core';


@Component({
  selector: 'app-navtag-side',
  templateUrl: './navtag-side.component.html',
  styleUrls: ['./navtag-side.component.scss']
})

export class NavtagSideComponent {
  @Input() tag:any;


  
  toggle:boolean=false;
  count:number=0;
  height:string =`${0}px`;





  ngOnInit():void{
    this.count=this.tag.subtags.length;
    this.height=`${this.count*41}px`
    this.toggle=false;
  }



}
