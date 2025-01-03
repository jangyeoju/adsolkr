import { hashCode } from '../utils';
import { createClient } from './client';

export async function uploadImage(file) {
  const supabase = createClient();

  const { data } = await supabase.storage
    .from('images')
    .upload(`${Math.abs(hashCode(file.name))}${Date.now()}`, file);

  const {
    data: { publicUrl },
  } = supabase.storage.from('images').getPublicUrl(data.path);

  return {
    ...data,
    publicUrl,
  };
}
