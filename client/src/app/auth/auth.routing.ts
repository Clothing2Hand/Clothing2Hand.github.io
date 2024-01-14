import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from "./logout/logout.component";
import { MyProfileComponent } from "./profile/my-profile/my-profile.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'myProfile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) }
];

export const AuthRoutingModule = RouterModule.forChild(routes);

