import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username: any;
  private clientid='61f0ffd571f049fc594c'
  private clientsecret='b5b46c919880b1d5922d9af8556703de35ac7d69' 
  
  constructor(private http:HttpClient) {
    console.log("Service is now ready!");
    this.username = 'Grievi';
   }

   getProfileInfo(){
     return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
 
   }
   getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
    
   }

   updateprofile( username:string){
     this.username =username;
   }
}
