'use server';

import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function deleter(rowId, classCode) {
    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { data, error } = await supabase
      .from("announcements")
      .delete()
      .eq("id", rowId);

    const notification = await supabase
      .from("notification_counter")
      .select()
      .eq("class_code", classCode);

    let users = [];
    notification?.data?.map((row) => {
      users.push(row.user);
    });

    for(let i = 0; i < users.length; i++) {
      const counterUpdate = await supabase
        .from("notification_counter")
        .update({ counter: notification.data[i].counter - 1 })
        .eq("user", users[i]);
    }

    // const notification_counter = await supabase
    //   .from("notification_counter")
    //   .update({ counter: notification[0].counter - 1 })
    //   .eq("user", user.id);

    redirect('?delete=true');
}