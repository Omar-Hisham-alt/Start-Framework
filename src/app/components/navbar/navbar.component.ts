import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  navEffect = 'py-4';

  @HostListener('window:scroll')
  onScroll(): void {
    if (scrollY >= 30.399999618530273) {
      this.navEffect = 'py-2';
    } else {
      this.navEffect = 'py-4';
    }
  }
}
