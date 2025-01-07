import { createClient } from '@/lib/supabase/client';

import NowPageView from './NowPageView';

export const dynamic = 'force-dynamic';

export default async function NowPage() {
  const supabase = await createClient();

  const {
    data: [{ value: awardImages }],
  } = await supabase.from('image_list').select('value').eq('name', 'awards');

  return <NowPageView awardImages={awardImages} />;
}
