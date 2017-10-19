const loading = VueLoading.default;

Vue.use(loading);

new Vue({
  name:'c-app',
  el: '#container',
  created() {
      
  },
  data() {
    return {
      
    }
  },
  methods:{
    fClick(){
      this.$loading(true);
      setTimeout(() => {
        this.$loading(false);
      },3000);
    }
  },
  components: {
    
  }
});

