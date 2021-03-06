import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { HomePageComponent }  from './home-page/home-page.component';
import { RoomPageComponent }  from './room-page/room-page.component';
import { RoomFormComponent } from './room-form/room-form.component';
import { MessagesComponent }    from './messages/messages.component';
import { VideoPlayerComponent } from './video-player/video-player.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    HomePageComponent,
    RoomPageComponent,
    RoomFormComponent,
    MessagesComponent,
    VideoPlayerComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
