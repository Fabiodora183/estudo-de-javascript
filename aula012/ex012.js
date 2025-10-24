var agora = new Date()
var hora = agora.getHours()
console.log(`agora são ${hora}`)
if(hora >= 18){
    console.log('Boa noite')
}else if(hora > 12 && hora < 18){
    console.log('Boa tarde')
}else{
    console.log('Bom dia')
}
