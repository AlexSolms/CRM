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
  templateUrl: './address-dialog.component.html',
  styleUrl: './address-dialog.component.scss'
})
export class AddressDialogComponent {

  firestore: Firestore = inject(Firestore);
  firebaseService = inject(FirebaseService);
  globalVariablesService = inject(GlobalVariablesService);

  closeAddressDialog(){
    this.globalVariablesService.addressdialog = false;
  }
}
