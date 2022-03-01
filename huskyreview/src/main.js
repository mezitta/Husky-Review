import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
// import VueResource from 'vue-resource'
// import VueRouter from 'vue-router'
// import Routes from './router/index'

// VueResource.use(VueRouter);

// const router = new VueRouter ({
//     routes: Routes
// });

// const app = createApp({
//     el: '#app',
//     render: h => h(App),

//     router: router
// })

// app.mount('#app')

createApp(App).use(router).mount('#app')
