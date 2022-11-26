// FRAMEWORK
import Head from 'next/head'
import Markdown from 'markdown-to-jsx'

// COMPONENTS
import Navbar from '../components/Navbar'

// SCRIPTS
import { getPost } from '../scripts/blog/getPost'

// MAIN COMPONENT
export default function Home({ welcome }) {

  const Article = ({ post, ...props }) => {
    return (
      <Markdown
        {...props}
        options={{ wrapper: 'article' }}
      >
        {post}
      </Markdown>
    )
  }

  return (
    <>
      <Head>
        <title>Inicio</title>
      </Head>
      <div>
        <Navbar />
        <Article
          className="p-4 prose"
          post={welcome}
        />
      </div>
    </>
  )
}

export function getStaticProps() {

  const welcome = getPost('./src/assets/blog/welcome.md')
  
  return {
    props: { welcome }
  }
}


