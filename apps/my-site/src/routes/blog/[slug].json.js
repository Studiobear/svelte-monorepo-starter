import processPosts from './_posts.js'

const lookup = new Map()

const setLookup = postsAll =>
  postsAll.map(post => {
    lookup.set(post.slug, JSON.stringify(post))
  })

const posts = processPosts()

export const get = async (req, res, next) => {
  // the `slug` parameter is available because
  // this file is called [slug].json.js
  const { slug } = req.params
  const getPostContents = await posts()
  const callLookup = await setLookup(getPostContents)

  if (await lookup.has(slug)) {
    res.writeHead(200, {
      'Content-Type': 'application/json',
    })

    res.end(await lookup.get(slug))
  } else {
    res.writeHead(404, {
      'Content-Type': 'application/json',
    })

    res.end(
      JSON.stringify({
        message: `Not found`,
      }),
    )
  }
}

export default get
