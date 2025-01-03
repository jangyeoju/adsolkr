import { useState } from 'react';

import { createClient } from '@/lib/supabase/client';

export const useImageUpload = () => {
  const [uploadPromise, setUploadPromises] = useState(null);
  let promise = null;
  async function uploadImages(files) {
    const supabase = createClient();

    const promises = Promise.all(
      files.map((file) =>
        supabase.storage.from('images').upload(file.name, file)
      )
    );

    setUploadPromises(promise);
  }

  return {};
};
