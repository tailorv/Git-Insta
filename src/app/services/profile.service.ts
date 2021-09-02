import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username: any;
  private clientid='24510fc66efe51f7a8ef'
  private clientsecret='3e4442261af5b1c6b876e728104098260845f367' 
  
  constructor(private http:HttpClient) {
    console.log("Service is now ready!");
    
   }

   getProfileInfo(username:string){
     console.log(username);
     
     return this.http.get("https://api.github.com/users/" + username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
 
   }
   getProfileRepos(username:string){
    return this.http.get("https://api.github.com/users/" + username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
    
   }

  //  updateprofile( username:string){
  
  //  }
}
