import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  constructor(private title: Title) {
    this.title.setTitle(
      'About | DevFest Jalandhar | Biggest Developer Conference in Jalandhar'
    );
  }
}
