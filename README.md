# frontend-starter-kit
> Progetto preconfigurato di partenza con Webpack, SASS &amp; Bootstrap 4.

### Utilizzo
Da terminale, clona i file su tuo computer in una nuova cartella:
```bash
git clone https://github.com/mohole/frontend-starter-kit nuovo-progetto
```

installa le dipendenze:
```bash
cd nuovo-progetto
npm install
```

avvia il progetto:
```bash
npm start
```

Verrà avviato un `webpack-dev-server` in modalità `hot-reload` (*la pagina del browser verrà aggiornata automaticamente ogni volta che si salvano file sorgenti del progetto*) all'indirizzo `localhost:8090`.

Per generare dei file pubblicabili su un hosting di qualunque tipo (*via FTP o Github Pages per esempio*), usare il comando:

```bash
npm build
```

i file ottimizzati saranno disponibili nella cartella `./dist`.

### Customizzazioni
Per cambiare il titolo delle notifiche e della pagina, modificare il campo `displayName` nel file `package.json`:

```json
 "displayName": "Mohole frontend starter kit",
```

per modificare la porta su cui avviare il dev-server di Webpack e la cartella in cui generare i file pubblicabili, basta modificare le relative costanti nel file `webpack.config.js`:

```javascript
const dist = './dist';
const port = 8090;
```

### About Yarn
Tutti i comandi NPM possono essere eseguiti anche con [Yarn](https://yarnpkg.com/en/docs/migrating-from-npm).

### Licenza
Progetto rilasciato su [licenza MIT](LICENSE).
