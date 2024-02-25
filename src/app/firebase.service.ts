import { Injectable, inject } from '@angular/core';
import { User } from '../models/user.interface';
import { Firestore, collection, collectionData, addDoc, updateDoc, doc, setDoc, onSnapshot } from '@angular/fire/firestore';
//import { doc } from 'firebase/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  firestore: Firestore = inject(Firestore);

userArry:User[]=[];

  unsubList;
  unsubSingleItem;



  constructor() { 
    this.unsubList= this.getAllUsers();
   
    this.unsubSingleItem = this.getSingleUser('3mV0khaEgxhEWcP8hx8i');


  }

ngonDestroy(){
  this.unsubList();
  this.unsubSingleItem();
}

getAllUsers(){
  return onSnapshot(this.getUserRef() ,(list) =>{
    this.userArry = [];
    list.forEach(element => {
     // console.log(this.setUserObject(element.data(),element.id));
      this.userArry.push(this.setUserObject(element.data(),element.id));
     // console.log(this.userArry);
    })
    console.log('am ende des pushs',this.userArry);
  });
}

getSingleUser(id:string){
  return onSnapshot(this.getSingleUserRef(id),(user) =>{
    console.log('user: ', user.data());
    user.data()
  });
}

 setUserObject(obj: any, id: string): User {
  return {
    id:id,
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
    console.log("User: ", user);
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
  
}
