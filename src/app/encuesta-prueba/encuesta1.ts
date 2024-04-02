/*
    JSON las propiedades deben ir con " (comilla doble), y no debe tener , extras!!
    (comas finales, cuando es el último elemento de un conjunto), sino, la base de 
    datos no lo aceptará. También, al momento de guardar en la BD el JSON debe estar
    compactado.
*/

export const survJson = {
    "name": "EncuestaPrueba",
    "estilo" : "hoja",
    "elements":[
        {
            "type":"text",
            "name":"Nombre",
            "title":"Ingrese su nombre",
            "isRequired":true             //agrega la propiedad de required
        },
        {
            "type":"text",
            "name":"Apellido",
            "title":"Ingrese su apellido"
        },
        {
            "name":"Checkbox",
            "type": "boolean",
            "renderAd": "checkbox",
            "title":"Este es un checkbox"
        },
        {
            "type": "dropdown",                               //dropdown es un select
            "name": "select",
            "title": "Seleccione género",
            "choices": ["femenino","masculino","otro"]        //Alternativas de un select
        },
        {
            "type": "text",                                   //input de texto
            "inputType": "date",                              // especificar que es fecha
            "name": "fecha",
            "title": "Fecha de nacimiento",
            "isRequired": true,
            "minValueExpression": "today(-36500)",            //valor mínimo, la fecha de hoy menos 100 años (365*100)
            "maxValueExpression": "today()"
        },
        {
            "type":"dropdown",
            "name": "Pais",
            "title": "Pais",
            "choicesByUrl" : {                                 //obtiene los datos desde una API, pero
                "url": "https://surveyjs.io/api/CountriesExample",
                "valueName": "name"
            }
        }
    ],
    "showQuestionNumbers": true          // Si muestra el número de cada pregunta
};