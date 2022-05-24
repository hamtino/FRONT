import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  registerForm = new FormGroup({
    nombre: new FormControl(''),
    edad: new FormControl(''),
    documento: new FormControl(''),
    licencia: new FormControl('')
  });

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.openSnackBar('creado correctamente', 'OK')
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
