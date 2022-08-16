export interface BaseModel {
  id: number
  updated_at?: number
  created_at?: number
}

export interface Token {
  expire?: number
  jwt: string
}

export interface ResType<T> {
  code: number
  data: T
  msg: string
}

export type PromiseResType<T> = Promise<ResType<T>>

export type NullableResp = Promise<ResType<number[]>>
