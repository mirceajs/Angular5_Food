import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { global } from '../../shared/config'
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {



  public loadingAccount;
  public authenticated;
  public authenticationError;
  public userDetails = null;
  public authErrorMessage;

  public headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});

  constructor( private http: HttpClient, private router: Router ) { 

  }

  loginConfirmed(){
    this.loadingAccount = false;
    this.authenticated = true;
  }

  getAccountDetails() {
      this.http.get(global.siteUrl + 'security/account').subscribe( response =>{
        this.loginConfirmed();
        sessionStorage.setItem("session", response.toString());
        this.router.navigate(["recommended"]);
        return response;
      })
  }

  getUserDetails() {
      this.http.get(global.siteUrl + 'engine/getUserDetails').subscribe( response =>{
          return this.userDetails = response["userDetails"];
      })
  }
  
  getUserName(){
      return this.userDetails ? this.userDetails["name"] : null;
  }
  getAccount() {
      this.loadingAccount = true;
      this.getAccountDetails();
      this.getUserDetails();
  };

  login(username, password) {
      this.authErrorMessage = null;
      const body = new HttpParams()
      .set(`username`, username)
      .set(`password`, password);

      this.http.post(global.siteUrl + 'authenticate', body.toString(), {headers : this.headers}).subscribe(data => {
        this.authErrorMessage = null;
        this.getAccountDetails();
        this.getUserDetails();
        
      }, error => {
        this.authenticationError = true;
        this.authErrorMessage = "Invalid credentials";
        sessionStorage.clear();
      })

  };

  

  changePassword(body){
    return this.http.post(global.siteUrl + 'changePassword', body)
  }
  isAuthorized(authorizedRoles) {
    //   if(authorizedRoles == '*'){
    //       return true;
    //   }
    //   var isAuthorized = false;
    //   var session = sessionStorage.getItem('session')
    //   if(session && session["user"]){
    //       for(var i = 0 ; i < authorizedRoles.length ; i++){
    //           if(authorizedRoles[i] == session["user"].role) {
    //               isAuthorized = true;
    //               break;
    //           }
    //       }
    //   }
    //   alert(isAuthorized)
    //   return isAuthorized;
    if(authorizedRoles == '*'){
        return true;
    }
    var isAuthorized = false;
    var session = sessionStorage.getItem('session')
  
    if(session){
        return true;
    }
    return false;
  }

  logout() {

      this.authenticationError = false;
      this.authenticated = false;
      sessionStorage.clear();
      this.http.get(global.siteUrl + 'logout').subscribe( res => {
          this.router.navigate(['auth/login'])
      })
  } 
}
