import { AfterViewInit, Component } from '@angular/core';
import { NavService } from 'src/app/nav/nav.service';

@Component({
  selector: 'app-general-ledger',
  templateUrl: './general-ledger.component.html',
  styleUrl: './general-ledger.component.css'
})
export class GeneralLedgerComponent implements AfterViewInit {

  constructor(private navService: NavService) { 
    this.navService.updateContextForPage1('General Ledger');
  }

  ngAfterViewInit() {
    
  }

}
