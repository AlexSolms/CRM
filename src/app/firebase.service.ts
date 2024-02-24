import { Injectable, inject } from '@angular/core';
import { User } from '../models/user.class';
import { Firestore, collection, collectionData, addDoc, updateDoc } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService{
  firestore: Firestore = inject(Firestore);

  user: User = new User();

  /**
   * this function adds the user to firebase
   * @param user - the user which should be add
   */
  async addToFirestore(user:any){
    console.log("User: ", user);
    let getRef = collection(this.firestore, 'user');
    await addDoc(getRef, user.toJson()).catch(
      (err) => { console.error(err) }
    ).then(
      (result: any) => {
        console.log("Document written with ID: ", result);
      });
  }
  

  error
  constructor() { }
}
