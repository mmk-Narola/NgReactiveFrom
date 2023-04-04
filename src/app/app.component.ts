import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'NgReactive';
  // firstFormGroup!: FormGroup;
  // secondFormGroup!: FormGroup;
  // showCard = false;
  // showUpi = false;
  // showNetBank = false;
  // showQrCode = false;
  // public myAngularxQrCode: string = null;

  // constructor(private formBuilder: FormBuilder) {
  //   this.myAngularxQrCode = 'Your QR code data string';
  // }

  // ngOnInit() {
  //   this.firstFormGroup = this.formBuilder.group({
  //     selectOption: [''],
  //   });

  //   this.secondFormGroup = this.formBuilder.group({
  //     cardNum: new FormControl({ value: '', disabled: true }, [
  //       Validators.required,
  //     ]),
  //     exDate: new FormControl({ value: '', disabled: true }),
  //     cvv: new FormControl({ value: '', disabled: true }),
  //     upiNum: new FormControl({ value: '', disabled: true }, [
  //       Validators.required,
  //     ]),
  //     bankName: new FormControl({ value: '', disabled: true }),
  //   });

  //   this.firstFormGroup.get('selectOption')?.valueChanges.subscribe((value) => {
  //     console.log(value);
  //     if (value === 'Option 1') {
  //       this.secondFormGroup.get('cardNum')?.enable();
  //       this.secondFormGroup.get('exDate')?.enable();
  //       this.secondFormGroup.get('cvv')?.enable();
  //       this.showCard = true;
  //       this.showNetBank = false;
  //       this.showUpi = false;
  //       this.showQrCode = false;
  //     } else if (value == 'Option 2') {
  //       this.secondFormGroup.get('upiNum')?.enable();
  //       this.showUpi = true;
  //       this.showCard = false;
  //       this.showNetBank = false;
  //       this.showQrCode = false;
  //     } else if (value == 'Option 3') {
  //       this.secondFormGroup.get('bankName')?.enable();
  //       this.showNetBank = true;
  //       this.showUpi = false;
  //       this.showCard = false;
  //       this.showQrCode = false;
  //     } else if (value == 'Option 4') {
  //       this.showQrCode = true;
  //       this.showNetBank = false;
  //       this.showUpi = false;
  //       this.showCard = false;
  //     } else {
  //       this.showCard = false;
  //       this.showNetBank = false;
  //       this.showUpi = false;
  //       this.showQrCode = false;
  //       this.secondFormGroup.reset();
  //     }
  //   });

  //   this.secondFormGroup.get('cardNum')?.valueChanges.subscribe((value) => {
  //     console.log(value);
  //   });
  // }

  // secondForm() {
  //   if (this.secondFormGroup.get('upiNum')?.valid) {
  //     console.log(this.secondFormGroup.value);
  //   } else {
  //     console.log('Error');
  //   }
  // }
}
