function validarDados(){
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var texto = document.getElementById('texto').value;
    var texto2 = document.getElementById('texto2').value;
    var div = document.getElementById('error');
    var error;
    if(nome.length<3){
        document.getElementById('nome').focus();
        error = 'Nome inválido';
    }else if(email.length<3){
        document.getElementById('email').focus();
        error = 'Email inválido';
    }else if(texto.length<1){
        document.getElementById('texto').focus();
        error = 'Texto inválido';
    }else if(texto2.length<1){
        document.getElementById('texto2').focus();
        error = 'Texto inválido';
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
    var joinville = document.getElementById('joinville');
    var outro = document.getElementById('outro');
        var checks = document.querySelectorAll('input[type="checkbox"]');    
    checks.forEach(c => c.checked = (c == caller) );
}
