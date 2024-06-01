'use client';

import MuiButton from "@/components/buttons/MuiButton";
import createAnnouncement from '@/lib/coach/announcements/createAnnouncement'
import editAnnouncement from '@/lib/coach/announcements/editAnnouncement'
import MuiTextArea from '@/components/inputs/MuiTextArea'
import MuiTextField from '@/components/inputs/MuiTextField'
import { useFormState } from "react-dom";

export default function AddAnnouncement({ click, code, title, announcement, rowId }) {
    const [state, formAction] = useFormState(rowId ? editAnnouncement : createAnnouncement, { message: null })

    console.log({code});
    return (
      <form id="announcementForm" name="announcementForm" action={formAction}>

        <MuiTextField
          id="title"
          label="Title"
          variant="outlined"
          name="title"
          defaultValue={title ? title : null}
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
          defaultValue={announcement ? announcement : null}
        />
        <MuiTextField
          id="class_code"
          label=""
          variant="filled"
          name="class_code"
          defaultValue={code}
          type="hidden"
        />
        <MuiTextField
          id="rowId"
          label=""
          variant="filled"
          name="rowId"
          defaultValue={rowId}
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