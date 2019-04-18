import {postApi} from '~/service'

export function getData(args = {}, refresh = true) {
  return postApi(
    'http://www.reunite.top/api/data/source/connect',
    { ...args },
    { timeout: 30000, refresh}
  )
}