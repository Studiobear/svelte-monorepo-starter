import toVfile from 'to-vfile'
import VMessage from 'vfile-message'
import unified from 'unified'
import markdown from 'remark-parse'
import frontmatter from 'remark-frontmatter'
import parseFrontmatter from 'remark-parse-yaml'
import excerpt from 'remark-excerpt'
import remark2rehype from 'remark-rehype'
import stringify from 'rehype-stringify'
import filter from 'unist-util-filter'
import visit from 'unist-util-visit'
import xtend from 'xtend'
import path from 'path'

export const removeFrontmatter = () => async (tree, file) => {
  let getFrontMatter
  const getFM = await visit(tree, 'yaml', node => {
    getFrontMatter = node.data.parsedValue
    return
  })
  file.data.frontmatter = getFrontMatter
  return filter(tree, node => node.type !== 'yaml')
}

export const processor = () => async filepath => {
  const postBody = await unified()
    .use(markdown)
    .use(frontmatter)
    .use(parseFrontmatter)
    .use(removeFrontmatter)
    .use(remark2rehype)
    .use(stringify)
    // .use(log)
    .process(toVfile.readSync(filepath, 'utf8'))
    .then(file => ({
      title: file.data.frontmatter.title || 'No title',
      slug: file.data.frontmatter.slug || '/',
      date: file.data.frontmatter.date || '',
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
