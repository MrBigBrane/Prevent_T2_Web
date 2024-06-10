'use server';

import SettingsForm from "@/components/forms/coaching/settings/SettingsForm";
import { createClient } from '@/utils/supabase/server';
import MuiSuccess from '@/components/buttons/alerts/MuiSuccess'

export default async function Settings({ searchParams, params }) {
    const supabase = createClient();

    const { data, error } = await supabase
    .from('coach_codes')
     .select()
     .eq('code', params.slug.substring(0, 6))

     console.log(data)

    return (
      <>
        {searchParams?.edit && (
          <MuiSuccess severity="success">Successfully edited!</MuiSuccess>
        )}
        <SettingsForm data={data[0]}>Class Settings</SettingsForm>
      </>
    );
}