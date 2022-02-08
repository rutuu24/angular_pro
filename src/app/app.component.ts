import { Component } from '@angular/core';
import { skip } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  quarterid = 0;
  selectedquarter = "";
  selectedmonth  = "";
  showmessage = false;
  quarters = [
    { id: 0, name: " Select Quarter " },
    { id: 1, name: "Quarter 1" },
    { id: 2, name: "Quarter 2" },
    { id: 3, name: "Quarter 3" },
    { id: 4, name: "Quarter 4" },

  ];
  months = [
    { id: 0, quarterid: 0, name: "Select Month" },
    { id: 1, quarterid: 1, name: "Apr" },
    { id: 2, quarterid: 1, name: "May" },
    { id: 3, quarterid: 1, name: "June" },

    { id: 4, quarterid: 2, name: "Jul" },
    { id: 5, quarterid: 2, name: "Aug" },
    { id: 6, quarterid: 2, name: "Sep" },

    { id: 7, quarterid: 3, name: "Oct" },
    { id: 8, quarterid: 3, name: "Nov" },
    { id: 9, quarterid: 3, name: "Dec" },

    { id: 10, quarterid: 4, name: "Jan" },
    { id: 11, quarterid: 4, name: "Feb" },
    { id: 12, quarterid: 4, name: "Mar" },

  ];

  quartermonths = [
    { id: 0, quarterid: 0, name: "Select Month" }
  ];

  quarterChanged(event: Event) {
    let ctrl = (<HTMLSelectElement>event.target);
    this.quarterid = Number(ctrl.value);
    this.selectedquarter = ctrl.options[ctrl.selectedIndex].text;

    this.quartermonths.splice(0, this.quartermonths.length);
    for (let i = 0; i < this.months.length; i++) {
      if (this.months[i].quarterid == this.quarterid || this.months[i].quarterid == 0) 
      {
        this.quartermonths.push(this.months[i]);
      }
    }
    this.showmessage = false;
  }
    monthChanged(event:Event){

      let ctrl = (<HTMLSelectElement>event.target);
      this.selectedmonth = ctrl.options[ctrl.selectedIndex].text;
      if(ctrl.value != "0")
      this.showmessage = true;
      else
      this.showmessage = false;

  }
}

