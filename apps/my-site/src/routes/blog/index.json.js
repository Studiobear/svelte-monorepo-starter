import processPosts from './_posts.js'

const getContents = postsAll =>
  postsAll.map(post => {
    return {
      title: post.title,
      slug: post.slug,
      date: post.date,
      excerpt: post.excerpt,
    }
  })

const posts = processPosts()

export const get = async (req, res) => {
  const getPostContents = await posts()
  console.log('get:', getPostContents)
  const postContents = await getContents(getPostContents)
  console.log('get postContents:', await postContents)
  res.writeHead(200, {
    'Content-Type': 'application/json',
  })

  res.end(JSON.stringify(await postContents))
}
