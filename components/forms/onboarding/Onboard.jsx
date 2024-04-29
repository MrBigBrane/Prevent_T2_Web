'use client';

import { useFormState } from "react-dom"
import MuiButton from '../../buttons/MuiButton'

//         // Age, Weight, A1C, CDC Risk Assessment?, Gender, IF woman gestational diabetes?, relative with diabetes, 
// //                 high bp, active?, zoom class, committed to improve, 
// //                 phone num, 26 zoom classes or 45 min vid, city and state, NRIVA sharing weight, 
// //                 join whatsapp, height, score on cdc risk assessment

export default function EmailReset() {
    const [state, formAction] = useFormState({ message: null }) 

    return (
        <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
            <h1>Onboarding Questionnaire. Please fill this out to be considered for NRIVA DPP.</h1>
            <form action={formAction} className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground">
                <label className="text-md" htmlFor="email">
                    Age
                </label>
                <input
                className="rounded-md px-4 py-2 bg-inherit border mb-6"
                name="email"
                required
                />
                <label className="text-md" htmlFor="email">
                    Weight
                </label>
                <input
                className="rounded-md px-4 py-2 bg-inherit border mb-6"
                name="email"
                required
                />
                <label className="text-md" htmlFor="email">
                    Height
                </label>
                <input
                className="rounded-md px-4 py-2 bg-inherit border mb-6"
                name="email"
                required
                />
                <label className="text-md" htmlFor="email">
                    Gender
                </label>
                <input
                className="rounded-md px-4 py-2 bg-inherit border mb-6"
                name="email"
                required
                />

                {/* Health questions */}
                <label className="text-md" htmlFor="email">
                    What is your A1C Level?
                </label>
                <input
                className="rounded-md px-4 py-2 bg-inherit border mb-6"
                name="email"
                required
                />
                {/* If woman */}
                <label className="text-md" htmlFor="email">
                    Have you had gestational diabetes?
                </label>
                <input
                className="rounded-md px-4 py-2 bg-inherit border mb-6"
                name="email"
                required
                />
                {/*  */}
                <label className="text-md" htmlFor="email">
                Have You Taken the CDC Risk Assessment Test?
                </label>
                <input
                className="rounded-md px-4 py-2 bg-inherit border mb-6"
                name="email"
                required
                />
                {/* If yes */}
                <label className="text-md" htmlFor="email">
                    What was your score?
                </label>
                <input
                className="rounded-md px-4 py-2 bg-inherit border mb-6"
                name="email"
                required
                />
                {/*  */}
                <label className="text-md" htmlFor="email">
                Do you have a family history of diabetes
                </label>
                <input
                className="rounded-md px-4 py-2 bg-inherit border mb-6"
                name="email"
                required
                />
                <label className="text-md" htmlFor="email">
                Do you have high blood pressure?
                </label>
                <input
                className="rounded-md px-4 py-2 bg-inherit border mb-6"
                name="email"
                required
                />
                <label className="text-md" htmlFor="email">
                Do you consider yourself active?
                </label>
                <input
                className="rounded-md px-4 py-2 bg-inherit border mb-6"
                name="email"
                required
                />

                {/* Program specific */}
                <label className="text-md" htmlFor="email">
                    Will you be able to attend zoom classes or watch videos?
                </label>
                <input
                className="rounded-md px-4 py-2 bg-inherit border mb-6"
                name="email"
                required
                />
                <label className="text-md" htmlFor="email">
                Are you committed to improving?
                </label>
                <input
                className="rounded-md px-4 py-2 bg-inherit border mb-6"
                name="email"
                required
                />
                <label className="text-md" htmlFor="email">
                Do you allow NRIVA to share your weight confidentially with the CDC?
                </label>
                <input
                className="rounded-md px-4 py-2 bg-inherit border mb-6"
                name="email"
                required
                />

                {/* Contact info */}
                <label className="text-md" htmlFor="email">
                    City
                </label>
                <input
                className="rounded-md px-4 py-2 bg-inherit border mb-6"
                name="email"
                required
                />
                <label className="text-md" htmlFor="email">
                    State
                </label>
                <input
                className="rounded-md px-4 py-2 bg-inherit border mb-6"
                name="email"
                required
                />
                <label className="text-md" htmlFor="email">
                    Phone Number
                </label>
                <input
                className="rounded-md px-4 py-2 bg-inherit border mb-6"
                name="email"
                required
                />
                <label className="text-md" htmlFor="email">
                    Can we contact you through WhatsApp?
                </label>
                <input
                className="rounded-md px-4 py-2 bg-inherit border mb-6"
                name="email"
                required
                />

                <MuiButton startIcon={null} label="Submit" type="submit" color="primary" />
            </form>
        </div>
        
    )
}