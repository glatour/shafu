import { Routes, RouterModule } from '@angular/router';

import { Home } from './home/home.component';
import { ContentView } from './content/content-view.component';
import { ContentCreateComponent } from './content/content-create.component';
import { ContentEditComponent } from './content/content-edit.component';

export const routes:Routes = [
  { path: '', component: Home },
  { path: 'content/new', component: ContentCreateComponent},
  { path: 'content/:id', component: ContentView},
  { path: 'content/:id/edit', component: ContentEditComponent}
];

export const routing = RouterModule.forRoot(routes);
