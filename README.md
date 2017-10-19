## vue-loading

### Install

```bash
npm install vue-loading2 -S

yarn add vue-loading2
```

### QuickStart
```javascript
require('vue-loading/dist/vue-loading.css');

// in ES6 modules
import loading from 'vue-loading';

// in CommonJS
const loading = require('vue-loading');

// in Global variable
const loading = VueLoading.default;

Vue.use(loading);
```
```javascript
this.$loading(true,{
    id:'loading1',
    section:''
});
Vue.loading(false);
```

### Params

- `show`: first param, anonymous, whether to show loading
- `id`: the loading element's id
- `section`: a element selector used by querySelector,the section to show loading

### Methods
- `Vue.clearLoading`: clear loading when vue router switch

### Preview

![loading image](./doc/loading.png)