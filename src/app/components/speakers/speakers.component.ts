import { Component } from '@angular/core';
import { SPEAKERS } from 'src/app/consts';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})
export class SpeakersComponent {
  speakers = SPEAKERS;
}
