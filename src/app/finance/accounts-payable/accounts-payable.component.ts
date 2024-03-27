import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { NavService } from 'src/app/nav/nav.service';

@Component({
  selector: 'app-accounts-payable',
  templateUrl: './accounts-payable.component.html',
  styleUrl: './accounts-payable.component.css'
})
export class AccountsPayableComponent implements AfterViewInit {
  
  testCheckbox = {
    one: false,
    two: true,
    three: false,
  };
  // testColor = '#EFEFEF';
  // testDateObject = new Date();
  // testDateString = '12/31/2020';
  // testDropdown = 'opt5';
  // testMultiselect = 'opt3';
  testInput = 'John Doe';
  testLookup = 'Software Engineers';
  testTextarea = 'Hello, World!';
  testTimePicker = '11:00 PM';
  testRadio = 'radio2';
  testSearchField = 'key words to search';
  testSpinbox = 9;
  testSwitch = true;
  testUpload = 'path/to/file.txt';
  testUploadAdvanced = 'testUploadAdvanced value here';

  constructor(private navService: NavService) { 
    this.navService.updateContextForPage1('Accounts Payable');
  }
  ngAfterViewInit() {
    
  }

  onUpdate(event): void {
    console.log(`onUpdate(${event})`);
  }
}
