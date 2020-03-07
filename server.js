const express = require('express');

const app = express();
const port = 6000;

app.get('/', (req, res) => res.send(`Hello express 你好 express 且端口为 ${port}`));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
