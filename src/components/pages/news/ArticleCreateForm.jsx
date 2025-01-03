'use client';

import { useRouter } from 'next/navigation';

import { createClient } from '@/lib/supabase/client';

import ArticleForm from './ArticleForm';

const ArticleCreateForm = () => {
  const router = useRouter();
  const supabase = createClient();

  return (
    <ArticleForm
      onSubmit={async (data) => {
        await supabase.from('articles_kr').insert(data);
        router.push('/news/admin');
      }}
    />
  );
};

export default ArticleCreateForm;
