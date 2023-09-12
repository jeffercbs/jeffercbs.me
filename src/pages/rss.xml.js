import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { DEV } from '@/consts';

export async function GET(context) {
  const posts = await getCollection('blog');
  return rss({
    title: 'Jeferson Estiven Barrero @jeffercbs',
    description: DEV.description,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      pubDate: post.data.created,
      link: `/blog/p/${post.slug}/`,
    })),
  });
}
