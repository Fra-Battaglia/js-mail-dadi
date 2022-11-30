// 1 - generare un numero casuale per il giocatore

let player_number = Math.floor(Math.random() * 6) + 1;
console.log(`il numero del giocatore è ${player_number}`);

// 2 - generare un numero casuale per il computer

let computer_number = Math.floor(Math.random() * 6) + 1;
console.log(`il numero del computer è ${computer_number}`);

// 3 - conrollare il valore più alto

// 3.1 - SE mostrare il messaggio 'pareggio'

if (player_number == computer_number) {
	console.log(`pareggio`);
}

// SE il giocatore ha il dado col numero più alto mostrare il messaggio 'il giocatore ha vinto'

else if (player_number > computer_number) {
	console.log(`Ha vinto il giocatore`);
}

// SE il computer ha il dado col numero più alto mostrare il messaggio 'il computer ha vinto'

else if (player_number < computer_number) {
	console.log(`Ha vinto il computer`);
}