// import vfile from 'vfile'
import toVfile from 'to-vfile'
import VMessage from 'vfile-message'
import report from 'vfile-reporter'
import unified from 'unified'
// import remark from 'remark'
import markdown from 'remark-parse'
// import slug from 'remark-slug'
// import toc from 'remark-toc'
import frontmatter from 'remark-frontmatter'
import yaml from 'yaml'
import extractFM from 'remark-extract-frontmatter'
// import remark2retext from 'remark-retext'
// import english from 'retext-english'
// import indefiniteArticle from 'retext-indefinite-article'
import remark2rehype from 'remark-rehype'
// import doc from 'rehype-document'
// import format from 'rehype-format'
import stringify from 'rehype-stringify'
import path from 'path'

export const processor = unified()
  .use(markdown)
  .use(remark2rehype)
  .use(frontmatter)
  .use(extractFM, { name: 'frontmatter', yaml: yaml.parse })
  .use(stringify)
  .use(log)
  .process(toVfile.readSync('./src/utils/example.md', 'utf8'))
  .then(
    function(file) {
      return {
        title: file.data.frontmatter.title || 'No title',
        slug: file.data.frontmatter.slug || '',
        html: file.contents,
      }
    },
    function(err) {
      throw new Error(err)
    },
  )
  .catch(console.error)

function log() {
  const logger = (tree, file) => {
    console.log('log:', tree, file) // 'Hi!'
  }
  return logger
}
export default processor
