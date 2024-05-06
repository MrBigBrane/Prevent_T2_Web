'use server';

import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';


export default async function onboardingAction(prevState, formData) {
    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();
    
    const { data, error } = await supabase
    .from('user_profiles')
    .insert({ 
        user: user.id,
        weight: formData.get('weight'),
        age: formData.get('age'),
        height: formData.get('height'),
        gender: formData.get('genderinput'),
        a1c: formData.get('a1c'),
        diabetes: formData.get('diabetesinput'),
        cdcrisk: formData.get('cdcrisk'),
        score: formData.get('score'),
        history: formData.get('historyinput'),
        bp: formData.get('bpinput'),
        active: formData.get('activeinput'),
        zoom: formData.get('zoom'),
        improve: formData.get('improve'),
        share: formData.get('share'),
        city: formData.get('city'),
        state: formData.get('state'),
        phone: formData.get('phone'),
        sharecontact: formData.get('contact')
     })
     .select()

     if(error) console.log(error)
     else console.log(data)

    redirect('/dashboard?form=true'); 
    
}