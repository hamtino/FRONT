import {AfterViewInit, Component, ViewChild, Inject, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { DetailsComponent } from './components/details/details.component';
import { CreateStudentComponent } from './components/create-student/create-student.component';
import { CreateStudentService } from './api/services/create-student.service';
import { Student } from './api/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit, OnChanges{
  showFiller = false;
  displayedColumns: string[] = ['id', 'nombre', 'edad', 'documento', 'licencia', 'acciones'];
  dataSource: MatTableDataSource<Student>;
  isLoadingResults = true;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort , { static: true }) sort!: MatSort;

  constructor(public dialog: MatDialog, private api: CreateStudentService) {
    this.dataSource = new MatTableDataSource<Student>();
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes);
      this.loadData();
  }
  ngOnInit(): void {
    this.loadData();
  }
  loadData(){
    this.isLoadingResults = true;
    this.api.apiCreateStudentGet$Json().subscribe(resp =>{
      this.dataSource = new MatTableDataSource(resp);
      this.isLoadingResults = false;
    })
  }

  openDialog(row: any) {
    const dialogRef = this.dialog.open(DetailsComponent,
      {
        data: {
          name: row.name,
        },
      });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      this.loadData();
    });
  }
  createStudent(){
    const dialogRef = this.dialog.open(CreateStudentComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      this.loadData();
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

