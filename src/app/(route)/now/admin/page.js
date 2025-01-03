import { createClient } from '@/lib/supabase/server';
import AwardImagesForm from '@/components/pages/now/AwardImagesForm';
import NowAdminPageWrapper from '@/components/pages/now/NowAdminPageWrapper';

export default async function NowAdminPage() {
  const supabase = await createClient();

  const {
    data: [{ value: awardImages }],
  } = await supabase.from('image_list').select('value').eq('name', 'awards');

  return (
    <NowAdminPageWrapper>
      <AwardImagesForm initialValue={{ awardImages }} />
    </NowAdminPageWrapper>
  );
}
