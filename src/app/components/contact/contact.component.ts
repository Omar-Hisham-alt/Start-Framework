import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  nameFlag: boolean = true;
  ageFlag: boolean = true;
  emailFlag: boolean = true;
  passwordFlag: boolean = true;

  nameInput!: string;
  ageInput!: number;
  emailInput!: string;
  passwordInput!: string;

  nameTyping(): void {
    if (this.nameInput) {
      this.nameFlag = false;
    } else {
      this.nameFlag = true;
    }
  }

  ageTyping(): void {
    if (this.ageInput) {
      this.ageFlag = false;
    } else {
      this.ageFlag = true;
    }
  }

  emailTyping(): void {
    if (this.emailInput) {
      this.emailFlag = false;
    } else {
      this.emailFlag = true;
    }
  }

  passwordTyping(): void {
    if (this.passwordInput) {
      this.passwordFlag = false;
    } else {
      this.passwordFlag = true;
    }
  }

}
