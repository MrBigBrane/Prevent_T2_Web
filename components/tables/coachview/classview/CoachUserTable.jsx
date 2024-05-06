'use server';

import UsersTable from './UsersTable'
import weightCreator from '../../../serverfunctions/coach/coachview/weightPerWeek'
import minutesPerWeek from '../../../serverfunctions/coach/coachview/minutesPerWeek'

import { createClient } from '@/utils/supabase/server';

export default async function CoachUserTable({ code }) {
    const supabase = createClient();

    const { data, error } = await supabase
      .from('profiles')
      // try with {} if doesn't work without
      .select()
      .eq('class_codes', code)
      .order('created_at', { ascending: true });
    
    

    let users = []

    data.map((row) => {
        users.push(row.id);
    })
    for(let i = 0; i < users.length; i++){
        let minutesData = Array.from(await minutesPerWeek(users[i]))
        let weightData = Array.from(await weightCreator(users[i]))

        if(minutesData[0][minutesData.length - 2]){
            data[i].minutes = minutesData[0][minutesData[0].length - 2]
        }
        else{
            data[i].minutes = 0;
        }
        if(weightData[0][weightData[0].length - 2]){
                data[i].bmi = weightData[0][weightData[0].length - 2]  
            
            
        }
        else{
            data[i].bmi = 'N/A'
        }
        
    }


    return (
        <>
            <UsersTable data={data}/>
        </>
    )
}