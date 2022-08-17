import { AjoutTravauxComponent } from './ajout-travaux/ajout-travaux.component';
import { ListTravauxComponent } from './list-travaux/list-travaux.component';
import { DetailUtilisateurComponent } from './detail-utilisateur/detail-utilisateur.component';
import { UpdateUtilisateurComponent } from './update-utilisateur/update-utilisateur.component';
import { ListUtilisateursComponent } from './list-utilisateurs/list-utilisateurs.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { TemplateComponent } from './template/template/template.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardTechnicienComponent } from './board-technicien/board-technicien.component';
import { HomeeComponent } from './homee/homee.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
   
  { path: 'login', component: LoginComponent },
  { path: '',redirectTo:"login",pathMatch:"full" },

   
//Template
{
  path:'dashboard',
  component: TemplateComponent,
  children:[

    { path: 'ajoutTravaux', component: AjoutTravauxComponent },
    { path: 'listTravaux', component: ListTravauxComponent },
    { path: 'detailUser/:id', component: DetailUtilisateurComponent },
    { path: 'updateUser', component: UpdateUtilisateurComponent },
    { path: 'listUsers', component: ListUtilisateursComponent },
  
    { path: 'home', component: HomeeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'tech', component: BoardTechnicienComponent },
    { path: 'admin', component: BoardAdminComponent },
  ]
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export  class AppRoutingModule {}