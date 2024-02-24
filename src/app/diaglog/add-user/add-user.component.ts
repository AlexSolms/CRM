import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { User } from '../../../models/user.class';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { Firestore, collection, collectionData, addDoc, updateDoc } from '@angular/fire/firestore';
import { FirebaseService } from '../../firebase.service';



@Component({
  selector: 'app-add-user',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    CommonModule,
    FormsModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatDatepickerModule,
    MatProgressBarModule
  ],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {

  firestore: Firestore = inject(Firestore);
  firebaseService =inject(FirebaseService) 

  user: User = new User();
  birthDate!: Date;
  loading: boolean = false;

  constructor(public dialogRef: MatDialogRef<AddUserComponent>) {
    console.log('huhu', this.getNotesRef());
  }

  //schließt den Dialog, wenn ich daneben klicke
  onNoClick(): void {
    this.dialogRef.close();
  }

  async save() {
    this.loading=true;
    this.user.birthDate = this.birthDate.getTime();
    //console.log(this.user);
    await this.firebaseService.addToFirestore(this.user);
    /* let getRef = collection(this.firestore, 'user');
    await addDoc(getRef, this.user.toJson()).catch(
      (err) => { console.error(err) }
    ).then(
      (result: any) => {
        console.log("Document written with ID: ", result)
      }); */

    /* this.firestore.collection('user').add(this.user).then((result:any){

    }); */
    this.loading=false;
    this.dialogRef.close();
  }

  //das hier ist nicht mehr nötig
  async getNotesRef() {
    return collection(this.firestore, 'user');

  }
}
