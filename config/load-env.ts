import * as dotenv from 'dotenv'

export interface ViteEnv {
  VITE_URL: string
  VITE_BASE_URL: string
  VITE_ZIP_NAME: string
  VITE_BASE_API: string
  VITE_BUILD_DROP_CONSOLE: string
  VITE_CDN_BASE: string
}

// load env file
export function loadEnv(mode: string): ViteEnv {
  const ret: any = {}
  dotenv.config({
    path: `.env.${mode}`, // .env.prc
  })

  for (const envName of Object.keys(process.env)) {
    const realName = (process.env as any)[envName].replace(/\\n/g, '\n')
    ret[envName] = realName
    // inject VITE_XXX into process.env
    process.env[envName] = realName
  }
  return ret
}
const regExps = (value: string, reg: string): string => {
  return value.replace(new RegExp(reg, 'g'), '')
}

//  proxy
export function createProxy(targetProxyUrl: string, baseUrl: string) {
  return {
    [`${baseUrl}`]: {
      target: targetProxyUrl,
      changeOrigin: true,
      rewrite: (path: string) => regExps(path, `${baseUrl}`),
    },
  }
}
