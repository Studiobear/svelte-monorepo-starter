import vfile from 'vfile'
import { processor, processMD } from '../md-processor'

const filePath = './src/utils/example.md'
const postWrap = processor(filePath)

describe('MD Processor', () => {
  test('should return post object', async () => {
    const post = await postWrap()

    console.log(post)
    expect(post).toHaveProperty('title')
    expect(post).toHaveProperty('slug')
    expect(post).toHaveProperty('html')
  })
})
