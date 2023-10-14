import { Component, Input, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { IPerson } from 'src/app/models';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss'],
})
export class PersonDetailsComponent {
  person: IPerson;
  constructor(public modalRef: MdbModalRef<PersonDetailsComponent>) {}
}
