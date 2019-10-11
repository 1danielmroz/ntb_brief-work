import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DebugmessageService {

  debugMessage:string[]=[];


  constructor() { }
}
