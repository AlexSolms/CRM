import { Component, inject } from '@angular/core';
import { FirebaseService } from '../firebase.service';
//import { User } from '../../models/user.interface';
import { Firestore } from '@angular/fire/firestore';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { GlobalVariablesService } from '../global-variables.service';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {
  firestore: Firestore = inject(Firestore);
  firebaseService = inject(FirebaseService);
 globalVariablesService = inject(GlobalVariablesService);

  openAddressDiolog(){
    this.globalVariablesService.addressdialog = true;
  }
  closeDialog(){
    this.globalVariablesService.showUser = false;
  }
}
