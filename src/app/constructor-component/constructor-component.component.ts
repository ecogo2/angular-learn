import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-constructor-component',
  templateUrl: './constructor-component.component.html',
  styleUrls: ['./constructor-component.component.css']
})
export class ConstructorComponentComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

}