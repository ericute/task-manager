import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { LoginComponent } from './components/login/login.component';
import { TaskboardComponent } from './components/taskboard/taskboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TaskboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    NgxAuthFirebaseUIModule.forRoot(
      environment.firebase,
      () => 'taskManager',
      environment.firebaseUIConfig
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
