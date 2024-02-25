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
//import { User } from '../../../models/user.class';
import { User } from '../../../models/user.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';

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
  firebaseService = inject(FirebaseService);


  
  birthDate!: Date;
  loading: boolean = false;
  firstName: string = '';
  lastName: string = '';
  email:string='';
  street: string = '';
  zipCode: number | null = null;
  city: string = '';

  constructor(public dialogRef: MatDialogRef<AddUserComponent>) {

  }

  //schließt den Dialog, wenn ich daneben klicke
  onNoClick(): void {
    this.dialogRef.close();
  }

  async save() {
    this.loading = true;

    this.addUser();
    
    this.loading = false;
    this.dialogRef.close();
  }


  addUser() {
    let user: User = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      birthDate: this.birthDate.getTime(),
      street: this.street,
      zipCode: this.zipCode,
      city: this.city,
    }
    this.firebaseService.addToFirestore(user);
  }
}
