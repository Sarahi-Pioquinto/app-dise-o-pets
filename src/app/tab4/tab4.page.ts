import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  banners:string[]=["assets/imagenes/15.jfif","assets/imagenes/16.jpg"];
  constructor() { }
  slideOpts={
    initialSlide: 1,
    speed: 300,
    slidesPerView: 1.5,
    spaceBetween:35,
    
   
    loop:true,
    autoplay:{
      delay:4000
    }
  }
  ngOnInit() {
  }

}
