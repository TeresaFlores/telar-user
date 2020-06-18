import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  infoContac: string []= ['Folio: 11475','CURP: ROMC910623MDFRLB11','Fecha de Nacimiento: 23 de Junio de 1991', 'Lugar de Nacimiento: Milpa Alta. Ciudad de México', 'Género: Mujer', 'Experiencia: 8 años']
  addSpecialty =false;
  addTechnique=false;
  addPopulation=false;
}
