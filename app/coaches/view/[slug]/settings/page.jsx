'use server';

import SettingsForm from "@/components/forms/coaching/settings/SettingsForm";
import { createClient } from '@/utils/supabase/server';
import MuiSuccess from '@/components/buttons/alerts/MuiSuccess'
import { AspectRatio, ImageAspectRatio } from "@mui/icons-material";
import Image from "next/image";
import { Box } from "@mui/material";

export default async function Settings({ searchParams, params }) {
    const supabase = createClient();

    const { data, error } = await supabase
    .from('coach_codes')
     .select()
     .eq('code', params.slug.substring(0, 6))

     console.log(data)

     const publicURL = await supabase.storage
     .from("class_backgrounds")
     .getPublicUrl(data[0].background_picture_path);
    const avatarPath = publicURL.data.publicUrl;

    return (
      <>
        {searchParams?.edit && (
          <MuiSuccess severity="success">Successfully edited!</MuiSuccess>
        )}

        <SettingsForm data={data[0]} image={avatarPath}>Class Settings</SettingsForm>
      </>
    );
}