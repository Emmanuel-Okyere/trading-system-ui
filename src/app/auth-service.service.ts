import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  loginUrl,
  registerUrl,
  getMarketDataUrl,
  getUserPortfolioUrl,
  placeOrderUrl,
  getUsersOrders, getOrderById
} from 'src/constants/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) {
  }

  login(data: any): Observable<any> {
    console.log("In Login");
    return this.http.post(`${loginUrl}`, data);
  }

  register(data: any): Observable<any> {
    console.log("In Register");
    return this.http.post(`${registerUrl}`, data);
  }

  getMarketDataService() {
    console.log("In Get Orders");
    return this.http.get(`${getMarketDataUrl}`);
  }

  tradeStock(data: any): Observable<any> {
    console.log("In Trade Stock");
    console.log(data);
    const sessionData = sessionStorage.getItem('accessToken');
    console.log(sessionData);

    let headers = ({
      'Authorization': 'Bearer ' + sessionData,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
    });
    return this.http.post(`${placeOrderUrl}`, data, {headers: headers});
  }

  getUserPortfolio() {
    console.log("In Get User Portfolio");

    const sessionData = sessionStorage.getItem('accessToken');
    console.log(sessionData);

    let headers = ({
      'Authorization': 'Bearer ' + sessionData,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
    });

    console.log(";;;;;;;");
    console.log(headers);

    return this.http.get(`${getUserPortfolioUrl}`, {headers: headers});

  }

  getUserDetails() {
    console.log("In Getting user's info");

    const sessionData = sessionStorage.getItem('accessToken');
    console.log(sessionData);

    let headers = ({
      'Authorization': 'Bearer ' + sessionData,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
    });

    console.log(";;;;;;;");
    console.log(headers);

    return this.http.get(`${getUserPortfolioUrl}`, {headers: headers});

  }

  getPortfolioOrders(id: any) {
    console.log("Getting from server");
    const sessionData = sessionStorage.getItem('accessToken');
    console.log(sessionData);

    let headers = ({
      'Authorization': 'Bearer ' + sessionData,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
    });
    return this.http.get(`${getUsersOrders+id+"/orders"}`, {headers: headers});
  }

  getOrderByID(orderId:string) {
    console.log("In Get Order by ID");

    const sessionData = sessionStorage.getItem('accessToken');
    console.log(sessionData);

    let headers = ({
      'Authorization': 'Bearer ' + sessionData,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
    });

    console.log(";;;;;;;");
    console.log(headers);

    return this.http.get(`${getOrderById+orderId}`, {headers: headers});

  }
}
