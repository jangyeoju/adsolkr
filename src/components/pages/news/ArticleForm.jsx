'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select';
import { TextArea } from '@/components/ui/TextArea';
import ImageUploader from '@/components/common/ImageUploader';

const categoryOptions = [
  { key: 0, value: 'News' },
  { key: 1, value: 'Document' },
  { key: 2, value: 'Reference' },
];

const ArticleForm = ({ initialValue, onSubmit }) => {
  const router = useRouter();
  const [title, setTitle] = useState(initialValue?.title ?? '');
  const [description, setDescription] = useState(
    initialValue?.description ?? ''
  );
  const [category, setCategory] = useState(
    initialValue?.category ?? categoryOptions[0].key
  );
  const [thumbnailImage, setThumbnailImage] = useState(
    initialValue?.thumbnailUrl && {
      src: initialValue.thumbnailUrl,
      promise: Promise.resolve({
        publicUrl: initialValue.thumbnailUrl,
      }),
    }
  );

  const [detailImages, setDetailImages] = useState(
    initialValue?.detailImageUrls?.map((src) => ({
      src,
      promise: Promise.resolve({
        publicUrl: src,
      }),
    })) ?? []
  );

  const [order, setOrder] = useState(initialValue?.order ?? 0);

  const [isSubmitting, setIsSubmitting] = useState(false);
  async function handleSubmit() {
    setIsSubmitting(true);
    try {
      const [thumbnailUrl, ...detailImageUrls] = (
        await Promise.all([
          thumbnailImage.promise,
          ...detailImages.map((image) => image.promise),
        ])
      ).map((image) => image.publicUrl);

      await onSubmit?.({
        title,
        category,
        description,
        thumbnail_url: thumbnailUrl,
        detail_image_urls: detailImageUrls,
        order,
      });
    } catch {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="space-y-8">
      <FormFieldItem label="제목">
        <Input value={title} onChange={(e) => setTitle(e.target.value)} />
      </FormFieldItem>
      <FormFieldItem label="카테고리">
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={0}>News</SelectItem>
            <SelectItem value={1}>Document</SelectItem>
            <SelectItem value={2}>Reference</SelectItem>
          </SelectContent>
        </Select>
      </FormFieldItem>
      <FormFieldItem label="썸네일 이미지">
        <ImageUploader
          maxLength={1}
          images={thumbnailImage ? [thumbnailImage] : []}
          onChange={([image]) => setThumbnailImage(image)}
          onDelete={() => setThumbnailImage(undefined)}
        />
      </FormFieldItem>
      <FormFieldItem label="상세 이미지">
        <ImageUploader
          maxLength={5}
          images={detailImages}
          onChange={setDetailImages}
          onDelete={(index) =>
            setDetailImages((images) => images.filter((_, i) => i !== index))
          }
        />
      </FormFieldItem>
      <FormFieldItem label="설명">
        <TextArea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </FormFieldItem>
      <FormFieldItem label="순서">
        <Input
          type="number"
          value={order}
          onChange={(e) => setOrder(Number(e.target.value))}
        />
      </FormFieldItem>
      <div className="flex justify-end space-x-2">
        <Button
          variant="secondary"
          onClick={() => {
            router.push('/news/admin');
          }}
        >
          취소
        </Button>
        <Button
          disabled={!title.trim() || !thumbnailImage || isSubmitting}
          onClick={handleSubmit}
        >
          저장
        </Button>
      </div>
    </div>
  );
};

function FormFieldItem({ label, children }) {
  return (
    <div>
      <h2 className="mb-1 md:text-lg lg:text-xl">{label}</h2>
      {children}
    </div>
  );
}

export default ArticleForm;
