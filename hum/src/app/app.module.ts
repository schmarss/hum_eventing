import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KasseComponent } from './kasse/kasse.component';
import { HeaderComponent } from './kasse/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WarenkorbComponent } from './kasse/warenkorb/warenkorb.component';
import { DrinklistComponent } from './kasse/drinklist/drinklist.component';

const appRoutes: Routes = [
  { path: 'kasse', component: KasseComponent },
  { path: '', component: HomeComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    KasseComponent,
    HeaderComponent,
    WarenkorbComponent,
    DrinklistComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
