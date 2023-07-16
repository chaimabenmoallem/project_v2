import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 //private tokenKey = 'token';
 private authenticated = false;

  constructor() { }
  login(username: string, password: string): void {
    // Perform login logic, e.g., making API calls to authenticate the user
    // Once the user is authenticated, set the isAuthenticated flag to true
    this.authenticated = true;
  }

  logout(): void {
    // Perform logout logic, e.g., clearing authentication tokens or session data
    // Set the isAuthenticated flag to false
    this.authenticated = false;
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }

  // Method to check if the user is logged in
  //isLoggedIn(): boolean {
    // Check if the token exists in localStorage
   // return !!localStorage.getItem(this.tokenKey);
 // }

  // Method to perform logout and remove token from localStorage
  //logout(): void {
    // Remove the token from localStorage
  //  localStorage.removeItem(this.tokenKey);
  //}
}
