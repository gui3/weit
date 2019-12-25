# weit

> WEIT for a condition THEN do (javascript)

a simple no dependancy plugin

```js
// usage
weit(_ => condition)
  .then(_ => action)

// example
let i

weit(_ => i)
  .then(_ => console.log('yes'))
  .catch(e => {throw e})

// wait a few seconds
i = true
// outputs "yes"
```
[try me in the web console](https://gui3.github.io/weit/)

# Install

> the same routine as always

There are **NO dependancies**

> cross compatibility node/browser thanks to moment.js template

- Usable in browser

```html
<script type="text/javascript" src="path/to/weit/index.js"></script>
```

*There is no CDN for now but it might come if you ask for it.*

- Usable in node

```
npm install weit
```

```js
const frum = require('weit')
```
