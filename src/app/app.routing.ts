import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { BlogComponent } from './components/blog/blog.component';
import { HomeComponent } from './components/home/home.component';
import { ModemDetailsComponent } from './components/modem-details/modem-details.component';
import { ModemPartComponent } from './components/modem-part/modem-part.component';
import { InternetPartsComponent } from './components/internet-parts/internet-parts.component';
import { SubscriptionPartsComponent } from './components/subscription-parts/subscription-parts.component';
import { UniversaldiaPartsComponent } from './components/universaldia-parts/universaldia-parts.component';
import { InstallationManualComponent } from './components/installation-manual/installation-manual.component';
import { TrainingMaterialComponent } from './components/training-material/training-material.component';
const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'faq', component: BlogComponent },
    { path: 'installationmanual', component: InstallationManualComponent },
    { path: 'trainingmaterial', component: TrainingMaterialComponent },
    { path: 'modemdetails', component: ModemDetailsComponent,
    children: [
        {
          path: 'submodule1',
          component: ModemPartComponent,
        },
        {
            path: 'submodule2',
            component: InternetPartsComponent,
          },
          {
            path: 'submodule3',
            component: SubscriptionPartsComponent,
          },
          {
            path: 'submodule4',
            component: UniversaldiaPartsComponent,
          },

          {
          path: '',
          redirectTo: '',
          pathMatch: 'full'
        }
      ] },

    // otherwise redirect to home
    { path: '**', redirectTo: 'home' }
];

export const routing = RouterModule.forRoot(appRoutes);