'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { createClient } from '@/lib/supabase/client';
import { Button } from '@/components/ui/Button';
import ImageUploader from '@/components/common/ImageUploader';

const AwardImagesForm = ({ initialValue }) => {
  const router = useRouter();
  const supabase = createClient();

  const [awardImages, setAwardImages] = useState(
    initialValue?.awardImages?.map((src) => ({
      src,
      promise: Promise.resolve({
        publicUrl: src,
      }),
    })) ?? []
  );

  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div>
      <h1>수상 인증 슬라이드 이미지 업로드</h1>
      <ImageUploader
        maxLength={30}
        images={awardImages}
        onChange={setAwardImages}
        onDelete={(index) =>
          setAwardImages((images) => images.filter((_, i) => i !== index))
        }
      />
      <div className="mt-4 flex gap-2">
        <Button
          disabled={!awardImages.length}
          onClick={async () => {
            if (!awardImages.length || isSubmitting) return;
            setIsSubmitting(true);

            try {
              const urls = (
                await Promise.all(awardImages.map((image) => image.promise))
              ).map((image) => image.publicUrl);

              await supabase
                .from('image_list')
                .update({
                  value: urls,
                })
                .eq('name', 'awards');

              router.push('/now');
            } catch {
              setIsSubmitting(false);
            }
          }}
        >
          저장
        </Button>
        <Link href="/now">
          <Button variant="secondary">취소</Button>
        </Link>
      </div>
    </div>
  );
};

export default AwardImagesForm;
