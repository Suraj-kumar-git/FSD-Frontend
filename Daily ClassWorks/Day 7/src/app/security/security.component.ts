import { Component, OnInit } from '@angular/core';
import { JwtClientService } from '../jwt-client.service';
import { AuthRequest } from '../model/AuthRequest';
// import { AuthRequest } from '../model/authRequest';

@Component({
   selector: 'app-security',
   templateUrl: './security.component.html',
   styleUrls: ['./security.component.css']
})
export class SecurityComponent {
   response: any;
   token: any;

   authRequest: AuthRequest = new AuthRequest();
   constructor(private jwtService: JwtClientService) { }

   readFormData(formData: any) {
      this.authRequest.username = formData.form.value.username;
      this.authRequest.password = formData.form.value.password;
      this.getAccessToken(this.authRequest);
   }
   public getAccessToken(authRequest: any) {
      let response = this.jwtService.getGeneratedToken(authRequest);
      response.subscribe((genToken) => {
         this.token = genToken;
         console.log(genToken);
         this.accessApi(this.token)
      });
   }

   public accessApi(token: any) {
      let responseBody = this.jwtService.authorizationTest(token);
      alert("Outside from authorizationTest: "+responseBody);
      responseBody.subscribe(
         (responseData) => {
           console.log('Response Data:', responseData);
           this.response = responseData;
           alert('responseData ' + responseData);
         },
         (error) => {
           console.error('Error:', error);
         }
      );
   }
}
