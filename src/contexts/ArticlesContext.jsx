'use client';

import { createContext, useContext, useState } from 'react';

import { createClient } from '@/lib/supabase/client';

const ArticlesContext = createContext(null);

export const ArticlesContextProvider = ({ articles, children }) => {
  const supabase = createClient();
  const [articleList, setArticleList] = useState(articles);

  async function removeArticle(id) {
    await supabase.from('articles_kr').delete().eq('id', id);

    setArticleList((articles) =>
      articles.filter((article) => article.id !== id)
    );
  }

  return (
    <ArticlesContext.Provider
      value={{
        articles: articleList,
        removeArticle,
      }}
    >
      {children}
    </ArticlesContext.Provider>
  );
};

export const useArticlesContext = () => useContext(ArticlesContext);
