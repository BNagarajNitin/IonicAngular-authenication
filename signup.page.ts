import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterLink } from '@angular/router';
import { LoadingController } from '@ionic/angular/standalone';
import { AuthenicationService } from 'src/app/authenication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterLink,ReactiveFormsModule]
})
export class SignupPage implements OnInit {
// regForm:FormGroup | undefined ;
regForm!: FormGroup;
  constructor(public formbuilder:FormBuilder,public loadinfContoller:LoadingController,public router:Router,public authService:AuthenicationService) { }

  ngOnInit() {
    this.regForm=this.formbuilder.group({
      fullname:['',[Validators.required]],
      email:['',[
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$'),

        // Validators.pattern('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$')
      ]],
      password:['',
    Validators.required,
  Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$')]
    })
  }
  get errorControl(){
    return this.regForm?.controls
  }
async signup(){
const loading=await this.loadinfContoller.create();
await loading.present();
if(this.regForm?.valid){
  const user=await this.authService.registerUser(this.regForm.value.email,this.regForm.value.password).catch((error)=>{
    console.log(error);
    loading.dismiss();
    
  })
  if(user){
    loading.dismiss()
    this.router.navigate(['/home'])
  }
  else{
    console.log('provide the correct value');
    
  }
}
}
}
