import { RouterModule, Routes } from "@angular/router";
import { MyProfileComponent } from "./my-profile/my-profile.component";
import { EditProfileComponent } from "./edit-profile/edit-profile.component";

const routes: Routes = [
  { path: '', component: MyProfileComponent },
  { path: 'edit', component: EditProfileComponent },
];

export const ProfileRoutingModule = RouterModule.forChild(routes);