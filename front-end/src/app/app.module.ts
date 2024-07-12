import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { FormsModule } from '@angular/forms';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { EllipsifyPipe } from './pipes/ellipsify.pipe';
import { HttpClientModule } from '@angular/common/http';
import { InfinitescrollDirective } from './infinitescroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieCardComponent,
    EllipsifyPipe,
    DefaultImagePipe,
    InfinitescrollDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
