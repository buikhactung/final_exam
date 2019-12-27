import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SinglepageComponent} from './singlepage/singlepage.component';
import {SinglepageReadComponent} from './singlepage-read/singlepage-read.component';



const routes: Routes = [{
  path: 'books',
  component: SinglepageComponent
}, {
  path: 'books/create',
    component: SinglepageComponent
}, {
  path: 'books-read',
  component: SinglepageReadComponent
},{
  path: '',
  redirectTo: '/books',
  pathMatch: 'full'
}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
