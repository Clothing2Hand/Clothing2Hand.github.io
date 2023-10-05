import { RouterModule, Routes } from "@angular/router";
import { CatalogComponent } from "./catalog/catalog.component";
import { CreateComponent } from "./create/create.component";
import { DetailsComponent } from "./details/details.component";
import { EditComponent } from "./edit/edit.component";
import { authGuard } from "../auth/auth.guard";
import { isOwnerGuard } from "../auth/is-owner.guard";

const routes: Routes = [
    { path: 'catalog', component: CatalogComponent },
    { path: 'create', canActivate: [authGuard], component: CreateComponent },
    { path: ':id',  component: DetailsComponent },
    { path: ':id/edit',canActivate: [isOwnerGuard], component: EditComponent }, //isOwnerGuard
];

export const ClothesRoutingModule = RouterModule.forChild(routes);