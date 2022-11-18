import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-professor',
  templateUrl: './sidebar-professor.component.html',
  styleUrls: ['./sidebar-professor.component.css']
})
export class SidebarProfessorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  algoritmos(){
    this.router.navigate(['professor/algoritmos']);
  }

  resumenes(){
    this.router.navigate(['ver-resumenes']);
  }
}
