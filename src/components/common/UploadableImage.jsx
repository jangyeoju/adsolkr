import { useEffect, useState } from 'react';
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';

import Spinner from './Spinner';

const UploadableImage = ({ src, promise, onDelete }) => {
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    if (!promise) return;
    setIsUploading(true);
    promise.then(() => {
      setIsUploading(false);
    });
  }, [promise]);
  return (
    <div className="relative size-full">
      <Image
        src={src}
        alt={'Image'}
        className="size-full object-cover"
        sizes={100}
        fill
      />
      {isUploading && (
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-500/50">
          <Spinner />
        </div>
      )}
      {!!promise && (
        <button
          className="absolute right-1 top-1 flex size-4 items-center justify-center rounded-full bg-foreground/30 text-white hover:bg-foreground/70"
          onClick={() => {
            requestAnimationFrame(() => {
              onDelete?.();
            });
          }}
        >
          <CloseIcon fontSize="small" />
        </button>
      )}
    </div>
  );
};

export default UploadableImage;
