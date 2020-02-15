import toVfile from 'to-vfile'
import VMessage from 'vfile-message'
import report from 'vfile-reporter'
import unified from 'unified'
import markdown from 'remark-parse'
// import slug from 'remark-slug'
// import toc from 'remark-toc'
import frontmatter from 'remark-frontmatter'
import yaml from 'yaml'
import extractFM from 'remark-extract-frontmatter'
import excerpt from 'remark-excerpt'
// import remark2retext from 'remark-retext'
// import english from 'retext-english'
// import indefiniteArticle from 'retext-indefinite-article'
import remark2rehype from 'remark-rehype'
// import format from 'rehype-format'
import stringify from 'rehype-stringify'
import filter from 'unist-util-filter'
import xtend from 'xtend'
import path from 'path'

export const removeFrontmatter = () => tree =>
  filter(tree, node => node.type !== 'yaml')

export const processorMock = () => async filepath => {
  const postBody = await unified()
    .use(markdown)
    .use(remark2rehype)
    .use(frontmatter)
    .use(stringify)
    // .use(log)
    .process(toVfile.readSync(filepath, 'utf8'))
    .then(file => ({
      title: filepath,
      slug: 'mock-slug',
      html: '<p>Mock</p><p>Hi!</p>',
    }))
    .catch(console.error)

  const postExcerpt = await { excerpt: '<p>Mock</p>' }
  return xtend(postBody, postExcerpt)
}

export const processor = () => async filepath => {
  const postBody = await unified()
    .use(markdown)
    .use(remark2rehype)
    .use(frontmatter)
    .use(extractFM, { name: 'frontmatter', yaml: yaml.parse })
    .use(removeFrontmatter)
    .use(stringify)
    // .use(log)
    .process(toVfile.readSync(filepath, 'utf8'))
    .then(file => ({
      title: file.data.frontmatter.title || 'No title',
      slug: file.data.frontmatter.slug || '',
      html: file.contents,
    }))
    .catch(console.error)

  const postExcerpt = await unified()
    .use(markdown)
    .use(excerpt)
    .use(remark2rehype)
    .use(frontmatter)
    .use(stringify)
    // .use(log)
    .process(toVfile.readSync(filepath, 'utf8'))
    .then(file => ({
      excerpt: file.contents,
    }))
    .catch(console.error)

  return xtend(postBody, postExcerpt)
}

const log = () => (tree, file) => {
  console.log('log:', tree, file)
  return tree
}

export default processor
