import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
   profile:any=[];
    repos:any=[];
    username ='';

  constructor(private profileservice: ProfileService) {
   
   }
   findProfile(){
     this.profileservice.getProfileInfo(this.username);
    //  console.log(this.username)
     this.profileservice.getProfileInfo(this.username).subscribe((profile: any) =>{
      console.log(profile)
      this.profile = profile;
 
    });

    this.profileservice.getProfileRepos(this.username).subscribe((repos:any) =>{
      console.log(repos);
      this.repos = repos
    })
   }

  ngOnInit()  {
    this.username = 'tailorv';
  }

}
