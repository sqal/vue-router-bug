import { router } from './router';

const delay = ms => new Promise((resolve) => setTimeout(resolve, ms))

export const auth = {
  isAuthenticated() {
    return localStorage.getItem('token') != null
  },
  async checkAuth() {
    await delay(2000)

    return {
      authenticated: this.isAuthenticated(),
    }
  },
  login() {
    localStorage.setItem('token', 'token')
  },
  logout() {
    localStorage.removeItem('token')
    router.replace({ name: 'login' })
  }
}
