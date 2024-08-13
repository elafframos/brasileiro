function nascimento() {
    var pais = document.querySelector('input#txtr')
    var con = window.document.querySelector('div#con')
    var n = String(pais.value)

    if (n == 'brasileiro') {
        con.innerHTML += `Você nasceu no Brasil!`
    } else {
        con.innerHTML += `Você não nasceu no Brasil!`
    }

}
