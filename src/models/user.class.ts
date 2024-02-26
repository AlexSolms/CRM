export class UserClass {
    id?:string;
    firstName: string;
    lastName: string;
    birthDate: number;
    email: string;
    street: string;
    zipCode: number | null;
    city: string;

    constructor(obj?: any) {
        this.id = obj? obj.id : '';
        this.firstName = obj? obj.firstName : '';
        this.lastName = obj? obj.lastName : '';
        this.birthDate = obj? obj.birthDate : '';
        this.email = obj? obj.email : '';
        this.street = obj? obj.street : '';
        this.zipCode = obj? obj.zipCode : null;
        this.city = obj? obj.city : '';
    }

}