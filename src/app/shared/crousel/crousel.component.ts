import { Component, OnInit,ViewChild,ElementRef,Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './crousel.component.html',
  styleUrls: ['./crousel.component.css']
})
export class CrouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  crouselData=[

    {
      title:' 1',
      Description:'Mumbai is hub of startups',
      img: 'https://picsum.photos/900/500?random&t=8'
      
    },
    {
      title:' 1',
      Description:'Mumbai is hub of startups',
      img: 'https://picsum.photos/900/500?random&t=8'
    }
  ];


  

}
