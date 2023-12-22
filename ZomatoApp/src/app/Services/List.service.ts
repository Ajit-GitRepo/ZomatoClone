import { Injectable } from "@angular/core";
import { cityDetails } from "../Model/city.model";

@Injectable()
export class ListService{

    citylist!:cityDetails[];
    cityList():cityDetails[]{

        this.citylist=[
            new cityDetails(1,'Pandharpur'),
            new cityDetails(1,'Pandharpur'),
            new cityDetails(1,'Pandharpur'),
            new cityDetails(1,'Pandharpur'),
            new cityDetails(1,'Pandharpur'),
            new cityDetails(1,'Pandharpur'),
            new cityDetails(1,'Pandharpur')];

        return this.citylist;
    }
}