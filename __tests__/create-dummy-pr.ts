import {PR} from '../src/types/pull-request'

interface Options {
  sha?: string
  draft?: boolean
}

export default function createDummyPR(id: number, options: Options): PR {
  return Object.assign({} as PR, {
    id,
    draft: options.draft || false,
    head: {
      sha: options.sha || ''
    }
  })
}
