import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-student',
  templateUrl: './sidebar-student.component.html',
  styleUrls: ['./sidebar-student.component.css']
})
export class SidebarStudentComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  nuevoResumen(){

    this.router.navigate(['student/nuevo-resumen']);

  }

  verMisResumenes(){
    this.router.navigate(['student/mis-resumenes']);
  }

}
