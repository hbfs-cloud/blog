import { getCollection } from 'astro:content';

const collectionNames = ['family','fatima','yassine','soufiane','youssouf','salma','veille','reputation','business','retrospectives','review-strategy'];

export async function GET() {
  let allPosts: any[] = [];
  for (const name of collectionNames) {
    try {
      const posts = await getCollection(name as any, ({ data }: any) => !data.draft);
      allPosts.push(...posts.map((p: any) => ({
        title: p.data.title,
        description: p.data.description || '',
        category: name,
        tags: p.data.tags || [],
        href: `/${name}/${p.id}/`,
        date: p.data.date,
      })));
    } catch (e) {}
  }
  return new Response(JSON.stringify(allPosts), {
    headers: { 'Content-Type': 'application/json' }
  });
}
