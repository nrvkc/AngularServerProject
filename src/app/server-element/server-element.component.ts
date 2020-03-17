import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
 @Input() element: {type: string, name: string, content: string};

  // another way by aliasing 
  
 // @Input('srvElement') element: {type: string, name: string, content: string};
  constructor() { }

  ngOnInit(): void {
  }

}
