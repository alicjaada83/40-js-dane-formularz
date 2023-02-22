let button = document.querySelector('button');
button.onclick = function () {
    let imie = document.getElementById('imie').value;
    let nazwisko = document.getElementById('nazwisko').value;
    let telefon = document.getElementById('telefon').value;
    console.log(imie);
    console.log(nazwisko);
    console.log(telefon);
    document.getElementById('name').textContent = imie;
    document.getElementById('surname').textContent = nazwisko;
    document.getElementById('phone').textContent = telefon;
}