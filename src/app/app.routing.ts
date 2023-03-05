import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { BlogComponent } from './components/blog/blog.component';
import { HomeComponent } from './components/home/home.component';
import { ModemDetailsComponent } from './components/modem-details/modem-details.component';
import { ModemPartComponent } from './components/modem-part/modem-part.component';
import { InternetPartsComponent } from './components/internet-parts/internet-parts.component';

const appRoutes: Routes = [
    { path: 'tab1', component: HomeComponent },
    { path: 'tab3', component: ContactComponent },
    { path: 'tab2', component: BlogComponent },
    { path: 'tab4', component: ModemDetailsComponent,
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
          path: '',
          redirectTo: 'submodule1',
          pathMatch: 'full'
        }
      ] },

    // otherwise redirect to home
    { path: '**', redirectTo: 'tab1' }
];

export const routing = RouterModule.forRoot(appRoutes);