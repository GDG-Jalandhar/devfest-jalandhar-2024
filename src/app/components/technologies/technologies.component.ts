import { Component } from '@angular/core';
import { TECHS } from 'src/app/consts';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent {
  techs = TECHS;
}
