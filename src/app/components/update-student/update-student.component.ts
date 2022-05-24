import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreateStudentService } from 'src/app/api/services';

export interface DialogData {
  name: any,
  age: any,
  document: any,
  licence: any,
  id: any
}

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  registerForm: any;


  
  public student: any = {};

  get f() { return this.registerForm.controls; }
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,
  private _snackBar: MatSnackBar, private api: CreateStudentService,
  private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      nombre: [this.data.name, Validators.required],
      edad:[this.data.age.toString(),Validators.required],
      documento:[this.data.document,Validators.required],
      licencia:[this.data.licence,Validators.required],
    });
    console.log(this.data.id)
  }
  onSubmit(student: any): void {
    this.student.age = student.edad;
    this.student.document= student.documento;
    this.student.licence= student.licencia;
    this.student.name = student.nombre;
    this.student.id = this.data.id
    
    this.api.apiCreateStudentPut$Json( {
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
