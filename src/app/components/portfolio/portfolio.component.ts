import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  flag: boolean = true;

  onClick(): void {
    this.flag = !this.flag;
  }

  images = [
    {
      imgURL:'/images/imgi_1_poert1.png',
      imgALT:'Home'
    },

    {
      imgURL:'/images/imgi_2_port2.png',
      imgALT:'Pizza Slice'
    },

    {
      imgURL:'/images/imgi_3_port3.png',
      imgALT:'Circus'
    }
  ]
}

