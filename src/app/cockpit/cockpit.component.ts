import { Component, OnInit, Output,EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  @Output() blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  constructor() { }

  // newServerName = '';
  // newServerContent = '';

   @ViewChild('serverContentInput',{static :true}) serverContentInput: ElementRef;

  ngOnInit(): void {
  }

  onAddServer(nameInput:HTMLInputElement) {
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
    // console.log(nameInput.value);
    // this.serverCreated.emit({
    //   serverName: nameInput.value,
    //   serverContent: this.newServerContent
    // });

    //below using viewchild()
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput:HTMLInputElement) {
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // // });
    // this.blueprintCreated.emit({
    //   serverName: this.newServerName,
    //   serverContent: this.newServerContent
    // });
    //below using viewchild()
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });

  }
}

