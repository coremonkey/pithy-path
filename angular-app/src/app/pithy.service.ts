import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';

import { Pithy } from "./pithy";


@Injectable({
  providedIn: 'root'
})
export class PithyService {

  postId: any;

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    ) { }

    private log(message: string) {
      this.messageService.add(`pithyService: ${message}`);    
    }
    private pithyUrl = 'http://localhost:3000/pithy'
    private id: any;
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  
    getPithys(): Observable<Pithy[]>{
      console.log("GET called returning dummy data")
      return this.http.get<Pithy[]>(this.pithyUrl)
        .pipe(
          tap(_ => this.log('fetched pithys')),
          catchError(this.handleError<Pithy[]>('getPithys ', []))

        )
    }

      
    addPithy(pithy: Pithy) {
      pithy.shortUrl = this.randomString(8, '0123456789abcdefghijklmnopqrstuvwxyz');
      var findStatus = this.http.get<any>(this.pithyUrl+'/:'+pithy.shortUrl)
      
      this.log(`${pithy.longUrl} ${pithy.shortUrl} ${findStatus} POST to add Pithy`);
      return this.http.post<any>(this.pithyUrl,pithy).subscribe(data => {
        this.id = data;});
      
    }
    private randomString(length: number, chars: string) {
      var result = '';
      for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
      return result;
    }
 
    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
    
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
    
        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
    
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }  
      
}
