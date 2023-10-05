export interface IClothing{
    _id: string,
    type: string,
    imageUrl: any,
    brand: string,
    price: { type: Number, required : true, min: [0.1, 'The clothing must be with price above 0'], max: [1000, 'The clothing must be with price under 1000']},
    sizeClothing: string,
    color: string,
    description: string,
    contactInfo: string,
    adress: string,
    owner: string,
}