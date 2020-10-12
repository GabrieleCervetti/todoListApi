const http = require('http');										//require va a richiamare le dipendenze; 'http' è il path del file senza estensione (è come si stesse chiamando http.js). Così si crea un server http									

const hostname = '127.0.0.1'; 										//localhost
const port = 3000;													//porta su cui si vuole esporre

const server = http.createServer(function(req, res){				//pre creare un server...; serve una call-back poichè si è su ambiente asincrono
  res.statusCode = 200;												//quando riceve una richiesta restituisce 200 (lo status code)
  res.setHeader('Content-Type', 'text/plain');						//ci sono gli header per dire di che tipo è la response
  res.end("Ciao a tutti");											//response con il contenuto
});

server.listen(port, hostname, function(){							//.listen è un metodo che prende tre parametri, di cui uno la call-back; server avviato e messo in ascolto sulla porta 3000 e sul local host
  console.log(`Server running at http://${hostname}:${port}/`);
});

//per avviare tutto (da terminale): node server_prova.js -> si vede il console.log
//il server è in ascolto
//se si va su localhost:3000 verrà fuori scritto "Ciao a tutti" (il messaggio scritto nella response)