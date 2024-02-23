import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule, MatDialog} from '@angular/material/dialog';
import { AddUserComponent } from '../diaglog/add-user/add-user.component';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  //position: number;
  email: number;
  city: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Hydrogen', email: 1.0079, city: 'H'},
  {name: 'Helium', email: 4.0026, city: 'He'},
  {name: 'Lithium', email: 6.941, city: 'Li'},
  {name: 'Beryllium', email: 9.0122, city: 'Be'},
  {name: 'Boron', email: 10.811, city: 'B'},
  {name: 'Carbon', email: 12.0107, city: 'C'},
  {name: 'Nitrogen', email: 14.0067, city: 'N'},
  {name: 'Oxygen', email: 15.9994, city: 'O'},
  {name: 'Fluorine', email: 18.9984, city: 'F'},
  {name: 'Neon', email: 20.1797, city: 'Ne'},
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
    MatTableModule
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  constructor(public dialog: MatDialog) {}
  displayedColumns: string[] = ['name', 'email', 'city'];
  dataSource = ELEMENT_DATA;
  seeMore(){
    
  }
  openDialog(){
    this.dialog.open(AddUserComponent);

  }
}
