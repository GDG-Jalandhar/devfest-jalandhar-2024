import { Component, Input } from '@angular/core';
import { MdbModalService } from 'mdb-angular-ui-kit/modal';
import { IPerson } from 'src/app/models';
import { PersonDetailsComponent } from '../person-details/person-details.component';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent {
  @Input() person: IPerson;
  constructor(private modalService: MdbModalService) {}

  openModal() {
    // this.modalService.open(PersonDetailsComponent, {
    //   data: { person: this.person },
    //   modalClass: 'modal-dialog-centered modal-lg',
    // });
    return false;
  }
}
