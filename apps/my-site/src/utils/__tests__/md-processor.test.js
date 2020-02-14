import vfile from 'vfile'
import { processor } from '../md-processor'

describe('MD Processor', () => {
  test('should post object', async () => {
    const post = await processor
    console.log(post)
    expect(post).toHaveProperty('title')
    expect(post).toHaveProperty('slug')
  })
})
