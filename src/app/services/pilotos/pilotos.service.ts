import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PilotosService {


  private API_SERVER = "http://localhost:8080/pilotos"

  constructor(
    private httpClient: HttpClient
  ) { }


  public getPiloto(): Observable<any>{
    return this.httpClient.get(this.API_SERVER)
  }
}
