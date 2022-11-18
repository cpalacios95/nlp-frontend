import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modificar-resumen',
  templateUrl: './modificar-resumen.component.html',
  styleUrls: ['./modificar-resumen.component.css']
})
export class ModificarResumenComponent implements OnInit {

  resumen={
    "id":"",
    "titulo":"",
    "contenido":"",
    "autor":{
      "idAutor":"",
      "nombre": "",
      "apellido": ""
    }
  }


  constructor(private route: ActivatedRoute) { 

    this.route.queryParams.subscribe((data:any)=>{
      this.resumen=data;
    })

  }

  ngOnInit(): void {
  }

}
