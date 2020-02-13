import fs from 'fs'
import path from 'path'
import mdProcessor from '../../utils'

const cwd = process.cwd()
const POSTS_DIR = path.join(cwd, 'src/routes/blog/posts/')

const posts = fs
  .readdirSync(POSTS_DIR)
  .filter(fileName => /\.md$/.test(fileName))
  .map(fileName => {
    const fileMd = fs.readFileSync(path.join(POSTS_DIR, fileName), 'utf8')
    return mdProcessor.process(fileMd, (err, file) => {
      if (err) throw err
      console.error(report(file))
      return
    })
  })

posts.forEach(post => {
  post.html = post.html.replace(/^\t{3}/gm, '')
})

export default posts
