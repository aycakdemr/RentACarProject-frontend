export interface Rental{
    rentalId?:number,
    carId:number,
    customerId:number,
    rentStartDate:Date,
    rentEndDate:Date,
    returnDate?:Date,
}