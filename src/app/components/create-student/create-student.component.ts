import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Student } from 'src/app/api/models';
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

  public student: any = {};

  constructor(private _snackBar: MatSnackBar, private api: CreateStudentService) { }

  ngOnInit(): void {
  }

  onSubmit(student: any): void {
    this.student.age = student.edad;
    this.student.document= student.documento;
    this.student.licence= student.licencia;
    this.student.name = student.nombre;
    
    this.api.apiCreateStudentPost$Json( {
      body: this.student
    }
    ).subscribe(resp =>{
      this.openSnackBar(resp, 'OK')
    })
    
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
