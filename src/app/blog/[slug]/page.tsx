import './style.scss';
import { contentfulClient } from "@/contentful"
import dayjs from 'dayjs';
import Markdown from "react-markdown";
import rehypeHighlight from 'rehype-highlight';
import Keywords from './components/keywords';

interface BlogPageProps {
  params: {
    slug: string
  } 
}

export default async function BlogPage ({params}: BlogPageProps) {
  const contentfulResponse = await contentfulClient.getEntries({
    content_type: 'blogPost',
    'fields.slug': params.slug,
  })
  const [blogEntry] = contentfulResponse.items;
  
  console.log(blogEntry)
  return (
    <div>
      <div className='mb-4'>
        <h1 className='text-5xl font-bold mb-4'>{blogEntry.fields.title}</h1>
        <Keywords keywords={blogEntry.fields.keywords} />
        <div className='text-sm text-gray-500 mb-2'>Benedict Benida</div>
        <div className='text-sm text-gray-500'>5 min read · {`${dayjs(blogEntry.sys.createdAt).format('MMM DD, YYYY')}`}</div>
      </div>
      <hr className='my-5' />
      <div className='blog-markdown'>
        <Markdown rehypePlugins={[rehypeHighlight]}>{blogEntry.fields.body}</Markdown>
      </div>
    </div>
  )
}