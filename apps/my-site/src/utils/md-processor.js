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

export const processMD = filepath => (foo = 'bar') => {
  console.log('processMD: ', filepath, foo)
  return filepath
}

export const processor = filepath => async () =>
  await unified()
    .use(markdown)
    .use(remark2rehype)
    .use(frontmatter)
    .use(extractFM, { name: 'frontmatter', yaml: yaml.parse })
    .use(rmfm)
    .use(stringify)
    .use(log)
    .process(toVfile.readSync(filepath, 'utf8'))
    .then(file => ({
      title: file.data.frontmatter.title || 'No title',
      slug: file.data.frontmatter.slug || '',
      html: file.contents,
    }))
    .catch(console.error)

const rmfm = removeFrontmatter

const removeFrontmatter = () => async tree =>
  filter(tree, node => node.type !== 'yaml')

const log = () => (tree, file) => {
  console.log('log:', tree, file)
  return tree
}

export default processor
