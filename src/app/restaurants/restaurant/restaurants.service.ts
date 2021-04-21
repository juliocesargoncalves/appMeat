import { Injectable } from "@angular/core"
import { Restaurant } from "./restaurant.model";
import { MEAT_API } from "../../app.api";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch"
import { errorHandler } from "@angular/platform-browser/src/browser";
import { ErrorHandler } from "app/app.error-handler";


@Injectable()
export class RestaurantsService{

constructor(private http: Http){}


  restaurants() : Observable<Restaurant[]>{
    return this.http.get(MEAT_API + "/restaurants")
                    .map(response => response
                    .json()).catch(ErrorHandler.handleError);
  }
}
