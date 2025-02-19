'use server';

import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';


export default async function tableAction(prevState, formData) {
  console.log('testing')
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
      .from("lifestyle_coach_log")
      .insert({
        current_weight: formData.get('weight'),
        attendance: attendanceTypes[index],
        created_at: formData.get("date"),
        created_at_string: formData.get("date").substring(0, 10),
        sesstype: sessionTypes[index2],
        user: user.id
      })
      .select();
    
    // const onboarding = await supabase
    //   .from("onboarding")
    //   .select()
    //   .eq("id", user.id);

    // const userclassdata = await supabase
    //   .from("profiles")
    //   .select()
    //   .eq("id", user.id);

    // const coachclassdata = await supabase
    //   .from("coach_codes")
    //   .select()
    //   .eq("code", userclassdata.data[0].class_codes);

    // let aian;
    // let asian;
    // let black;
    // let nhopi;
    // let white;

    // if (onboarding.data[0].race.substring(0, 1) === "5") {
    //   aian = 1;
    //   asian = 2;
    //   black = 2;
    //   nhopi = 2;
    //   white = 2;
    // } else if (onboarding.data[0].race.substring(0, 1) === "1") {
    //   asian = 1;
    //   aian = 2;
    //   black = 2;
    //   nhopi = 2;
    //   white = 2;
    // } else if (onboarding.data[0].race.substring(0, 1) === "2") {
    //   black = 1;
    //   aian = 2;
    //   asian = 2;
    //   nhopi = 2;
    //   white = 2;
    // } else if (onboarding.data[0].race.substring(0, 1) === "3") {
    //   nhopi = 1;
    //   aian = 2;
    //   asian = 2;
    //   black = 2;
    //   white = 2;
    // } else if (onboarding.data[0].race.substring(0, 1) === "4") {
    //   white = 1;
    //   aian = 2;
    //   asian = 2;
    //   black = 2;
    //   nhopi = 2;
    // }

    // const cdcdata = await supabase
    //   .from("cdcdata")
    //   .insert({
    //     id: user.id,
    //     ORGCODE: coachclassdata.data[0].orgcode,
    //     PARTICIP: user.id.replaceAll("-", "").substring(0, 25),
    //     COHORTID: coachclassdata.data[0].cohortid,
    //     COACHID: coachclassdata.data[0].coachid,
    //     ENROLLMOT: onboarding.data[0].enrmot.substring(0, 1),
    //     ENROLLHC: onboarding.data[0].enrsource.substring(0, 1),
    //     PAYERSOURCE: onboarding.data[0].payersource.substring(0, 1),
    //     STATE: onboarding.data[0].state,
    //     GLUCTEST: onboarding.data[0].gluctest.substring(0, 1),
    //     A1C: onboarding.data[0].a1c,
    //     GDM: onboarding.data[0].gdm.substring(0, 1),
    //     RISKTEST: onboarding.data[0].risktest.substring(0, 1),
    //     AGE: onboarding.data[0].age,
    //     ETHNIC: onboarding.data[0].ethnicity.substring(0, 1),
    //     AIAN: aian,
    //     ASIAN: asian,
    //     BLACK: black,
    //     NHOPI: nhopi,
    //     WHITE: white,
    //     SEX: onboarding.data[0].sex.substring(0, 1),
    //     GENDER: onboarding.data[0].gender.substring(0, 1),
    //     HEIGHT: onboarding.data[0].height,
    //     EDU: onboarding.data[0].education.substring(0, 1),
    //     DMODE: formData.get("attendance").substring(0, 1),
    //     SESSTYPE: formData.get("sesstype").substring(0, 2),
    //     DATE: formData.get("date"),
    //     WEIGHT: formData.get("weight"),
    //     PA: formData.get("minutesshown").substring(32),
    //     class_code: userclassdata.data[0].class_codes,
    //   })
    //   .select();

    // console.log(cdcdata.error);

    console.log(error);

    redirect('/dashboard/coachlog?add=true'); 
    
    
}