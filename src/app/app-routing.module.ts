import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './core/error/error.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent, data: { animation : 'isLeft'} },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule), data: { animation : 'isRight'} },
  { path: 'clothes', loadChildren: () => import('./clothes/clothes.module').then(m => m.ClothesModule), data: { animation : 'isRight'} },
  { path: 'missingCredentials', component: ErrorComponent },
  { path: 'NotFound', component: NotFoundComponent },
  { path: '**', redirectTo: 'NotFound' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
