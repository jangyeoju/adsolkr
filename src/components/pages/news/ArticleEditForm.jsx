'use client';

import { useRouter } from 'next/navigation';

import { createClient } from '@/lib/supabase/client';

import ArticleForm from './ArticleForm';

const ArticleEditForm = ({ article }) => {
  const router = useRouter();
  const supabase = createClient();

  return (
    <ArticleForm
      initialValue={article}
      onSubmit={async (data) => {
        await supabase.from('articles_kr').update(data).eq('id', article.id);
        router.push('/news/admin');
      }}
    />
  );
};

export default ArticleEditForm;
