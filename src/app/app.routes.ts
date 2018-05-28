import {Routes} from '@angular/router';
import {SearchComponent} from './search/search.component';
import {ListComponent} from './list/list.component';

export const appRoutes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'list', component: ListComponent },
  { path: '', redirectTo: '/search', pathMatch: 'full'},
];
