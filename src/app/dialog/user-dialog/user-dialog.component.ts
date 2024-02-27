import { Component, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { FirebaseService } from '../../firebase.service';
import { GlobalVariablesService } from '../../global-variables.service';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-user-dialog',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './user-dialog.component.html',
  styleUrl: './user-dialog.component.scss'
})
export class UserDialogComponent {
  firestore: Firestore = inject(Firestore);
  firebaseService = inject(FirebaseService);
  globalVariablesService = inject(GlobalVariablesService);

  constructor( public dialogRef: MatDialogRef<UserDialogComponent>) {}
  closeAdressDialog() {
    this.dialogRef.close();
  }
 

}
