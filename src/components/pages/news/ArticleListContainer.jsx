'use client';

import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

import { useArticlesContext } from '@/contexts/ArticlesContext';

import ArticleItem from './ArticleItem';

const ArticleListContainer = ({ editable }) => {
  const { articles } = useArticlesContext();

  return (
    <>
      <div className="grid w-full grid-cols-auto-fill-270 gap-4">
        {articles.map((article, id) => (
          <ArticleItem
            id={article.id}
            key={id}
            title={article.title}
            img={article.thumbnail_url}
            description={article.description}
            detailImages={article.detail_image_urls}
            editable={editable}
          />
        ))}
      </div>
      {!articles.length && (
        <div className="flex w-full flex-col items-center justify-center gap-2 p-10 text-gray-400">
          <InsertDriveFileIcon fontSize="inherit" className="text-3xl" />
          <div className="text-lg">There are no data</div>
        </div>
      )}
    </>
  );
};

export default ArticleListContainer;
