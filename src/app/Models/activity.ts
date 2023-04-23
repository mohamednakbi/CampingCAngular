
import { ActivityFile } from "./ActivityFile";
import { ActivityLiked } from "./post-like";

export class ActivityModel {


    id?: number;
    name?: string;
    description?: string;
    capacity?: number;
    disponibility?: Boolean;
    startTime?: any;
    endTime?: Date; 
    favourite?: string;
    qrcode?: string;
    files?: ActivityFile[];
    activityLikes?: ActivityLiked[]
    image? : Image;
}


export class Image {
    location!:string
    name!:string
}

export class Evaluation {
    noteValue!:string
}