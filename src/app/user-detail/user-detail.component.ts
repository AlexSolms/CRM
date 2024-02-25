import { Component, inject } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { User } from '../../models/user.interface';
import { Firestore } from '@angular/fire/firestore';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {
  firestore: Firestore = inject(Firestore);
  firebaseService =inject(FirebaseService);
}
