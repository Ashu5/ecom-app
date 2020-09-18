import { Component, OnInit,ViewChild,ElementRef,Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './crousel.component.html',
  styleUrls: ['./crousel.component.css']
})
export class CrouselComponent implements OnInit {
@Input() crouselData;
@ViewChild('crouselBox') crouselRef:ElementRef
  constructor() { }

  ngOnInit(): void {

    console.log("CrouselData:",this.crouselData);
  }

  ngAfterViewInit() {
    const list = this.crouselRef.nativeElement.querySelectorAll('.carousel-indicators > li');
    for (let i = 0; i < list.length; i++) {
      list[0].classList.add('active');
    }
    const items = this.crouselRef.nativeElement.querySelectorAll('.carousel-item');
    for (let i = 0; i < items.length; i++) {
      items[0].classList.add('active');
    }
  }

  showArrow() {
    const leftArrow = this.crouselRef.nativeElement.querySelector('.carousel-control-prev').style;
    const rightArrow = this.crouselRef.nativeElement.querySelector('.carousel-control-next').style;
    leftArrow.left = '0';
      leftArrow.opacity = '1';
      rightArrow.right = '0';
      rightArrow.opacity = '1';
  }

  hideArrow() {
    const leftArrow = this.crouselRef.nativeElement.querySelector('.carousel-control-prev').style;
    const rightArrow = this.crouselRef.nativeElement.querySelector('.carousel-control-next').style;
    leftArrow.left = '-70px';
      leftArrow.opacity = '0';
      rightArrow.right = '-70px';
      rightArrow.opacity = '0';
  }


}
