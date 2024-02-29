
const HOJA = SpreadsheetApp.openById('1w-U_y-_IVWcIW2e2kFAAOi2_b6KFwrrR1surjZuguSo').getActiveSheet();

function doGet(datos)
{
    insertarContacto( datos.parameter.nombre, datos.parameter.correo ); 
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda GAS');
}

// Recibir el intro del formulario (no se ven en la url)
function doPost(datos)
{
    //Accedemos al campo del formulario cuyo "name" es nombre
    insertarContacto( datos.parameter.nombre, datos.parameter.correo ); 
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda GAS');
}



function obtenerDatosHtml(nombre)
{
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

function obtenerContactos()
{
    return HOJA.getDataRange().getValues();
}

function insertarContacto( nombre, correo)
{
    HOJA.appendRow([nombre,correo]);
}