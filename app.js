'use strict'

window.onload = function(){

    let today = new Date();
    let formatDate = today.toDateString();
    let selectElement = document.getElementById('date');
    selectElement.innerHTML = formatDate;
}

function Git(){
    window.location.href = "https://github.com/Danielia-Baclan/SiteNuvem";
}

