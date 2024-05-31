'use client';

import { useFormState } from "react-dom"
import MuiButton from '../../buttons/MuiButton'
import MuiSelect from '../../inputs/MuiSelect'
import LinkButton from "@/components/buttons/LinkButton";
import onboardingAction from '@/lib/onboarding/onboardingAction'
import { useState } from "react";

//         // Age, Weight, A1C, CDC Risk Assessment?, Gender, IF woman gestational diabetes?, relative with diabetes, 
// //                 high bp, active?, zoom class, committed to improve, 
// //                 phone num, 26 zoom classes or 45 min vid, city and state, NRIVA sharing weight, 
// //                 join whatsapp, height, score on cdc risk assessment

export default function EmailReset() {
    const [state, formAction] = useFormState(onboardingAction, { message: null }) 
    const [section1, setSection1] = useState('')
    const [section2, setSection2] = useState('hidden')
    const [section3, setSection3] = useState('hidden')
    const [section4, setSection4] = useState('hidden')

    return (
      <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center">
        <h1>
          Onboarding Questionnaire. Please fill this out to be considered for
          NRIVA DPP.
        </h1>
        <form
          action={formAction}
          className="animate-in flex-1 flex flex-col w-full text-foreground"
        >
          {/* {search?.section1 && (
            <> */}
          <label className="text-md" htmlFor="email" hidden={section1 === "hidden" ? true : false}>
            Age
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            name="age"
            required
            type={section1}
          />
          <label className="text-md" htmlFor="email" hidden={section1 === "hidden" ? true : false}>
            Weight in <b>LBS or Pounds</b>
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            name="weight"
            required
            type={section1}
          />
          <label className="text-md" htmlFor="email" hidden={section1 === "hidden" ? true : false}>
            What is your weight goal in <b>LBS or Pounds</b> for the end of this session?
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            name="weight_goal"
            required
            type={section1}
          />
          <label className="text-md" htmlFor="email" hidden={section1 === "hidden" ? true : false}>
            Height in <b>INCHES</b>
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            name="height"
            required
            type={section1}
          />

          <label className="text-md" htmlFor="email" hidden={section1 === "hidden" ? true : false}>
            Gender
          </label>
          <MuiSelect
            field="Gender"
            name="gender"
            field1="Male"
            field2="Female"
            field3="Other"
            required={true}
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            hidden={section1}
            color="success"
          />
          {section1 === "" ? 
          <MuiButton
            label="Next"
            click={() => {
              setSection1("hidden");
              setSection2("");
            }}
            color="success"
          /> : null
        }
          

          {/* Health questions */}
          <label className="text-md" htmlFor="email" hidden={section2 === "hidden" ? true : false}>
            What is your A1C Level in <b>PERCENTAGE</b>?
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            name="a1c"
            required
            type={section2}
          />
          {/* If woman */}
          <label className="text-md" htmlFor="email" hidden={section2 === "hidden" ? true : false}>
            If you are a woman, have you had gestational diabetes?
          </label>
          <MuiSelect
            field="Diabetes"
            name="diabetes"
            field1="Yes"
            field2="No"
            field3="N/A"
            required={true}
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            hidden={section2}
            color="success"
          />
          {/*  */}
          <label className="text-md" htmlFor="email" hidden={section2 === "hidden" ? true : false}>
            Have You Taken the CDC Risk Assessment Test?
          </label>
          <MuiSelect
            field="CDC Risk Test?"
            name="cdcrisk"
            field1="Yes"
            field2="No"
            field3="Don't Know"
            required={true}
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            hidden={section2}
            color="success"
          />
          {/* If yes */}
          <label className="text-md" htmlFor="email" hidden={section2 === "hidden" ? true : false}>
            If so, what was your score?
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            name="score"
            type={section2}
          />
          {/*  */}
          <label className="text-md" htmlFor="email" hidden={section2 === "hidden" ? true : false}>
            Do you have a family history of diabetes
          </label>
          <MuiSelect
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            name="history"
            field="Family History"
            field1="Yes"
            field2="No"
            field3="Don't Know"
            required={true}
            hidden={section2}
            color="success"
          />
          <label className="text-md" htmlFor="email" hidden={section2 === "hidden" ? true : false}>
            Do you have high blood pressure?
          </label>
          <MuiSelect
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            name="bp"
            field="High BP?"
            field1="Yes"
            field2="No"
            field3="Don't Know"
            required={true}
            hidden={section2}
            color="success"
          />
          <label
            className="text-md"
            htmlFor="email"
            hidden={section2 === "hidden" ? true : false}
          >
            Do you consider yourself active? &#40;At least 150 minutes per
            week&#41;
          </label>
          
            <MuiSelect
                className="rounded-md px-4 py-2 bg-inherit border mb-6"
                name="active"
                field="Active?"
                field1="Yes"
                field2="No"
                field3="Don't Know"
                required={true}
                hidden={section2}
                color="success"
            />
          {section2 === "" ? 
          <MuiButton
            label="Back"
            click={() => {
              setSection2("hidden");
              setSection1("");
            }}
            color="success"
            style={{ marginBottom: "8px" }}
          /> : null
        }
          {section2 === "" ? 
          <MuiButton
            label="Next"
            click={() => {
              setSection2("hidden");
              setSection3("");
            }}
            color="success"
          /> : null
        }

          <label className="text-md" htmlFor="email" hidden={section3 === "hidden" ? true : false}>
            Will you be able to attend zoom classes or watch videos?
          </label>
          <MuiSelect
            field="Zoom classes?"
            name="zoom"
            field1="Yes"
            field2="No"
            field3="Don't Know"
            required={true}
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            hidden={section3}
            color="success"
          />
          <label className="text-md" htmlFor="email" hidden={section3 === "hidden" ? true : false}>
            Are you committed to improving?
          </label>
          <MuiSelect
            field="Committed to improving?"
            name="improve"
            field1="Yes"
            field2="No"
            field3="Don't Know"
            required={true}
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            hidden={section3}
            color="success"
          />
          <label className="text-md" htmlFor="email" hidden={section3 === "hidden" ? true : false}>
            Do you allow NRIVA to share your weight confidentially with the CDC?
          </label>
          <MuiSelect
            field="Share Weight?"
            name="share"
            field1="Yes"
            field2="No"
            field3="Don't Know"
            required={true}
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            hidden={section3}
            color="success"
          />
          {section3 === "" ? 
          <MuiButton
            label="Back"
            click={() => {
              setSection3("hidden");
              setSection2("");
            }}
            color="success"
            style={{ marginBottom: "8px" }}
          /> : null
        }
          {section3 === "" ? 
          <MuiButton
            label="Next"
            click={() => {
              setSection3("hidden");
              setSection4("");
            }}
            color="success"
          /> : null
        }

          <label className="text-md" htmlFor="email" hidden={section4 === "hidden" ? true : false}>
            City
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            name="city"
            type={section4}
            required
          />
          <label className="text-md" htmlFor="email" hidden={section4 === "hidden" ? true : false}>
            State
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            name="state"
            type={section4}
            required
          />
          <label className="text-md" htmlFor="email" hidden={section4 === "hidden" ? true : false}>
            Phone Number
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            name="phone"
            type={section4}
            required
          />
          <label className="text-md" htmlFor="email" hidden={section4 === "hidden" ? true : false}>
            Can we contact you through WhatsApp?
          </label>
          <MuiSelect
            field="WhatsApp?"
            name="contact"
            field1="Yes"
            field2="No"
            field3="Don't Know"
            required={true}
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            hidden={section4}
            color="success"
          />
        {section4 === "" ? 
          <MuiButton
            label="Back"
            click={() => {
              setSection4("hidden");
              setSection3("");
            }}
            color="success"
            style={{ marginBottom: "8px" }}
          /> : null
        }
          {section4 === "" ?
          <MuiButton
            startIcon={null}
            label="Submit"
            type="submit"
            color="success"
          /> : null}
        </form>
      </div>
    );
}