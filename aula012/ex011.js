var idade = 18
if(idade < 18){
    console.log(`voce ainda é de menor cara`)
}else{
    console.log('voce é sim maior de idade, vá trabalhar!')
}

if(idade < 16){
    console.log(`nao vota`)
}else{
   if(idade < 18){
    console.log('seu voto é opcional')
   }else{
    console.log('seu voto é obrigatorio')
   }
}