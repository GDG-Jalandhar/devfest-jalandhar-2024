import { Component } from '@angular/core';
import { SPEAKERS } from 'src/app/consts';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: false
})
export class HomeComponent {
    speakers = SPEAKERS;
}
