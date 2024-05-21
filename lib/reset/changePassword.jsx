'use server';

import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';


export default async function tableAction(prevState, formData) {
    const supabase = createClient();

    if(formData.get('newpassword') === formData.get('newpassword1')){
      const { data, error } = await supabase.auth.updateUser({
        password: formData.get("newpassword"),
      });

      if (!error) {
        redirect("/profile/settings?passwordreset=true");
      } else {
        redirect("/profile/settings?passwordnotreset=true");
      }
    }
    else{
        redirect("/profile/settings?passwordnotreset=true");
    }
    
    
}