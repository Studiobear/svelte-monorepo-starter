import { readdir } from 'fs'
import { join } from 'path'
import { promisify } from 'util'

import { processorMock } from '../../utils'

const readdirP = promisify(readdir)

const cwd = process.cwd()
const POSTS_DIR = join(cwd, 'src/routes/blog/posts/')

const postProcessor = processorMock()

const processPosts = () => async (allFiles = []) => {
  const posts = (await readdirP(POSTS_DIR))
    .filter(fileName => /\.md$/.test(fileName))
    .map(f => join(POSTS_DIR, f))

  const getPosts = await Promise.all(
    posts.map(async post => {
      const postWrap = await postProcessor(post)
      console.log('pp getPosts: ', post, await postWrap)
      return postWrap
    }),
  ).catch(console.error)

  console.log('ppgetPosts post: ', await getPosts)

  return getPosts
}
export default processPosts
