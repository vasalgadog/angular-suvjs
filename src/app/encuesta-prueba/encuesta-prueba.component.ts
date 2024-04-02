import { Component, OnInit } from '@angular/core';
import { Model } from "survey-core";              //importa el generador de modelo de encuestas de SurveyJS
import { survJson } from './encuesta1';           //importa la constante que tiene la encuesta en el archivo encuesta1.ts
import { SurveyModule } from "survey-angular-ui"; //importa el UI para el modelo de la encuesta
import "survey-core/survey.i18n";                 //importa los paquetes de idiomas para encuestas
import { env } from '../../environment'

@Component({
  selector: 'app-encuesta-prueba',
  standalone: true,
  imports: [SurveyModule],                        //el componente por completo usará SurveyModule
  templateUrl: './encuesta-prueba.component.html',
  styleUrl: './encuesta-prueba.component.css'
})
export class EncuestaPruebaComponent implements OnInit{   //Usa OnInit para cargar configuraciones cuando el componente es inicializado
  modelo : Model;                                 // variable modelo de tipo Model (de survey-core)
  constructor(){
    this.modelo = new Model(survJson);            //crea un modelo, con la encuesta importada de ./encuesta1. En el caso de ser una API, la api tiene que devolver el JSON con la misma estructura.
    this.modelo.locale = "es";                    //indica el idioma de la encuesta
  }

  ngOnInit(): void {
    this.modelo.onComplete.add(this.alertResults); //agrega el evento alertResult para cuando la encuesta sea completada
  }

  alertResults(sender:any){
    const results = JSON.stringify(sender.data);  //sender.data contiene las respuestas del modelo. Esta información se debe enviar a la API para ser almacenada.
    alert(results);
    console.log(results);
  }

  enviar(){
    
  }
/*
  getModeloAPI(url, id : number){
    fetch(env.API_URL+url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify(json)
    })
    .then(response => {
      if (response.ok) {
        // Handle success
      } else {
        // Handle error
      }
    })
    .catch(error => {
      // Handle error
    });
  }
  }
*/
}
