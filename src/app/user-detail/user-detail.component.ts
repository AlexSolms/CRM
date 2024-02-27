import { Component, inject } from '@angular/core';
import { FirebaseService } from '../firebase.service';
//import { User } from '../../models/user.interface';
import { Firestore } from '@angular/fire/firestore';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { GlobalVariablesService } from '../global-variables.service';
import { CommonModule } from '@angular/common';
import { AddressDialogComponent } from '../dialog/address-dialog/address-dialog.component';
import { MatDialog} from '@angular/material/dialog';
import { UserDialogComponent } from '../dialog/user-dialog/user-dialog.component';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    CommonModule,
  ],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {
  firestore: Firestore = inject(Firestore);
  firebaseService = inject(FirebaseService);
 globalVariablesService = inject(GlobalVariablesService);

 constructor(public dialog: MatDialog) {}

  openAddressDiolog(){
    this.globalVariablesService.addressdialog = true;
  }

  
    closeDialog(){
    this.globalVariablesService.showUser = false;
  }  

  openAdressDialog(){
    this.dialog.open(AddressDialogComponent);

  }

  openNameDialog(){
    this.dialog.open(UserDialogComponent);

  }
}
