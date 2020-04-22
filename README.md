## vue-loading

### Install

```bash
npm install vue-m-loading -S
```

### QuickStart
```javascript
import loading from 'vue-loading';
import 'vue-loading/dist/vue-loading.css';

// in Global variable
const loading = VueLoading.default;

Vue.use(loading);
```
```javascript
//in component
this.$loading(true,{
    id:'loading1',
    section:''
});

//in Global
Vue.loading(true,{
    id: 'loading2',
    section: ''
});
```

### Params

- `show`: first param, anonymous, whether to show loading
- `id`: the loading element's id
- `section`: a element selector used by querySelector,the section to show loading

### Methods
- `Vue.clearLoading`: clear all loadings, such as when vue router switch

### Preview

![loading image](./doc/loading.png)