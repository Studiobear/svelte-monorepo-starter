import unified from 'unified'
import markdown from 'remark-parse'
import slug from 'remark-slug'
import toc from 'remark-toc'
import remark2retext from 'remark-retext'
import english from 'retext-english'
import indefiniteArticle from 'retext-indefinite-article'
import remark2rehype from 'remark-rehype'
import doc from 'rehype-document'
import format from 'rehype-format'
import html from 'rehype-stringify'

export const processor = unified()
  .use(markdown)
  .use(
    remark2retext,
    unified()
      .use(english)
      .use(indefiniteArticle),
  )
  .use(slug)
  .use(toc)
  .use(remark2rehype)
  .use(doc, { title: 'Contents' })
  .use(format)
  .use(html)

export default processor
