import { Injectable, inject } from '@angular/core';
import { User } from '../models/user.interface';
import { UserClass } from '../models/user.class';
import { Firestore, collection, collectionData, addDoc, updateDoc, doc, setDoc, onSnapshot } from '@angular/fire/firestore';
import { GlobalVariablesService } from './global-variables.service';
//import { doc } from 'firebase/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  firestore: Firestore = inject(Firestore);
  globalVariablesService = inject(GlobalVariablesService);

  userArry: User[] = [];
  //brauche ich die globalVariable.activeID zum zwischenspeichern?
  //vielleicht wenn ich eine Samlung an IDs aufrufen will?
  //oder versuche ich doch die ID aus der URL auszulesen?
  activeID:string = this.globalVariablesService.activeID;
  activeUser:UserClass = new UserClass;
  

  unsubList;
  unsubSingleItem;



  constructor() {
    this.unsubList = this.getAllUsers();

    this.unsubSingleItem = this.getSingleUser(this.activeID); /* 3QejfTrdp7tYj8IdIYSw */

    console.log('aktive Id Constructor: ', this.activeID);
  }

  ngOnDestroy() {
    this.unsubList();
   
    this.unsubSingleItem();
  }

  getAllUsers() {
    return onSnapshot(this.getUserRef(), (list) => {
      this.userArry = [];
      list.forEach(element => {
       
        this.userArry.push(this.setUserObject(element.data(), element.id));
       
      })
      //console.log('am ende des pushs', this.userArry);
    });
  }

  getSingleUser(id: string) {
    
    return onSnapshot(this.getSingleUserRef(id), (user) => {
      //console.log('user: ', user.data());
     // user.data();
     
      if(user.data()){
        let newUser = new UserClass(user.data());
      this.activeUser = newUser;
    }
     // console.log('activeUser: ', this.activeUser);
      //console.log('activeUser Name: ', this.activeUser.firstName);
    });
  }

  setUserObject(obj: any, id: string): User {
    return {
      id: id,
      firstName: obj.firstName || '',
      lastName: obj.lastName || '',
      email: obj.email || '',
      birthDate: obj.birthDate || '',
      street: obj.street || '',
      zipCode: obj.zipCode || '',
      city: obj.city || '',
    }
  }

  /**
   * this function adds the user to firebase
   * @param user - the user which should be add
   */
  async addToFirestore(user: any) {
    //console.log("User: ", user);
    await addDoc(this.getUserRef(), user).catch(
      (err) => { console.error(err) }
    ).then(
      (result: any) => {
        console.log("Document written with ID: ", result.id);
      });
  }


  /**
   * 
   * @returns reference to collection 'user'
   */
  getUserRef() {
    return collection(this.firestore, 'user');
  }

  /**
   * 
   * @param docId - document which should read
   * @returns - returns a single document of collection 'user'
   */
  getSingleUserRef(docId: string) {
    return doc(this.getUserRef(), docId);
  }

  setActiveUserId(userId:string | undefined){
    if(userId)
    this.activeID = userId;
  //brauche ich das hier?
    this.globalVariablesService.activeID = this.activeID;
    this.globalVariablesService.showUser = true;
  console.log('aktive Id: ', this.activeID);
  this.getSingleUser(this.activeID)
  }
}
