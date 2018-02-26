export class Buyer{
    _id:number;
    firstName: string;
    middleName: string;
    lastName:string;
    emailId: string;
    phoneNumber: number;
    userName:string;
    password:string;
    billingAddress:string;
    shippingAddress:string;
    isActive: Boolean;
    approvedBySeller:number;
    createdDate: Date;
    securityQuestion : string;
    securityAnswer:string;
    city: string;
    state:string;
    showDetail : boolean;

    constructor() {
        
    }

    
}
    