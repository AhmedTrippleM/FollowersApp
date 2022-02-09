import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contactMethod = [
    { id: 1, name: 'Email' },
    { id: 2, name: 'Phone' },
  ]
  categories = [
    { id: 1, name: 'Development' },
    { id: 2, name: 'Design' },
    { id: 3, name: 'Analysis' },

  ]
  log(x) {
    console.log(x);
  }
  onSubmit(f) {
    console.log(f);
  }

}
