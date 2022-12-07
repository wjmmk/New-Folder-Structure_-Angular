import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class PublicService {
    constructor(private httpClient: HttpClient) { }

    getCharacters(): Observable<any> {
      return this.httpClient.get('https://thronesapi.com/api/v2/characters').pipe(
        //tap(console.log),
        catchError(this.handleError)
      )
    }

    getContinents(): Observable<any> {
        return this.httpClient.get('https://thronesapi.com/api/v2/continents').pipe(
        //tap(console.log),
        catchError(this.handleError)
      )
    }

    private handleError(error: Response) {
        console.log(error)
        const msg = 'Error status code' + error.status + 'status' + error.statusText  
        return throwError(msg)
    }
    
}

