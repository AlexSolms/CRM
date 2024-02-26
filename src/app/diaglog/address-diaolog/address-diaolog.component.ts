import { Component, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { MatCardModule } from '@angular/material/card';
import { FirebaseService } from '../../firebase.service';
import { MatIconModule } from '@angular/material/icon';
import { GlobalVariablesService } from '../../global-variables.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-address-diaolog',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './address-diaolog.component.html',
  styleUrl: './address-diaolog.component.scss'
})
export class AddressDiaologComponent {

  firestore: Firestore = inject(Firestore);
  firebaseService = inject(FirebaseService);
  globalVariablesService = inject(GlobalVariablesService);

  closeAddressDiolog(){
    this.globalVariablesService.addressdialog = false;
  }
}
