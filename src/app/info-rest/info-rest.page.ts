import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'


@Component({
  selector: 'app-info-rest',
  templateUrl: './info-rest.page.html',
  styleUrls: ['./info-rest.page.scss'],
})
export class InfoRestPage implements OnInit {

  slideOpts={
    initialSlide:0,
    speed:200
  };
  
  gallery=[
    {
      img:"../../assets/chayito.jpg",
      direccion:"Av. Lagos del Country 47, Lagos del Country, 63175 Tepic, Nay.",
      horario:"Lunes a domingo 7-14 hrs",
      telefono:"311 129 0834"
    },
    {
      img:"../../assets/picanteri.png",
      direccion:"Av del Valle 5, Cd del Valle, 63157 Tepic, Nay.",
      horario:"Lunes a domingo 11-20 hrs",
      telefono:"311 111 1111"
    },
    {
      img:"../../assets/3contodo.jpg",
      direccion:" Eucalipto 138, Los Llanitos, 63157 Tepic, Nay.",
      horario:"Lunes a domingo 8-15 hrs",
      telefono:"311 269 3933"
    }
    
  ]


  constructor(private router:Router) { }

  ngOnInit() {
  }
  cancelar(){
    this.router.navigate(["/tabs"]);
  }

}
