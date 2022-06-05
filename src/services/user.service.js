import { httpService } from './http.service';
export const userService = {
    login,
    logout,
    signup,
}

async function login (credentials) {
    console.log('credentials from login user service: ', credentials);
    try {
        return await httpService.post('login', credentials)
      } catch (err) {
        console.log('Invalid Credentials')
        throw err
      }
}

async function logout() {
    try {
        await httpService.post('logout')
      } catch (err) {
        console.log('Something went wrong')
        throw err
      }
}

async function signup(credentails) {
    try {
        return await httpService.post('signup', credentails)
      } catch (err) {
        console.log('Invalid Credentials')
        throw err
      }
}