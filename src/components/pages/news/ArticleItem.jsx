'use client';

import { useState } from 'react';

import NewsBox from '@/components/common/NewsBox';
import BasicModal from '@/components/modal/BasicModal';

const ArticleItem = ({
  id,
  img,
  title,
  description,
  detailImages,
  editable,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <NewsBox
        id={id}
        img={img}
        title={title}
        onClick={() => setOpen(true)}
        edit={editable}
      />
      <BasicModal
        open={open}
        text={title}
        description={description}
        img={img}
        detailImages={detailImages}
        handleClose={() => setOpen(false)}
      />
    </>
  );
};

export default ArticleItem;
