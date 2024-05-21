'use client';

import MuiButton from "@/components/buttons/MuiButton";
import createAnnouncement from '@/lib/coach/announcements/createAnnouncement'
import MuiTextArea from '@/components/inputs/MuiTextArea'
import MuiTextField from '@/components/inputs/MuiTextField'
import { useFormState } from "react-dom";

export default function AddClassCoach({ click, code }) {
    const [state, formAction] = useFormState(createAnnouncement, { message: null })

    console.log({code});
    return (
      <form id="announcementForm" name="announcementForm" action={formAction}>
        <MuiTextField
          id="title"
          label="Title"
          variant="outlined"
          name="title"
          defaultValue=""
          type="text"
          required
        />
        <MuiTextArea
          type="text"
          required
          id="announcement"
          label="Announcement"
          variant="outlined"
          name="announcement"
          defaultValue=""
        />
        <MuiTextField
          id="class_code"
          label=""
          variant="filled"
          name="class_code"
          defaultValue={code}
          type="hidden"
        />
        <br />
        <MuiButton
          click={click}
          type="submit"
          startIcon={null}
          label="Post Announcement"
        />
      </form>
    );
}