import vfile from 'vfile'
import toVfile from 'to-vfile'
import VMessage from 'vfile-message'
import report from 'vfile-reporter'
import unified from 'unified'
import remark from 'remark'
import markdown from 'remark-parse'
import slug from 'remark-slug'
import toc from 'remark-toc'
import frontmatter from 'remark-frontmatter'
import remark2retext from 'remark-retext'
import english from 'retext-english'
import indefiniteArticle from 'retext-indefinite-article'
import remark2rehype from 'remark-rehype'
import doc from 'rehype-document'
import format from 'rehype-format'
import stringify from 'rehype-stringify'
import path from 'path'

export const md = `
---
title: "Testing Markdown"
---

# Test Title

## Subtitle Testing

This is really just a test
`
/*
export const processor = unified()
  .use(markdown)
  .use(log)
  .use(parse_yaml)
  .use(add)
  .use(remark2rehype)
  .use(frontmatter)
  .use(log)
  .use(stringify)
*/

export const processor = unified()
  .use(markdown)
  .use(frontmatter, ['yaml', 'toml'])
  .use(yaml2Data)
  .use(remark2rehype)
  .use(stringify)
  .use(yamlParse)
  .use(log)
  .process(toVfile.readSync('./src/utils/example.md', 'utf8'), function(
    err,
    file,
  ) {
    console.log(file)
    console.error(report(err || file))
  })

//processor.process(md).then(x => console.log(x))

function yaml2Data() {
  const transformer = (tree, vFile) => {
    vFile.data.yaml = tree.children[0].value
    console.log('yaml2Data:', tree, vFile)
  }
  return transformer
}

function yamlParse() {
  const parser = (tree, vFile) => {
    const yamlString = vFile.data.yaml
    const yamlSpace = yamlString.replace(/([^"]+)|("[^"]+")/g, function(
      $0,
      $1,
      $2,
    ) {
      if ($1) {
        return $1.replace(/\s/g, '')
      } else {
        return $2.replace(/"/g, '')
      }
    })
    const yaml = yamlSpace.split('=')
    vFile.data.frontmatter = {}
    vFile.data.frontmatter[yaml[0]] = yaml[1]
    console.log('yamlParse:', tree, vFile)
  }
  return parser
}

function add() {
  return patch

  function patch(_, file) {
    file.data.message = 'Hi!'
  }
}

function log() {
  const logger = (tree, file) => {
    console.log('log:', tree, file) // 'Hi!'
  }
  return logger
}
export default processor
