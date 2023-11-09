import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-technologies-focused',
  templateUrl: './technologies-focused.component.html',
  styleUrls: ['./technologies-focused.component.scss'],
})
export class TechnologiesFocusedComponent {
  constructor(private title: Title) {
    this.title.setTitle(
      'Technologies Focused | DevFest Jalandhar | Biggest Developer Conference in Jalandhar'
    );
  }
}
