const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes');
const PORT = process.env.PORT || 8000;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(routes);

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
