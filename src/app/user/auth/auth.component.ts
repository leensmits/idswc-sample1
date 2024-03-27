import { AfterViewInit, Component } from '@angular/core';
import { NavService } from 'src/app/nav/nav.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements AfterViewInit {

  constructor(private navService: NavService) { 
    this.navService.updateContextForPage1('Authentication');
  }
  ngAfterViewInit() {
    
  }
}
