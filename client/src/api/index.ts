import axios from 'axios';
import url from './url'

const instance = axios.create({
    baseURL: url.baseUrl
})

interface IUserLoginType  {
    userId: string,
    pwd: string
}

const api = {
    userLogin: async (userObj: IUserLoginType) => {
        const result = await instance.post(url.userLogin, {
            name: userObj.userId,
            pwd: userObj.pwd
        })
        return result;
    }
}

export default api