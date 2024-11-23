import { Component } from '@angular/core';
import { SPEAKERS } from 'src/app/consts';

@Component({
    selector: 'app-speakers',
    templateUrl: './speakers.component.html',
    styleUrls: ['./speakers.component.scss'],
    standalone: false
})
export class SpeakersComponent {
  speakers = SPEAKERS;
}
