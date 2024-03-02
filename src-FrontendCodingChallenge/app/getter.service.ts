import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from './Model/Player';

@Injectable({
  providedIn: 'root'
})
export class GetterService {
  baseUrl = 'http://localhost:8080/api';
  constructor(private http:HttpClient) { }
  getBowler():Observable<Player>{
    return this.http.get<Player>(this.baseUrl+'/bowler-with-min-matches');
  }
  getBatsman():Observable<Player>{
    return this.http.get<Player>(this.baseUrl+'/batsman-with-max-matches');
  }
}
