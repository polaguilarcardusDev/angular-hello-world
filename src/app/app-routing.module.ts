import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { LoremComponent } from './lorem/lorem.component';

const routes: Routes = [
  { path: '', component: HelloWorldComponent },
  { path: 'lorem', component: LoremComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
