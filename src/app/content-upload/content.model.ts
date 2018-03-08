import {ContentDetail} from './contentDetail.model';
export class Content {
    contentId: number;
    contentImage: string;
    fileName: string;
    contentDescription: string;
    contentFileName:string;
    createdDate: Date;
    encryptedKey:string;
    publishId: number;
    contentDetail: Array<ContentDetail>;
    errorMessage:any;
}
