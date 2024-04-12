'use client';

// form for collecting user data. UseFormState connects TableAction.jsx to the form in order
// for trigger to occur once form is submitted by submit button

import { useFormState } from 'react-dom';
import classes from './page.module.css';
import tableAction from '@/lib/TableAction';

export default function LifestylePage() {
    const [state, formAction] = useFormState(tableAction, { message: null })

    return (
      <>
        <h1>Lifestyle Log</h1>
        <form action={formAction}>
          <p className={classes.paragraph}>
            Attendance: 
            <br />
            <label>
              <input name="attendance" type="radio" />
              Online
            </label>
            <br />
            <label>
              <input name="attendance" type="radio" />
              Yes
            </label>
            <br />
            <label>
              <input name="attendance" type="radio" />
              No
            </label>
          </p>
          <p className={classes.paragraph}>
            Current Weight:
            <label>
                <input name="weight" type="number" />
            </label>
          </p>
          <p className={classes.paragraph}>
            Activity Minutes for Week
            <label>
                <input name="minutes" type="number" />
            </label>
          </p>
          <p>
            <button type="submit" onSubmit={formAction}>Submit</button>
          </p>
        </form>
      </>
    );
   
}