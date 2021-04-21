function seletor() {
    const tecla = event.keyCode;
    const mouse = event.target;
    console.log(tecla);
    if (tecla === 67 || tecla === 99 || mouse.value === 'C') {
        if(!tecla){
            document.getElementById('display').innerHTML = '';
            
        }else { 
            document.getElementById('display').innerHTML = '';
        }
    } else if (tecla === 60 || mouse.value === '←') {
        let resultado = document.getElementById('display').innerHTML;
        document.getElementById('display').innerHTML = resultado.substring(0, resultado.length -1);
    }
    else if (mouse.value === 'x²') {
        let resultado = document.getElementById('display').innerHTML;
        if(resultado){
            document.getElementById('display').innerHTML = resultado**2;
        } else {
            document.getElementById('display').innerHTML = '';
        }
    }
    else if (tecla === 47 || mouse.value === '/') {
        console.log('/');
        num('/');
    }
    else if (tecla === 55 || mouse.value === '7') {
        console.log('7')
        num('7');
    }
    else if (tecla === 56 || mouse.value === '8') {
        console.log('8');
        num('8');
    }
    else if (tecla === 57 || mouse.value === '9') {
        console.log('9');
        num('9');
    }
    else if (tecla === 42 || mouse.value === 'x') {
        console.log('*');
        num('*');
    }
    else if (tecla === 52 || mouse.value === '4') {
        console.log('4');
        num('4');
    }
    else if (tecla === 53 || mouse.value === '5') {
        console.log('5');
        num('5');
    }
    else if (tecla === 54 || mouse.value === '6') {
        console.log('6');
        num('6');
    }
    else if (tecla === 45 || mouse.value === '-') {
        console.log('-');
        num('-');
    }
    else if (tecla === 49 || mouse.value === '1') {
        console.log('1');
        num('1');
    }
    else if (tecla === 50 || mouse.value === '2') {
        console.log('2');
        num('2');
    }
    else if (tecla === 51 || mouse.value === '3') {
        console.log('3');
        num('3');
    }
    else if (tecla === 43 || mouse.value === '+') {
        console.log('+');
        num('+');
    }
    else if (tecla === 48 || mouse.value === '0') {
        console.log('0');
        num('0');
    }
    else if (tecla === 62 || mouse.value === '.') {
        console.log('.');
        num('.');
    }
    else if (tecla === 61 || mouse.value === '=') { 
        let resultado = document.getElementById('display').innerHTML;
        if(resultado){
            document.getElementById('display').innerHTML = eval(resultado);
        } else {
            document.getElementById('display').innerHTML = '';
        }
    }
    
}


document.addEventListener('keypress', seletor);
document.addEventListener('click', seletor);


function num (n) {
    let numero = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = numero + n;
}


