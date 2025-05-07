import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AnimalDetailComponent } from './pages/animal-detail/animal-detail.component';
import { AdminComponent } from './pages/admin/admin.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Pagina principală
  { path: 'animal/:id', component: AnimalDetailComponent }, // Detalii animal
  { path: 'admin', component: AdminComponent }, // Admin
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}