import { Component } from '@angular/core';
import { VOLUNTEERS } from 'src/app/consts';

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.scss'],
    standalone: false
})
export class TeamComponent {
  volunteers = VOLUNTEERS
}
