import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FAQS } from 'src/app/consts';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.scss',
  standalone: false,
})
export class FaqsComponent {
  faqs = FAQS;
  constructor(private title: Title) {
    'FAQs | DevFest Jalandhar | Biggest Developer Conference in Punjab | Biggest Developer Meetup in Punjab';
  }
}
