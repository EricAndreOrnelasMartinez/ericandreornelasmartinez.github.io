const traza = document.getElementById('traza');
const det = document.getElementById('det');
const transpuesta = document.getElementById('transpuesta');
const potencia = document.getElementById('potencia');
const res = document.getElementById('res');
let ans;
traza.onclick = function (){
    p00 = parseInt(document.getElementById('00').value);
    p11 = parseInt(document.getElementById('11').value);
    p22 = parseInt(document.getElementById('22').value);
    ans = p00 + p11 + p22
    if(ans == NaN){
        res.innerHTML = "<h3>Complete la matriz</h3>"
    }else{
        res.innerHTML = "<h3>Trasa: " + ans + "</h3>"
    }
}

det.onclick = function (){
    p00 = parseInt(document.getElementById('00').value);
    p01 = parseInt(document.getElementById('01').value);
    p02 = parseInt(document.getElementById('02').value);
    p10 = parseInt(document.getElementById('10').value);
    p11 = parseInt(document.getElementById('11').value);
    p12 = parseInt(document.getElementById('12').value);
    p20 = parseInt(document.getElementById('20').value);
    p21 = parseInt(document.getElementById('21').value);
    p22 = parseInt(document.getElementById('22').value);
    ans = ((p22 * p11) - (p21 * p12))*(p00) - ((p10 * p22) - (p20 * p12))*(p01) + ((p10 * p21) - (p20 * p11))*(p02);
    if(ans == NaN){
        res.innerHTML = "<h3>Complete la matriz</h3>"
    }else{
        res.innerHTML = "<h3>Determinante: " + ans + "</h3>"
    }
}
transpuesta.onclick = function(){
    p00 = parseInt(document.getElementById('00').value);
    p01 = parseInt(document.getElementById('01').value);
    p02 = parseInt(document.getElementById('02').value);
    p10 = parseInt(document.getElementById('10').value);
    p11 = parseInt(document.getElementById('11').value);
    p12 = parseInt(document.getElementById('12').value);
    p20 = parseInt(document.getElementById('20').value);
    p21 = parseInt(document.getElementById('21').value);
    p22 = parseInt(document.getElementById('22').value);
    res.innerHTML = `
    <table>
    <tr>
        <td>${p00}</td>
        <td>${p10}</td>
        <td>${p20}</td>
    </tr>
    <tr>
        <td>${p01}</td>
        <td>${p11}</td>
        <td>${p21}</td>
    </tr>
    <tr>
        <td>${p02}</td>
        <td>${p12}</td>
        <td>${p22}</td>
    </tr>
    </table>
    `;
}

potencia.onclick = function(){
    p00 = parseInt(document.getElementById('00').value);
    p01 = parseInt(document.getElementById('01').value);
    p02 = parseInt(document.getElementById('02').value);
    p10 = parseInt(document.getElementById('10').value);
    p11 = parseInt(document.getElementById('11').value);
    p12 = parseInt(document.getElementById('12').value);
    p20 = parseInt(document.getElementById('20').value);
    p21 = parseInt(document.getElementById('21').value);
    p22 = parseInt(document.getElementById('22').value);
    p00N = (p00 * p00) + (p01 * p10) + (p02 * p20)
    //p01N = ()
}