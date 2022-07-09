const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');


app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: 'root',
  host: '127.0.0.1',
  port: '3307',
  password: '',
  database: 'pinglishWeb',
});

app.post('/createAccount', (req, res) => {
  const login = req.body.email;
  const password = req.body.password;

  db.query('INSERT INTO account (email, password) VALUES (?,?)',
  [login, password],
  (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send('Res: Konto utworzone pomyślnie!')
      console.log('Konto e-mail: "' + login + '" zostało utworzone!')
    }
  });
})



app.listen(3001, () => { 
  console.log("Success! Listen on port:3001")
});