import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environments';
@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  constructor(private http: HttpClient) { }

  async submitApplicationRequest(userInfo: { [key: string]: any }) {
    const formData = new FormData();

    // Loop through the keys in userInfo and append them to formData
    for (const key of Object.keys(userInfo)) {
      if (Array.isArray(userInfo[key])) {
        // If the value is an array, loop through it and append each item separately
        userInfo[key].forEach((item: any) => {
          formData.append(`${key}[]`, item);
        });
      } else {
        // Otherwise, append the single value
        formData.append(key, userInfo[key]);
      }
    }

    const headers = new HttpHeaders({
      // Remove 'Content-Type' header, HttpClient will set it automatically for FormData
      "Accept": "application/json"
    });

    return this.http.post(`${environment.apiURL}applications`, formData, { headers });
  }

}
