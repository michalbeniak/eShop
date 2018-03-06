export class ContactDetails {
    FirstName: string;
    LastName: string;
    Email: string;
    NumberTel: string;
    Street: string;
    NumberHouse: string;
    City: string;
    ZipCode: string;
    Country: string;

    constructor(
        firstName: string, lastName: string, email: string, 
        numberTel: string, street: string, numberHouse: string, 
        city: string, zipCode: string, country: string){

        this.FirstName = firstName;
        this.LastName = lastName;
        this.Email = email;
        this.NumberTel = numberTel;
        this.Street = street;
        this.NumberHouse = numberHouse;
        this.City = city;
        this.ZipCode = zipCode;
        this.Country = country;

    }
}
