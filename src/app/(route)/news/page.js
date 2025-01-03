import * as React from 'react';

import ArticleList from '@/components/pages/news/ArticleList';
import NewsPageTemplate from '@/components/pages/news/NewsPageTemplate';

export default function NewsPage() {
  return (
    <NewsPageTemplate
      newsList={<ArticleList category={0} />}
      documentList={<ArticleList category={1} />}
      referenceList={<ArticleList category={2} />}
    />
  );
}
