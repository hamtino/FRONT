import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { CreateStudentService } from 'src/app/api/services';

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

  constructor(private _snackBar: MatSnackBar, private api: CreateStudentService) { }

  ngOnInit(): void {
  }

  onSubmit(student: any): void {
    console.log(student)
    this.api.apiCreateStudentPost$Json({students:student.nombre}).subscribe(resp =>{
      console.log(resp)
    })
    this.openSnackBar('creado correctamente', 'OK')
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
