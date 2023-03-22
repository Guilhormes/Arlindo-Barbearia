function validarDados(){
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var div = document.getElementById('error');
    var error;
    if(nome.length<3){
        document.getElementById('nome').focus();
        error = 'Nome inválido';
    }else if(email.length<3){
        document.getElementById('email').focus();
        error = 'Email inválido';
    }else{
        error = '';
    }
    if(error==''){
        window.location.href = "message.html";
    }else{
        div.innerHTML = error;
    }
}


function marcaDesmarca(caller){
    var otimo = document.getElementById('otimo');
    var medio = document.getElementById('medio');
    var ruim = document.getElementById('ruim');
        var checks = document.querySelectorAll('input[type="checkbox"]');    
    checks.forEach(c => c.checked = (c == caller) );
}
