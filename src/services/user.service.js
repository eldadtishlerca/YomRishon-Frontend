import { httpService } from './http.service';
import{storageService} from './async-storage.service'
export const userService = {
    login,
    logout,
    signup,
}

async function login(credentials) {
    try {
        const user = await httpService.post('login', credentials)
        storageService.saveLocalUser(user)
        return user
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