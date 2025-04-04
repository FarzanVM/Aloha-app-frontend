import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-input',
  standalone:true,
  imports: [FontAwesomeModule,ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  
  paperplane = faPaperPlane;

  inputMsg = new FormControl('')
  sendMessage(){
    const time = new Date()
    const currentTime = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    console.log("message",this.inputMsg.value,currentTime)
  }

}
