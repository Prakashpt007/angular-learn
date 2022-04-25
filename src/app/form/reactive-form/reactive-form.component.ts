import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import Validation from '../utility/validation';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  userDetails: FormGroup = new FormGroup({
    userName: new FormControl(''),
    userEmail: new FormControl(''),
    userMobile: new FormControl(''),
    userDesc: new FormControl(''),
  });

  userDetailSubmit = false;

  form: FormGroup = new FormGroup({
    fullName: new FormControl(''),
    userName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    acceptTerms: new FormControl(false),
  });

  submitted = false;

  static match: any;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        fullName: ['', [Validators.required]],
        userName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40),
          ],
        ],
        confirmPassword: ['', [Validators.required]],
        acceptTerms: [false, [Validators.requiredTrue]],
      },
      {
        validators: [Validation.match('password', 'confirmPassword')],
      }
    );

    this.userDetails = this.formBuilder.group({
      userName: ['', [Validators.required]],
      userEmail: ['', [Validators.required, Validators.email]],
      userMobile: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.pattern(/^[0-9]\d*$/),
        ],
      ],
      userDesc: [''],
    });
  }
  get f(): { [key: string]: AbstractControl } {
    // return this.form.controls;
    return this.userDetails.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    console.log(JSON.stringify(this.form.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

  submitUserDetails() {
    this.userDetailSubmit = true;
    if (this.userDetails.invalid) {
      return;
    } else {
      console.log(this.userDetails.value);
    }
  }
}
