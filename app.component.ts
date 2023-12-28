import { Component, EnvironmentInjector } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenicationService } from './authenication.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet,AngularFireModule,AngularFireAuthModule],
  // providers: [AuthenicationService]
  
})
export class AppComponent {
  constructor() {
  // constructor(public environmentInjector: EnvironmentInjector) {
   
    AngularFireModule.initializeApp(environment.firebaseConfig);

  }
}
