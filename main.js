//prima insersco le mail all'interno di un vettore
//metto una variabile booleana per l'accesso impostata a false(accesso ancora non eseguito)
//chiedo tramite prompt la mail
//entro in un ciclo for che analizza le mai all'interno de vettore con la mai inserita nel prompt
//SE è vero la variabile accesso passa a true
//SE la mail conicide con le mail all'interno del vettore delle mail autorizzate ACCESSO ESEGUITO
//ALTRIMENTI accesso negato


let mail=['mario@mail.it', 'luca@mail.it', 'marco@mail.it']

let mail_log = prompt("inserisci la tua mail per accedere")

let accesso = false

for(i=0; i<mail.length; i++){
  if(mail[i] === mail_log){
    accesso = true
}
}

if(accesso){
    console.log("ACCESSO CONSENTITO")

}
else{
    console.log("ACCESSO NEGATO")
}
