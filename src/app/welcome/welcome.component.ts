import { AfterViewInit, Component } from '@angular/core';
import { NavService } from '../nav/nav.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements AfterViewInit {

  constructor(private navService: NavService) { 
    this.navService.updateContextForPage1('Welcome');
  }
  ngAfterViewInit() {
    
  }
}