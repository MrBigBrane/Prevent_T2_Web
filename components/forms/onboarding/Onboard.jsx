'use client';

import { useFormState } from "react-dom"
import MuiButton from '../../buttons/MuiButton'
import MuiSelect from '../../inputs/MuiSelect'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import onboardingAction from '@/lib/onboarding/onboardingAction'
import { useState } from "react";
import { LinearProgress } from "@mui/material";

//         // Age, Weight, A1C, CDC Risk Assessment?, Gender, IF woman gestational diabetes?, relative with diabetes, 
// //                 high bp, active?, zoom class, committed to improve, 
// //                 phone num, 26 zoom classes or 45 min vid, city and state, NRIVA sharing weight, 
// //                 join whatsapp, height, score on cdc risk assessment

const steps = ['General Information', 'Health Questions', 'DPP Program Questions', 'Contact Information'];

export default function EmailReset() {
    const [state, formAction] = useFormState(onboardingAction, { message: null }) 
    const [section1, setSection1] = useState('')
    const [section2, setSection2] = useState('hidden')
    const [section3, setSection3] = useState('hidden')
    const [section4, setSection4] = useState('hidden')
    const [activeStep, setActiveStep] = useState(0);
    const [loading, setLoading] = useState(false);

    function handleLoading() {
        setLoading(true);
    }

    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
      <>
        <Box sx={{ width: "100%", padding: "1rem" }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps} color="inherit">
                    {label}
                  </StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </Box>

        <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center">
          <form
            action={formAction}
            className="animate-in flex-1 flex flex-col w-full text-foreground"
          >
            {loading ? (
              <Box width={"100%"}>
                <LinearProgress color="success" />
              </Box>
            ) : null}
            <Typography variant="h5" padding={1} textAlign={"center"}>
              Onboarding Questionnaire
            </Typography>
            <Typography variant="body1" padding={1} textAlign={"center"}>
              Please <b>fully</b> complete this form to be considered for NRIVA
              DPP.
            </Typography>
            <label
              className="text-md"
              htmlFor="email"
              hidden={section1 === "hidden" ? true : false}
            >
              Age
            </label>
            <input
              className="rounded-md px-4 py-2 bg-inherit border mb-6"
              name="age"
              required
              type={section1}
            />
            <label
              className="text-md"
              htmlFor="email"
              hidden={section1 === "hidden" ? true : false}
            >
              Weight in <b>LBS or Pounds</b>
            </label>
            <input
              className="rounded-md px-4 py-2 bg-inherit border mb-6"
              name="weight"
              required
              type={section1}
            />
            <label
              className="text-md"
              htmlFor="email"
              hidden={section1 === "hidden" ? true : false}
            >
              What is your weight goal in <b>LBS or Pounds</b> for the end of
              this session?
            </label>
            <input
              className="rounded-md px-4 py-2 bg-inherit border mb-6"
              name="weight_goal"
              required
              type={section1}
            />
            <label
              className="text-md"
              htmlFor="email"
              hidden={section1 === "hidden" ? true : false}
            >
              Height in <b>INCHES</b>
            </label>
            <input
              className="rounded-md px-4 py-2 bg-inherit border mb-6"
              name="height"
              required
              type={section1}
            />
            <label
              className="text-md"
              htmlFor="email"
              hidden={section1 === "hidden" ? true : false}
            >
              Sex
            </label>
            <MuiSelect
              field="Sex"
              name="sex"
              field1="1 Male"
              field2="2 Female"
              field3="9 Prefer not to say"
              required={true}
              className="rounded-md px-4 py-2 bg-inherit border mb-6"
              hidden={section1}
              color="success"
            />
            {/* Gender */}
            <label
              className="text-md"
              htmlFor="email"
              hidden={section1 === "hidden" ? true : false}
            >
              Gender
            </label>
            <MuiSelect
              field="Gender"
              name="gender"
              field1="1 Male"
              field2="2 Female"
              field3="3 Transgender"
              field4="4 Prefer not to say"
              required={true}
              className="rounded-md px-4 py-2 bg-inherit border mb-6"
              hidden={section1}
              color="success"
            />
            {/* Ethnicity */}
            {/* hispanic or latino */}
            {/* not hispanic */}
            {/* not reported */}
            <label
              className="text-md"
              htmlFor="email"
              hidden={section1 === "hidden" ? true : false}
            >
              Ethnicity
            </label>
            <MuiSelect
              field="Ethnicity"
              name="ethnicity"
              field1="1 Hispanic or Latino"
              field2="2 Not Hispanic or Latino"
              field3="3 Prefer not to say"
              required={true}
              className="rounded-md px-4 py-2 bg-inherit border mb-6"
              hidden={section1}
              color="success"
            />

            {/* race */}
            {/* asian or asian american */}
            {/* black or african american */}
            {/* Native Hawaiian or Other Pacific Islander */}
            {/* white or caucasian */}
            <label
              className="text-md"
              htmlFor="email"
              hidden={section1 === "hidden" ? true : false}
            >
              Race
            </label>
            <MuiSelect
              field="Race"
              name="race"
              field5="5 American Indian or Alaska Native"
              field1="1 Asian or Asian American"
              field2="2 Black or African American"
              field3="3 Native Hawaiian or Other Pacific Islander"
              field4="4 White or Caucasian"
              required={true}
              className="rounded-md px-4 py-2 bg-inherit border mb-6"
              hidden={section1}
              color="success"
            />

            {/* sex */}
            {/* Male */}
            {/* Female */}
            {/* prefer not to say */}

            {/* highest education */}
            <label
              className="text-md"
              htmlFor="email"
              hidden={section1 === "hidden" ? true : false}
            >
              Highest Level of Education
            </label>
            <MuiSelect
              field="Education"
              name="education"
              field1="1 Less than Grade 12"
              field2="2 Grade 12 or GED"
              field3="3 Some college or technical school"
              field4="4 College or technical school graduate or higher"
              required={true}
              className="rounded-md px-4 py-2 bg-inherit border mb-6"
              hidden={section1}
              color="success"
            />

            {section1 === "" ? (
              <MuiButton
                style={{ marginBottom: "8px" }}
                label="Next"
                click={() => {
                  setSection1("hidden");
                  setSection2("");
                  handleNext();
                }}
                color="success"
              />
            ) : null}

            {/* Health questions */}
            <label
              className="text-md"
              htmlFor="email"
              hidden={section2 === "hidden" ? true : false}
            >
              What is your A1C Level in <b>PERCENTAGE</b> &#40;must be between
              2.5 - 18.999&#41;?
            </label>
            <input
              className="rounded-md px-4 py-2 bg-inherit border mb-6"
              name="a1c"
              required
              type={section2}
            />
            {/* If woman */}
            <label
              className="text-md"
              htmlFor="email"
              hidden={section2 === "hidden" ? true : false}
            >
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
            <label
              className="text-md"
              htmlFor="email"
              hidden={section2 === "hidden" ? true : false}
            >
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
            <label
              className="text-md"
              htmlFor="email"
              hidden={section2 === "hidden" ? true : false}
            >
              If so, what was your score?
            </label>
            <input
              className="rounded-md px-4 py-2 bg-inherit border mb-6"
              name="score"
              type={section2}
            />
            {/*  */}
            <label
              className="text-md"
              htmlFor="email"
              hidden={section2 === "hidden" ? true : false}
            >
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
            {/* Have you been diagnosed with prediabetes? */}
            <label
              className="text-md"
              htmlFor="email"
              hidden={section2 === "hidden" ? true : false}
            >
              Have you been diagnosed as a prediabetic?
            </label>
            <MuiSelect
              field="Prediabetic?"
              name="prediabetic"
              field1="Yes"
              field2="No"
              field3="Don't Know"
              required={true}
              className="rounded-md px-4 py-2 bg-inherit border mb-6"
              hidden={section2}
              color="success"
            />
            {/* If yes, how so? (gluc test, GDM, risk test) */}
            <label
              className="text-md"
              htmlFor="email"
              hidden={section2 === "hidden" ? true : false}
            >
              If yes, was it with a blood glucose test?
            </label>
            <MuiSelect
              field="Prediabetic Test"
              name="glucose"
              field1="1 Yes"
              field2="2 No"
              className="rounded-md px-4 py-2 bg-inherit border mb-6"
              hidden={section2}
              color="success"
            />
            <label
              className="text-md"
              htmlFor="email"
              hidden={section2 === "hidden" ? true : false}
            >
              If yes, was it with a clinical diagnosis of GDM during a previous
              pregnancy?
            </label>
            <MuiSelect
              field="Prediabetic Test"
              name="gdm"
              field1="1 Yes"
              field2="2 No"
              className="rounded-md px-4 py-2 bg-inherit border mb-6"
              hidden={section2}
              color="success"
            />
            <label
              className="text-md"
              htmlFor="email"
              hidden={section2 === "hidden" ? true : false}
            >
              If yes, was it determined by a prediabetes risk test?
            </label>
            <MuiSelect
              field="Prediabetic Test"
              name="risktest"
              field1="1 Yes"
              field2="2 No"
              className="rounded-md px-4 py-2 bg-inherit border mb-6"
              hidden={section2}
              color="success"
            />
            <label
              className="text-md"
              htmlFor="email"
              hidden={section2 === "hidden" ? true : false}
            >
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

            <label
              className="text-md"
              htmlFor="email"
              hidden={section3 === "hidden" ? true : false}
            >
              Who is the primary payer for your participation in this National
              DPP LCP?
            </label>
            <MuiSelect
              field="Healthcare Professional"
              name="payersource"
              field1="1 Medicare"
              field2="2 Medicaid"
              field3="3 Private Insurer"
              field4="4 Self-pay"
              field5="5 Dual Eligible (Medicare and Medicaid)"
              field6="6 Grant funding"
              field7="7 Employer"
              field8="8 Free of charge"
              field9="9 Other"
              required={true}
              className="rounded-md px-4 py-2 bg-inherit border mb-6"
              hidden={section3}
              color="success"
            />

            {section2 === "" ? (
              <MuiButton
                label="Back"
                click={() => {
                  setSection2("hidden");
                  setSection1("");
                  handleBack();
                }}
                color="success"
              />
            ) : null}
            {section2 === "" ? (
              <MuiButton
                style={{ marginTop: "8px", marginBottom: "8px" }}
                label="Next"
                click={() => {
                  setSection2("hidden");
                  setSection3("");
                  handleNext();
                }}
                color="success"
              />
            ) : null}

            {/* SECTION 3 */}
            {/* Enrollement motivation */}
            {/* Enrollment source */}
            {/* Payer source */}

            {/* SECTION 4 */}
            <label
              className="text-md"
              htmlFor="email"
              hidden={section3 === "hidden" ? true : false}
            >
              Who or what motivated you to decide to join this program?
            </label>
            <MuiSelect
              field="Healthcare Professional"
              name="enrmot"
              field1="1 Health care professional"
              field2="2 Blood test results"
              field3="3 Prediabetes risk test"
              field4="4 Someone at a community-
              based organization"
              field5="5 Family or friends"
              field6="6 Current or past participant in
              the National DPP LCP"
              field7="7 Employer or employer’s
              wellness plan"
              field8="8 Health insurance plan"
              field9="9 Media advertisements"
              required={true}
              className="rounded-md px-4 py-2 bg-inherit border mb-6"
              hidden={section3}
              color="success"
            />
            <label
              className="text-md"
              htmlFor="email"
              hidden={section3 === "hidden" ? true : false}
            >
              Did a healthcare professional help you in your decision to join?
            </label>
            <MuiSelect
              field="Healthcare Professional"
              name="enrsource"
              field1="1 Yes, a doctor/doctor’s office"
              field2="2 Yes, a pharmacist"
              field3="3 Yes, other healthcare
              professional"
              field4="4 No"
              required={true}
              className="rounded-md px-4 py-2 bg-inherit border mb-6"
              hidden={section3}
              color="success"
            />

            <label
              className="text-md"
              htmlFor="email"
              hidden={section3 === "hidden" ? true : false}
            >
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
            <label
              className="text-md"
              htmlFor="email"
              hidden={section3 === "hidden" ? true : false}
            >
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
            <label
              className="text-md"
              htmlFor="email"
              hidden={section3 === "hidden" ? true : false}
            >
              Do you allow NRIVA to share your weight confidentially with the
              CDC?
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
            {section3 === "" ? (
              <MuiButton
                label="Back"
                click={() => {
                  setSection3("hidden");
                  setSection2("");
                  handleBack();
                }}
                color="success"
              />
            ) : null}
            {section3 === "" ? (
              <MuiButton
                style={{ marginTop: "8px", marginBottom: "8px" }}
                label="Next"
                click={() => {
                  setSection3("hidden");
                  setSection4("");
                  handleNext();
                }}
                color="success"
              />
            ) : null}

            <label
              className="text-md"
              htmlFor="email"
              hidden={section4 === "hidden" ? true : false}
            >
              City
            </label>
            <input
              className="rounded-md px-4 py-2 bg-inherit border mb-6"
              name="city"
              type={section4}
              required
            />
            <label
              className="text-md"
              htmlFor="email"
              hidden={section4 === "hidden" ? true : false}
            >
              State Abbreviation
            </label>
            <input
              className="rounded-md px-4 py-2 bg-inherit border mb-6"
              name="state"
              type={section4}
              required
            />
            <label
              className="text-md"
              htmlFor="email"
              hidden={section4 === "hidden" ? true : false}
            >
              Phone Number
            </label>
            <input
              className="rounded-md px-4 py-2 bg-inherit border mb-6"
              name="phone"
              type={section4}
              required
            />
            <label
              className="text-md"
              htmlFor="email"
              hidden={section4 === "hidden" ? true : false}
            >
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
            {section4 === "" ? (
              <MuiButton
                label="Back"
                click={() => {
                  setSection4("hidden");
                  setSection3("");
                  handleBack();
                }}
                color="success"
                style={{ marginBottom: "8px" }}
              />
            ) : null}
            {section4 === "" ? (
              <MuiButton
                startIcon={null}
                label="Submit"
                type="submit"
                color="success"
                click={handleLoading}
              />
            ) : null}
          </form>
        </div>
      </>
    );
}