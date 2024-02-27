import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent  implements OnInit {
  id: number=0;
  private sub: any;
  
    constructor(private route: ActivatedRoute) {}
  
    ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
        this.id = +params['id']; // (+) converts string 'id' to a number
        
      });
    }
    onClick() {
      console.log('clicked');
    }
  
  }