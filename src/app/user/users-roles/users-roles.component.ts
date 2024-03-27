import { AfterViewInit, Component } from '@angular/core';
import { NavService } from 'src/app/nav/nav.service';

@Component({
  selector: 'app-users-roles',
  templateUrl: './users-roles.component.html',
  styleUrl: './users-roles.component.css'
})
export class UsersRolesComponent implements AfterViewInit {

  constructor(private navService: NavService) { 
    this.navService.updateContextForPage1('Users and Roles');
  }
  ngAfterViewInit() {
    
  }
}
