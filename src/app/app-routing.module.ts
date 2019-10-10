import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimestampComponent } from './timestamp/timestamp.component';
import { JsonformatComponent } from './jsonformat/jsonformat.component';
import { ParamverifyComponent } from './paramverify/paramverify.component';

const routes: Routes = [
  { path: 'timestamp', component: TimestampComponent },
  { path: 'jsonformat', component: JsonformatComponent },
  { path: 'paramverify', component: ParamverifyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
