import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Must } from '../models/must';

@Injectable()
export class MustsService {

  constructor(private http: Http){ }

  get() {
    return this.http
      .get('http://localhost:3000/api/musts')
      .map((res: Response) => {
        let musts = res.json();
        return musts.map(json => {
          return Must.fromJson(json);
        })
      })
      .catch(this.handleError);
  }

  getById(id:number) {
    return this.http
      .get('http://localhost:3000/api/musts/' + id)
      .map((res: Response) => {
        return Must.fromJson(res.json());
      })
      .catch(this.handleError);
  }

  save(must:Must) {
    if(!must.id){
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');

      return this.http
        .post('http://localhost:3000/api/musts', JSON.stringify(must), {headers:headers})
        .map((res: Response) => Must.fromJson(res.json()))
        .catch(error => {console.error(error); return error;});
    }
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
