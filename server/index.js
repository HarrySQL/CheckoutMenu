const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const db = require('../database/index.js');
const expressStaticGzip = require('express-static-gzip');

const app = express();
const port = process.env.PORT || 3003;
const publicPath = path.join(__dirname, '/../public');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', expressStaticGzip(publicPath, { enableBrotli: true, orderPreference: ['br'] }));
app.use(cors());
app.options('*', cors());

app.get('/checkout/:roomId', (req, res) => {
  db.query(`select * from properties where id = ${req.params.roomId}`, (err, results) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(results[0]);
    }
  });
});

app.post('/checkout/:roomId', (req, res) => {
  const postQuery = `insert into reservations (property_id, check_in, check_out, nights, nightly_rate, total_cost, guest_count, adults, children, infants) values (${req.body.property_id}, ${req.body.check_in}, ${req.body.check_out}, ${req.body.nights}, ${req.body.nightly_rate}, ${req.body.total_cost}, ${req.body.guest_count}, ${req.body.adults}, ${req.body.children}, ${req.body.infants})`;

  db.query(postQuery, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));
