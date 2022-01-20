let Radiologia = [
{Hora:'11:00',Especialista:'IGNACIO SCHULZ',Paciente:'FRANCISCA ROJAS',Rut:'9878782-1',Prevision:'FONASA'},
{Hora:'11:30',Especialista:'FERNANDO WURTHZ',Paciente:'PAMELA ESTRADA',Rut:'15345241-3',Prevision:'ISAPRE'},
{Hora:'15:00',Especialista:'FEDERICO SUBERCASEAUX',Paciente:'ARMANDO LUNA',Rut:'16445345-9',Prevision:'ISAPRE'},
{Hora:'15:30',Especialista:'ANA MARIA GODOY',Paciente:'MANUEL GODOY',Rut:'17666419-0',Prevision:'FONASA'},
{Hora:'16:00',Especialista:'PATRICIA SUAZO',Paciente:'RAMON ULLOA',Rut:'14989389-K',Prevision:'FONASA'}]

let Traumatologia = [{ Hora: '8:00', Especialista: 'MARIA PAZ ALTUZARRA', Paciente: 'PAULA SANCHEZ', Rut: '15554774-5', Prevision: 'FONASA' },
{ Hora: '10:00', Especialista: 'RAUL ARAYA', Paciente: 'ANGÉLICA NAVAS', Rut: '15444147-9', Prevision: 'ISAPRE' },
{ Hora: '10:30', Especialista: 'MARIA ARRIAGADA', Paciente: 'ANA KLAPP', Rut: '17879423-9', Prevision: 'ISAPRE' },
{ Hora: '11:00', Especialista: 'ALEJANDRO BADILLA', Paciente: 'FELIPE MARDONES', Rut: '1547423-6', Prevision: 'ISAPRE' },
{ Hora: '11:30', Especialista: 'CECILIA BUDNIK', Paciente: 'DIEGO MARRE', Rut: '16554741-K', Prevision: 'FONASA' },
{ Hora: '12:00', Especialista: 'ARTURO CAVAGNARO', Paciente: 'CECILIA MENDEZ', Rut: '9747535-8', Prevision: 'ISAPRE' },
{ Hora: '12:30', Especialista: 'ANDRES KANACRI', Paciente: 'MARCIAL SUAZO', Rut: '11254785-5', Prevision: 'ISAPRE' }]


let Dental = [{ Hora: '8:30', Especialista: 'ANDREA ZUÑIGA', Paciente: 'MARCELA RETAMAL', Rut: '11123425-6', Prevision: 'ISAPRE' },
{ Hora: '11:00', Especialista: 'MARIA PIA ZAÑARTU', Paciente: 'ANGEL MUÑOZ', Rut: '9878789-2', Prevision: 'ISAPRE' },
{ Hora: '11:30', Especialista: 'SCARLETT WITTING', Paciente: 'MARIO KAST', Rut: '7998789-5', Prevision: 'FONASA' },
{ Hora: '13:00', Especialista: 'FRANCISCO VON TEUBER', Paciente: 'KARIN FERNANDEZ', Rut: '18887662-K', Prevision: 'FONASA' },
{ Hora: '13:30', Especialista: 'EDUARDO VIÑUELA', Paciente: 'HUGO SANCHEZ', Rut: '17665461-4', Prevision: 'FONASA' },
{ Hora: '14:00', Especialista: 'RAQUEL VILLASECA', Paciente: 'ANA SEPULVEDA', Rut: '14441281-0', Prevision: 'ISAPRE' }]

//Radiología
let ult1 = (Radiologia[Radiologia.length - 1].Paciente);
let ult2 = (Radiologia[Radiologia.length - 1].Prevision);

document.write(`Atenciones en Radiología: <br><br>`);
document.write(`Primera Atención: ${Radiologia[0].Paciente} - ${Radiologia[0].Prevision} | 
Última Atención: ${ult1} - ${ult2}<br><br>`);

//Traumatología

let ult3 = (Traumatologia[Traumatologia.length - 1].Paciente);
let ult4 = (Traumatologia[Traumatologia.length - 1].Prevision);

document.write(`Atenciones en Traumatología: <br><br>`);
document.write(`Primera Atención: ${Traumatologia[0].Paciente} - ${Traumatologia[0].Prevision} | 
Última Atención: ${ult3} - ${ult4}<br><br>`);

//Dental

let ult5 = (Dental[Dental.length - 1].Paciente);
let ult6 = (Dental[Dental.length - 1].Prevision);

document.write(`Atenciones en Dental: <br><br>`);
document.write(`Primera Atención: ${Dental[0].Paciente} - ${Dental[0].Prevision} | 
Última Atención: ${ult5} - ${ult6}<br><br>`);
var datos = "<tr><td>ESPECIALIDAD</td><td>HORA</td><td>ESPECIALISTA</td><td>PACIENTE</td><td>RUT</td><td>PREVISIÓN</td></tr>";

for (var i = 0; i < Radiologia.length; i++) {

    datos += `<tr>
<td>Radiología</td>
<td>${Radiologia[i].Hora}</td>
<td>${Radiologia[i].Especialista}</td>
<td>${Radiologia[i].Paciente}</td>
<td>${Radiologia[i].Rut}</td>
<td>${Radiologia[i].Prevision}</td>
</tr>`

}

for (var i = 0; i < Traumatologia.length; i++) {

    datos += `<tr>
    <td>Traumatología</td>
    <td>${Traumatologia[i].Hora}</td>
    <td>${Traumatologia[i].Especialista}</td>
    <td>${Traumatologia[i].Paciente}</td>
    <td>${Traumatologia[i].Rut}</td>
    <td>${Traumatologia[i].Prevision}</td>
    </tr>`

}

for (var i = 0; i < Dental.length; i++) {

    datos += `<tr>
    <td>Dental</td>
    <td>${Dental[i].Hora}</td>
    <td>${Dental[i].Especialista}</td>
    <td>${Dental[i].Paciente}</td>
    <td>${Dental[i].Rut}</td>
    <td>${Dental[i].Prevision}</td>
    </tr>`

}
document.getElementById("cuerpo-tabla").innerHTML = datos;



/*For in
let datos ="<tr><td>hora</td><td>especialista</td><td>paciente</td><td>rut</td><td>prevision</td></tr>";

for (i=0; i<radiologia.length;i++){
    
    datos += `
    <tr>
        <td>${radiologia[i].hora}</td>
        <td>${radiologia[i].especialista}</td>
        <td>${radiologia[i].paciente}</td>
        <td>${radiologia[i].rut}</td>
        <td>${radiologia[i].prevision}</td>
    </tr>
    `
};*/