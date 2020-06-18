import { Component, OnInit } from '@angular/core';
import { AgentesService, Agentes } from '../../components/services/agentes.service';

@Component({
  selector: 'app-agentes',
  templateUrl: './agentes.component.html',
  styleUrls: ['./agentes.component.css']
})
export class AgentesComponent implements OnInit {
  agentes: Agentes[] = [];

  constructor( private _agentesService:AgentesService) {
    console.log("cosntructor");
   }

  ngOnInit() {
        this.agentes = this._agentesService.getAgentes();
        console.log(this.agentes)
  }



}
