const Vue = window.Vue
Vue.config.productionTip = false

console.log(Vue)
new Vue({
  data:{
    n:0
  },
  template:`
  <div class="red">
  {{n}}
  <button @click="add">+1</button>
  </div>
  `,
  method:{
    add(){
      this.n+=1
    }
  }
}).$mount('#lee')
