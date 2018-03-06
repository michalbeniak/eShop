export class Product {
    Name: string;
    Description: string;
    Price: number;
    ImagePath: string;
    Guid: string;
    Quantity:number;

    constructor(name: string, description : string, price: number, imagePath: string, guid: string, quantity:number) {
        this.Name = name;
        this.Description = description;
        this.Price = price;
        this.ImagePath = imagePath;
        this.Guid  = guid;
        this.Quantity = quantity;
    }

    setQuantity(quantity) {
        this.Quantity = quantity;
    }

}