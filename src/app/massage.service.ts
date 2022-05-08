import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MassageService {
  massages: string[] = [];

  add(massage: string){
    this.massages.push(massage)
  }

  clear(){
    this.massages = [];
  }
}
