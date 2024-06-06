'use server';

import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';


export default async function onboardingAction(prevState, formData) {
    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();
    
    const { data, error } = await supabase
    .from('onboarding')
    .insert({ 
        id: user.id,
        weight: formData.get('weight'),
        age: formData.get('age'),
        height: formData.get('height'),
        gender: formData.get('genderinput'),
        sex: formData.get('sexinput'),
        ethnicity: formData.get('ethnicityinput'),
        race: formData.get('raceinput'),
        education: formData.get('educationinput'),
        prediabetic: formData.get('prediabeticinput'),
        gluctest: formData.get('glucoseinput'),
        gdm: formData.get('gdminput'),
        risktest: formData.get('risktestinput'),
        payersource: formData.get('payersourceinput'),
        enrsource: formData.get('enrsourceinput'),
        enrmot: formData.get('enrmotinput'),
        a1c: formData.get('a1c'),
        diabetes: formData.get('diabetesinput'),
        cdcrisk: formData.get('cdcriskinput'),
        score: formData.get('score'),
        history: formData.get('historyinput'),
        bp: formData.get('bpinput'),
        active: formData.get('activeinput'),
        zoom: formData.get('zoominput'),
        improve: formData.get('improveinput'),
        share: formData.get('shareinput'),
        city: formData.get('city'),
        state: formData.get('state'),
        phone: formData.get('phone'),
        sharecontact: formData.get('contact'),
        weight_goal: formData.get('weight_goal'),
     })
     .select()

     if(error) console.log(error)
     else console.log(data)

    redirect('/dashboard?form=true'); 
    
}