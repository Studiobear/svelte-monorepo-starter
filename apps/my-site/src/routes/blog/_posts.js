import { readdir } from 'fs'
import { join } from 'path'
import { promisify } from 'util'

import { processor } from '../../utils'

const readdirP = promisify(readdir)

const cwd = process.cwd()
const POSTS_DIR = join(cwd, 'src/routes/blog/posts/')

const postProcessor = processor()

const processPosts = () => async (allFiles = []) => {
  const posts = (await readdirP(POSTS_DIR))
    .filter(fileName => /\.md$/.test(fileName))
    .map(f => join(POSTS_DIR, f))

  const getPosts = await Promise.all(
    posts.map(async post => {
      const postWrap = await postProcessor(post)
      return postWrap
    }),
  ).catch(console.error)

  return getPosts
}
export default processPosts
