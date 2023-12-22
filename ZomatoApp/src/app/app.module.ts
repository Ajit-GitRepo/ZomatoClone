import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CityListComponent } from './city-list/city-list.component';
import { ListCardComponent } from './city-list/list-card/list-card.component';
import { ListService } from './Services/List.service';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CityListComponent,
    ListCardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    ListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
