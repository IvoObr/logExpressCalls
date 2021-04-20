## logExpress :tractor:
#### Middleware logging calls for Express 4.x 

> $ npm install @7dev-works/log-express

* has timestamp,
* method name,
* url,
* status code,
* time it took for the server to respond in ms
* includes TypeScript definitions

### Example

> app.js 
```javascript
import { logExpress } from '@7dev-works/log-express';

const express = require('express')
const app = express()
const port = 3000

// enables call logging 
app.use(logExpress)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// Start the server
// Open your browser navigate to http://localhost:3000/

// output
[2021-04-20 08:07:44] GET: / 200 7ms
[2021-04-20 08:07:45] GET: /favicon.ico 404 1ms

// refresh the page
// output
[2021-04-20 08:08:05] GET: / 304 2ms
```

## Happy coding!  <:beer:/>

