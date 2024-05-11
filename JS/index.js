document.addEventListener('DOMContentLoaded', function () {
    obtenerDatos();
});

function crearListaDinamica(fecha) {

    /*          <tr>
                  <td>fecha</td>
                  <td>maxima</td>
                  <td>minima</td>

                </tr>
    */
// creo todos los elementos que voy a crear dinamicamente
    const tr = document.createElement('tr');
    
    const tdfecha = document.createElement('td');
    tdfecha.textContent = fecha.date;
    
    const tdMaxima = document.createElement('td');
    tdMaxima.textContent = fecha.day.maxtemp_c;
    
// en este td voy a guardar el boton que cree   
    const tdMinima = document.createElement('td');
    tdMinima.textContent = fecha.day.mintemp_c;
    
    tr.appendChild(tdfecha);
    tr.appendChild(tdMaxima);
    tr.appendChild(tdMinima);

    return tr;

}



async function obtenerDatos() {
    const url = 'http://api.weatherapi.com/v1/forecast.json?key=%20bea7d24b34144120a4e234909240605%20&q=Punta%20Arenas&days=10&aqi=no&alerts=no';

    try {
        const fecha = await fetch(url);
        
        const dateJSON = await fecha.json();
        console.log(dateJSON.forecast.forecastday);
        recorrerDatos(dateJSON.forecast.forecastday)
    } catch (error){
       


    }


}

function recorrerDatos(fecha) {

    const completo = document.getElementById('completo')
    
   debugger;
    fecha.forEach(fecha => {

        const lista = crearListaDinamica(fecha);
      
        completo.appendChild(lista);
        
    });
}



