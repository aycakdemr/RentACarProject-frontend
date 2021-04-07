import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup
  constructor(private authService:AuthService,private toastrService:ToastrService,
    private formBuilder:FormBuilder,private localStorage:LocalStorageService,private userService:UserService) { }

  ngOnInit(): void {
    this.createRegisterForm()
  }

  createRegisterForm(){
    this.registerForm=this.formBuilder.group({
      firstname:["",Validators.required],
      lastname:["",Validators.required],
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }
  register(){
    if(this.registerForm.valid){
      console.log(this.registerForm.value)
      let registerModel =Object.assign({},this.registerForm.value)
      
      this.authService.register(registerModel).subscribe(response=>{
        console.log(response)
        this.toastrService.info(response.message)
        localStorage.setItem("token",response.data.token)
        
        
      },responseError=>{
        this.toastrService.error(responseError.error)
      })
      
    }
  }
}
