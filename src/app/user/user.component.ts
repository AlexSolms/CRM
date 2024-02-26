import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule, MatDialog} from '@angular/material/dialog';
import { AddUserComponent } from '../dialog/add-user/add-user.component';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { Firestore, onSnapshot } from '@angular/fire/firestore';
import { FirebaseService } from '../firebase.service';
import { User } from '../../models/user.interface';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GlobalVariablesService } from '../global-variables.service';
import { UserDetailComponent } from '../user-detail/user-detail.component';

export interface PeriodicElement {
  name: string;
  //position: number;
  email: number;
  city: string;
  test: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Hydrogen', email: 1.0079, city: 'H', test:''},
  {name: 'Helium', email: 4.0026, city: 'He', test:''},
  {name: 'Lithium', email: 6.941, city: 'Li', test:''},
  {name: 'Beryllium', email: 9.0122, city: 'Be', test:''},
  {name: 'Boron', email: 10.811, city: 'B', test:''},
  {name: 'Carbon', email: 12.0107, city: 'C', test:''},
  {name: 'Nitrogen', email: 14.0067, city: 'N', test:''},
  {name: 'Oxygen', email: 15.9994, city: 'O', test:''},
  {name: 'Fluorine', email: 18.9984, city: 'F', test:''},
  {name: 'Neon', email: 20.1797, city: 'Ne', test:''},
];

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatCardModule,
    MatTableModule,
    CommonModule,
    RouterModule,
    UserDetailComponent
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  firestore: Firestore = inject(Firestore);
  firebaseService =inject(FirebaseService);
  globalVariablesService = inject(GlobalVariablesService);

//  displayedColumns: string[] = ['name', 'email', 'city'];
 // dataSource = ELEMENT_DATA;




  constructor(public dialog: MatDialog) {
    

  //  console.log('userArrystart: ', this.firebaseService.userArry);
    
    
  }
 

  ngOnInit(){
    console.log('init: ');
    this.getData();
  }
  getData(): User[]{
    this.firebaseService.unsubList;
    
    console.log('userArry: ', this.firebaseService.userArry);
    return this.firebaseService.userArry;

  }
  seeMore(){

    
  }
  openDialog(){
    this.dialog.open(AddUserComponent);

  }
}
