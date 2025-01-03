import { createClient } from '@/lib/supabase/server';
import { ArticlesContextProvider } from '@/contexts/ArticlesContext';

import ArticleListContainer from './ArticleListContainer';

const ArticleList = async ({ category, editable }) => {
  const supabase = await createClient();
  const { data: articles } = await supabase
    .from('articles_kr')
    .select()
    .eq('category', category)
    .order('id', { ascending: true })
    .order('order', { ascending: true });

  return (
    <ArticlesContextProvider articles={articles}>
      <ArticleListContainer editable={editable} />
    </ArticlesContextProvider>
  );
};

export default ArticleList;
