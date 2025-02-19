'use server';

import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';


export default async function tableAction(prevState, formData) {
    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    const attendanceTypes = [
      { icon: "human-handsdown", title: "1 In-Person" },
      { icon: "laptop", title: "2 Online" },
      { icon: "close-box", title: "3 None" },
    ];

    const sessionTypes = [
      { icon: "google-classroom", title: "C Core Session" },
      { icon: "account-wrench", title: "CM Core Maintenance Session" },
      { icon: "account-wrench", title: "OM Ongoing Maintenance Session" },
      { icon: "google-classroom", title: "MU-C Make Up Session in Core Phase" },
      { icon: "account-wrench", title: "MU-OM Make Up Session in Ongoing Phase" },
      { icon: "account-wrench", title: "MU-CM Make Up Session in Core Maintenance Phase" },
    ];

    const attendance = ["1 In-Person", "2 Online", "3 None"]
    const session = ["C Core Session", "CM Core Maintenance Session", "OM Ongoing Maintenance Session", "MU-C Make Up Session in Core Phase", "MU-OM Make Up Session in Ongoing Phase", "MU-CM Make Up Session in Core Maintenance Phase"]

    const index = attendance.indexOf(formData.get('attendance'))
    const index2 = session.indexOf(formData.get('sesstype'))
    
    const { data, error } = await supabase
    .from('lifestyle_coach_log')
    .update({
        current_weight: formData.get('weight'),
        attendance: attendanceTypes[index],
        sesstype: sessionTypes[index2],
        user: user.id
     })
     .select()
     .eq('id', formData.get('rowIdinput'))

     if(error) console.log(error)

    redirect('/dashboard/coachlog?edit=true'); 
    
}