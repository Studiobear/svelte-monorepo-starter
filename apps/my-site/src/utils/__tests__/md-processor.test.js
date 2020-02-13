import vfile from 'vfile'
import { processor, toml2data } from '../md-processor'

describe('MD Processor', () => {
  test('should post object', async () => {
    const post = await processor

    expect(post).toHaveProperty('title')
  })
})
