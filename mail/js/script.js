// 1 - creare una mailing list

const mailing_list = ["qui@gmail.com", "quo@gmail.com", "qua@gmail.com"];

// 2 - chiedere all'utiente di inserire la propria mail con un prompt

const user_mail = prompt("inserisci la tua mail");

// 3 - controllare

let found = false;

for (let i = 0; i<mailing_list.length; i++) {
	if (mailing_list[i] == user_mail) {
		found = true;
	}
}

// 	3.1 - SE la mail dell'utente è presente nella mailing list mostrare il messaggio 'accesso consentito'

if (found) {
	console.log('accesso consentito');
}

	// ALTRIMENTI mostrare il messaggio 'accesso negato'

else {
	console.log('accesso negato');
}