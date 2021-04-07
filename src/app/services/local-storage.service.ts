import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  getItem(key : string){
    return localStorage.getItem(key)
  }

  setItem(key: string, value: string){
    localStorage.setItem(key, value)
  }

  clean(){
    localStorage.clear()
  }

  removeItem(key: string){
    localStorage.removeItem(key)
  }
}
