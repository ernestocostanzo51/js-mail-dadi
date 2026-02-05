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

//il primo giocatore lancia un dato
//il secondo giocatore lancia un dato
//si vedono i punteggi
//SE il primo giocatore ha fatto più punti vince
//ALTRIMENTI vince il secondo


let g1
let g2

 g1 = Math.floor(Math.random() * 6) + 1;
 g2 = Math.floor(Math.random() * 6) + 1;

 console.log("il giocatore 1 ha generato come punteggio:", g1)
 console.log("il giocatore 2 ha generato come punteggio:", g2)

 if(g1>g2){
    console.log("il vincitore è il primo giocatore! con il punteggio di",g1 )
 }
else if(g2>g1){
    console.log("il vincitore è il secondo giocatore! con il punteggio di", g2)
}
else{
    console.log("è finito in parità", g1, "a", g2)
}










