import { Injectable } from "@angular/core";

@Injectable()
export class AgentesService {
 private agentes: Agentes []= [
  {
    nombre:"Ximena Flores",
    profesion:" Actriz de teatro",
    img:"assets/img/people1.png"
  },
  {
    nombre:"Adrián Jiménez",
    profesion:" Artista plástico",
    img:"assets/img/people2.png"
  },
  {
    nombre:"Citalli Hernández",
    profesion:" Artista textil",
    img:"assets/img/people3.png"
  },
  {
    nombre:"Juan Flores",
    profesion:" Artesano",
    img:"assets/img/people4.png"
  }
 ];

  constructor(){
    console.log("Servocio listo para usar!!")
  }
  getAgentes(): Agentes [] {
    return this.agentes
  }

}

export interface Agentes{
  nombre: string;
  profesion: string;
  img: string;
}



