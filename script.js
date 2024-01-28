//Creación de las constantes (arrays) que reciben la información del usuario desde la interfaz
const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");
const btnCopy = document.querySelector(".copiar");
btnCopy.style.display = "none"

//Encriptar mensaje
//Función para la acción del boton 'Encriptar', prepara el string ingresado
function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value)
    mensaje.value = textoEncriptado
    inputTexto.value = ""
    btnCopy.style.display = "block"
}
//Función que encripta el mensaje, creación del reemplazo del array recibido.
function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
//For para reemplazar la matriz ingresada por la matriz codificada
    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }                
    }
    return stringEncriptada;
}
//Desencriptar mensaje
//Función para la acción del boton 'Desencriptar', prepara el string encriptado
function btnDesencriptar() {
    const textoEncriptado = desencriptar(inputTexto.value)
    mensaje.value = textoEncriptado
    inputTexto.value = ""  
}
//Función que desencripta el mensaje, creación del reemplazo del array recibido.
function desencriptar(stringDesencriptada) {
    let matrizCodigo = [ ["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
//For para reemplazar la matriz codificadapor la matriz sin codificar (función inversa)
    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada;
}
//Botón copiar
//Función para que al apretar el botón se selecione el texto del campo del mensaje
function copiar() {
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    return mensaje.value;
}
