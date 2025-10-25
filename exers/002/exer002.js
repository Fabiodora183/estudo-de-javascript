function ver(){
var data = new Date()
var ano = data.getFullYear()
var fAno = document.getElementById('txtano')
var res = document.getElementById('res')
if (fAno.value.length == 0 || fAno.value > ano){
    alert('seus dados estão incorretos')
}else{
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fAno.value)
    var genero = ''
    if(fsex[0].checked){
        genero = 'homem'
    }else if(fsex[1].checked){
        genero = 'mulher'
    }
}
res.style.textAlign = 'center'
res.innerHTML = `foi detectado ${genero} com ${idade} anos de idade!`
}