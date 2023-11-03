import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { InfoComponent } from './info/info.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { PartnersComponent } from './partners/partners.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { TeamComponent } from './team/team.component';
import { AgendaComponent } from './agenda/agenda.component';
import {
  MdbCollapseDirective,
  MdbCollapseModule,
} from 'mdb-angular-ui-kit/collapse';
import { GdgJalandharComponent } from './gdg-jalandhar/gdg-jalandhar.component';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';

@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    InfoComponent,
    TechnologiesComponent,
    PartnersComponent,
    SpeakersComponent,
    TeamComponent,
    AgendaComponent,
    GdgJalandharComponent,
    FooterComponent,
  ],
  exports: [
    NavbarComponent,
    HeaderComponent,
    InfoComponent,
    TechnologiesComponent,
    PartnersComponent,
    SpeakersComponent,
    TeamComponent,
    AgendaComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MdbCollapseModule,
    MdbTabsModule,
  ],
})
export class ComponentsModule {}
