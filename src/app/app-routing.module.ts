import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from "./pages/about/about.component";
import { TechnologiesFocusedComponent } from "./pages/technologies-focused/technologies-focused.component";
import { PartnersComponent } from "./pages/partners/partners.component";
import { SpeakersComponent } from "./pages/speakers/speakers.component";
import { TeamComponent } from "./pages/team/team.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'home',
        redirectTo: '',
        pathMatch: 'full',
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'technologies',
        component: TechnologiesFocusedComponent
    },
    {
        path: 'partners',
        component: PartnersComponent,
    },
    {
        path: 'speakers',
        component: SpeakersComponent,
    },
    {
        path: 'team',
        component: TeamComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})
export class AppRoutingModule { }