import * as React from 'react';
import Link from 'next/link';
import AddIcon from '@mui/icons-material/Add';

import { Button } from '@/components/ui/Button';
import ArticleList from '@/components/pages/news/ArticleList';
import NewsPageTemplate from '@/components/pages/news/NewsPageTemplate';

export default function NewsPage() {
  return (
    <>
      <NewsPageTemplate
        header={
          <Link href="/news/admin/upload">
            <Button className="mt-10 w-full" size="lg">
              <AddIcon />
              게시물 올리기
            </Button>
          </Link>
        }
        newsList={<ArticleList category={0} editable />}
        documentList={<ArticleList category={1} editable />}
        referenceList={<ArticleList category={2} editable />}
      />
    </>
  );
}
