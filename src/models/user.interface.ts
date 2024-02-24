export interface User {
    id?:string;
    firstName: string;
    lastName: string;
    birthDate: number;
    street: string;
    zipCode: number | null;
    city: string;
}