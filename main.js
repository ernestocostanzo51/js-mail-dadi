let mail=['mario@mail.it', 'luca@mail.it', 'marco@mail.it']

let mail_log = prompt("inserisci la tua mail per accedere")

let accesso = false

for(i=0; i<mail.length; i++){
  if(mail[i] === mail_log){
    accesso = true
}
}

if(accesso){
    alert("ACCESSO CONSENTITO")

}
else{
    alert("ACCESSO NEGATO")
}
