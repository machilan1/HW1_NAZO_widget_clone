import { Component ,Input} from '@angular/core';



@Component({
  selector: 'app-navtag',
  templateUrl: './navtag.component.html',
  styleUrls: ['./navtag.component.scss']
})


export class NavtagComponent {

@Input() navTag: any;


}
