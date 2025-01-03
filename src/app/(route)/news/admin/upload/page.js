import ArticleCreateForm from '@/components/pages/news/ArticleCreateForm';
import NewsUploadPageWrapper from '@/components/pages/news/NewsUploadPageWrapper';

export default async function NewsCreatePage() {
  return (
    <NewsUploadPageWrapper>
      <h1>게시물 올리기</h1>
      <ArticleCreateForm />
    </NewsUploadPageWrapper>
  );
}
