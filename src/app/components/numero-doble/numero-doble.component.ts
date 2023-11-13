import { Component, OnInit } from '@angular/core';
//NECESITAMOS UNA SERIE DE CLASES PARA RECUPERAR LOS PARAMETROS
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-numero-doble',
  templateUrl: './numero-doble.component.html',
  styleUrls: ['./numero-doble.component.css']
})
export class NumeroDobleComponent implements OnInit {
  //DECLARAMOS VARIABLE PARA NUESTRO DIBUJO
  public numero!: number;
  public doble!: number;
  //ESTE ES EL OBJETO QUE VIENE INYECTADO DESDE MODULE
  constructor(private _activatedRoute: ActivatedRoute, private _router: Router) {
  }
  ngOnInit(): void {
    //EN ESTE METODO ES DONDE DEBEMOS SUBSCRIBIRNOS A LA
    //RECEPCION DE LOS PARAMETROS DE ROUTING
    //SE UTILIZA EL OBJETO ActivatedRoute
    this._activatedRoute.params.subscribe((parametros: Params) => {
      //DENTRO DE Params SE RECUPERAN LOS NOMBRES DE PARAMETROS
      //CON LA SIGUIENTE SINTAXIS: parametros['NAME']
      //NUESTRO PARAMETRO NÚMERO ES OPCIONAL, POR LO QUE VAMOS
      //A REALIZAR UN IF PARA VER SI VIENE O NO EN NUESTRA RUTA
      if (parametros["numero"] != null) {
        //LO PARAMETROS SON SIEMPRE String
        this.numero = parseInt(parametros["numero"]);
        this.doble = this.numero * 2;
      }
    });
  }

  goHome(): void {
    this._router.navigate(["/"]);
  }
  cambiarNumero(numero: number): void {
    this._router.navigate(["/doble", numero]);
  }
}
