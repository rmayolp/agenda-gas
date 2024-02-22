function doGet()
{
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda GAS');
}

function obtenerDatosHtml(nombre)
{
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();

}

function obtenerContactos()
{
    let ss = SpreadsheetApp.openById('1w-U_y-_IVWcIW2e2kFAAOi2_b6KFwrrR1surjZuguSo');
    let hoja = ss.getActiveSheet();
    let datos = hoja.getDataRange().getValues();

    return datos;

}