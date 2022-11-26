import fs from 'fs'

export function getPost(slug) {

  const post = fs.readFileSync(slug, 'utf-8')

  return post.toString()
}