import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  banners:string[]=["assets/imagenes/fondo1.jpg","assets/imagenes/5.jpg"];

  slideOpts={
    initialSlide: 1,
    speed: 400,
    slidesPerView: 1.5,
    spaceBetween:15,
    
   
    loop:true,
    autoplay:{
      delay:4000
    }
  }
  constructor() {}

}
