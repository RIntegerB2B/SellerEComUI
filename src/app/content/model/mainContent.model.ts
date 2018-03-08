import {SubContent} from './subContent.model';
export class Content {
    _id:number;
    createdDate: Date;
    contentDescription: string;
    encryptedKey:string;
    mainContentImage: string;
    mainContentDescription:string;
    mainContentName:string;
    mainContentFileName:string
    subContentDetail: Array<SubContent>;
    errorMessage:any;
}
