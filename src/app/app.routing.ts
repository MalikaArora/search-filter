import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { BlogComponent } from './components/blog/blog.component';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
    { path: 'tab1', component: HomeComponent },
    { path: 'tab2', component: ContactComponent },
    { path: 'tab3', component: BlogComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);