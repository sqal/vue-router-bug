import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { auth } from "./auth";

// let be = router.beforeEach((to, from, next) => {
//   console.log('beforeEach');
//   next(false);
// });

function removeAuthGuard() {
  if (typeof be !== 'undefined') {
    be()
    be = undefined
  }
}

async function init() {
  const app = createApp(App)

  app.use(router)
  app.mount('#app')

  const { authenticated } = await auth.checkAuth();
  console.log({ authenticated });

  removeAuthGuard()

  if (authenticated) {
    await router.replace({ name: 'home' })
  } else {
    await router.replace({ name: 'login' })
  }
}

init()
