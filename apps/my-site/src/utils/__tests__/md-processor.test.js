import vfile from 'vfile'
import { processor } from '../md-processor'

const filePath = './src/utils/example.md'
const postWrap = processor(filePath)

describe('MD Processor', () => {
  test('should return post title, slug, html and excerpt', async () => {
    const post = await postWrap(filePath)

    // console.log(post)
    expect(post).toHaveProperty('title')
    expect(post).toHaveProperty('slug')
    expect(post).toHaveProperty('html')
    expect(post).toHaveProperty('excerpt')
  })
})
