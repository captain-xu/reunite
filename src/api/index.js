import {postApi} from '~/service'

export function getData(args = {}, refresh = true) {
  return postApi(
    'http://127.0.0.1:8001/data/source/connect',
    { ...args },
    { timeout: 30000, refresh}
  )
}