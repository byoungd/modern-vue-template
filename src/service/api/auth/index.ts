// example api service
import http from '~/service/http'
import { ILoginApi } from './types'

const authApi: ILoginApi = {
  LOGIN(params) {
    return http.post('/auth/login', params)
  },
}

export default authApi
