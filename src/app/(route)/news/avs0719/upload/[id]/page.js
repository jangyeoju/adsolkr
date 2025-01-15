import { createClient } from '@/lib/supabase/server';
import ArticleEditForm from '@/components/pages/news/ArticleEditForm';
import NewsUploadPageWrapper from '@/components/pages/news/NewsUploadPageWrapper';

export default async function NewsUploadPage({ params }) {
  const { id } = await params;

  const supabase = await createClient();
  const {
    data: [article],
  } = await supabase.from('articles_kr').select().eq('id', id);

  return (
    <NewsUploadPageWrapper>
      <h1>게시물 수정</h1>
      <ArticleEditForm
        article={{
          ...article,
          thumbnailUrl: article.thumbnail_url,
          detailImageUrls: article.detail_image_urls,
        }}
      />
    </NewsUploadPageWrapper>
  );
}
