import { AfterContentInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit,AfterContentInit{
  @ContentChild('para') paraProp: ElementRef;
  ngOnInit() {
    console.log(this.paraProp);
  }
  ngAfterContentInit() {
    this.paraProp.nativeElement.textContent = "This is a new paragraph..";
    console.log(this.paraProp.nativeElement.textContent);
  }
}
