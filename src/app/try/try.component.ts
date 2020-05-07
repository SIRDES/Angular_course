import { Component, OnInit, Output, Input,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-try',
  templateUrl: './try.component.html',
  styleUrls: ['./try.component.css']
})
export class TryComponent implements OnInit {
  public displayDir = false;
  public color="green";
  public days=["Mon","Tues","Wed","Thur","Fri"];
  @Input('parentData') parentData: string; 
  @Output('childevent') childEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  /**
   * displayEvt method
   */
  public displayEvt() {
    this.childEvent.emit("Child to parent interaction");
  }
}
