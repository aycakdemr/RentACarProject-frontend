import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup
  constructor(private formBuilder:FormBuilder,private authService:AuthService,
    private toastrService:ToastrService,private userService:UserService) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm=this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }
  login(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
      let loginModel =Object.assign({},this.loginForm.value)
      this.authService.login(loginModel).subscribe(response=>{
        console.log(response)
        this.setIdToLocalStorage(loginModel.email);
        this.toastrService.info(response.message)
        console.log(response.data)
        localStorage.setItem("token",response.data.token)
       
      },responseError=>{
        this.toastrService.error(responseError.error)
      })
    }
  }
  setIdToLocalStorage(email :string){
    this.userService.getUserByEmail(email).subscribe(r=>{
      localStorage.setItem('id', (r.data[0].id).toString())
    })
  }
}
