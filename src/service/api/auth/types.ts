// example types
import { ResType } from '~/service/types'

export type Role = 0 | 1 | 2

export interface Token {
  expire: number
  jwt: string
}

export interface ILoginParams {
  username: string
  password: string | number
}

export interface IUser {
  id: number
  username: string
  role: Role
  token: Token
}

export interface ILoginApi {
  LOGIN: (params: ILoginParams) => Promise<ResType<IUser>>
}
