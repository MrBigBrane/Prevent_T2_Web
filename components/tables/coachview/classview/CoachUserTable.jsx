'use server';

import UsersTable from './UsersTable'
import weightCreator from '../../../serverfunctions/coach/coachview/weightPerWeek'
import minutesPerWeek from '../../../serverfunctions/coach/coachview/minutesPerWeek'
import fetchUserData from '../../../serverfunctions/coach/coachview/fetchUserData'

import { createClient } from '@/utils/supabase/server';
import MuiButton from '@/components/buttons/MuiButton';
import { Button } from '@mui/material';

export default async function CoachUserTable({ code }) {
    const supabase = createClient();

    const { data, error } = await supabase
      .from('profiles')
      // try with {} if doesn't work without
      .select()
      .eq('class_codes', code)
      .order('joined_class_at', { ascending: true });

      
    
    

    let users = []

    data.map((row) => {
        users.push(row.id);
    })
    for(let i = 0; i < users.length; i++){
        let minutesData = Array.from(await minutesPerWeek(users[i]))
        let weightData = Array.from(await weightCreator(users[i]))
        let userHeight = Object.assign({}, await fetchUserData('profiles', 'height', users[i]))

        if(minutesData[0][minutesData.length - 2]){
            data[i].minutes = minutesData[0][minutesData[0].length - 2]
        }
        else{
            data[i].minutes = 0;
        }
        if(weightData[0][weightData[0].length - 2] && userHeight[0]){
                data[i].bmi = Math.round(703 * weightData[0][weightData[0].length - 2]  / (userHeight[0].height * userHeight[0].height) * 10) / 10
            
            console.log(data[i].bmi)
        }
        else{
            data[i].bmi = 'N/A'
        }
        
    }


    return (
        <>
            <Button variant="contained" onClick={() => window.location.reload()}>Refresh</Button>
            <UsersTable data={data}/>
        </>
    )
}