import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdasService {

  private url: string;

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {
    this.url = 'http://localhost:8080/adas';
  }

  public sendAdas(id : string): Observable<string> {
    const url = `${this.url}/${id}`;
    return this.http.get<any>(url).pipe(
      tap(_ => console.log(`sendAdas id=${id}`)),
      catchError(this.handleError<any>(`sendAdas id=${id}`))
    );
  }

  /** Log a AdasService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`AdasService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
