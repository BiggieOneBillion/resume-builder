import React from "react";
import Editable from "../editable";


const ModernTemplateCV = React.forwardRef((props, ref) => {
  return (
    <section className="flex flex-col items-start justify-start gap-5 text-base min-w-[600px]  max-w-4xl lg:w-[72rem] p-5 border">
      <header className="flex flex-col items-center w-full justify-start gap-4 text-black">
        {/* NAME */}
        <h1 className="text-[1.8em] font-bold">
          <Editable initialValue="KAREN SANTOS" />
        </h1>
        {/* CARRER NAME */}
        <h3 className="text-[1.25em] font-bold">
          <Editable initialValue="Senior Front End Developer" />
        </h3>
        {/* PERSONAL DETAILS */}
        <section className="text-[1em] flex items-center gap-3 md:gap-10 justify-center">
          {/* email */}
          <Editable initialValue="john@mail.com" />

          {/* phone number */}
          <Editable initialValue="(070) 3454 6789" />

          {/* address */}
          <Editable initialValue="Rivers State" />

          {/* link to lindein profile */}
          <Editable className="underline" initialValue="LinkedIn" />
        </section>
      </header>
      {/* MAIN SECTION */}
      <main className="w-full space-y-10">
        {/* WORK EXPERINENCE SECTION */}
        <section>
          {/* header */}
          <h1 className="text-xl font-bold border-black border-b-2 mb-2">
            WORK EXPERIENCE
          </h1>
          {/* work experience */}
          <section className="space-y-10">
            {/* work experience 1 */}
            <article className="flex flex-col gap-1">
              {/* company and role */}
              <h3 className="flex items-baseline gap-1">
                {/* company */}

                <Editable
                  className="text-xl font-semibold"
                  initialValue="Github"
                />

                <span>-</span>
                {/* job title */}

                <Editable
                  className="text-lg font-light"
                  initialValue="Senior Front-End Developer"
                />
              </h3>
              {/* start and end date / location */}
              <div className="text-gray-500 flex items-center justify-between">
                <Editable initialValue="January 2024 - present" />
                <Editable initialValue="River State" />
              </div>
              {/* bullet points */}
              <ul className="list-disc list-outside mt-4 pl-4 space-y-1">
                <li>
                  <Editable initialValue="Led development team of 5 persons to create GitHub pages, which allows all new and existing customers to have their repositories hosted." />
                </li>
                <li>
                  <Editable initialValue="Implemented AWS to allow easy iteration in company cloud infrastructure." />
                </li>
                <li>
                  <Editable initialValue="Mentored 8 new junior front-end developers on team in expanding JavaScript, React, and Angular skillset." />
                </li>
                <li>
                  <Editable initialValue="Created new documentation for MaterialUI that prevented the need for a 3-week onboarding course." />
                </li>
              </ul>
            </article>
            {/* second work experience */}
            <article className="flex flex-col gap-1">
              {/* company and role */}
              <h3 className="flex items-baseline gap-1">
                {/* company */}

                <Editable
                  className="text-xl font-semibold"
                  initialValue="Github"
                />

                <span>-</span>
                {/* job title */}

                <Editable
                  className="text-lg font-light"
                  initialValue="Senior Front-End Developer"
                />
              </h3>
              {/* start and end date / location */}
              <div className="text-gray-500 flex items-center justify-between">
                <Editable initialValue="January 2024 - present" />
                <Editable initialValue="River State" />
              </div>
              {/* bullet points */}
              <ul className="list-disc list-outside mt-4 pl-4 space-y-1">
                <li>
                  <Editable initialValue="Led development team of 5 persons to create GitHub pages, which allows all new and existing customers to have their repositories hosted." />
                </li>
                <li>
                  <Editable initialValue="Implemented AWS to allow easy iteration in company cloud infrastructure." />
                </li>
                <li>
                  <Editable initialValue="Mentored 8 new junior front-end developers on team in expanding JavaScript, React, and Angular skillset." />
                </li>
                <li>
                  <Editable initialValue="Created new documentation for MaterialUI that prevented the need for a 3-week onboarding course." />
                </li>
              </ul>
            </article>
            {/* third work experience */}
            <article className="flex flex-col gap-1">
              {/* company and role */}
              <h3 className="flex items-baseline gap-1">
                {/* company */}

                <Editable
                  className="text-xl font-semibold"
                  initialValue="Github"
                />

                <span>-</span>
                {/* job title */}

                <Editable
                  className="text-lg font-light"
                  initialValue="Senior Front-End Developer"
                />
              </h3>
              {/* start and end date / location */}
              <div className="text-gray-500 flex items-center justify-between">
                <Editable initialValue="January 2024 - present" />
                <Editable initialValue="River State" />
              </div>
              {/* bullet points */}
              <ul className="list-disc list-outside mt-4 pl-4 space-y-1">
                <li>
                  <Editable initialValue="Led development team of 5 persons to create GitHub pages, which allows all new and existing customers to have their repositories hosted." />
                </li>
                <li>
                  <Editable initialValue="Implemented AWS to allow easy iteration in company cloud infrastructure." />
                </li>
                <li>
                  <Editable initialValue="Mentored 8 new junior front-end developers on team in expanding JavaScript, React, and Angular skillset." />
                </li>
                <li>
                  <Editable initialValue="Created new documentation for MaterialUI that prevented the need for a 3-week onboarding course." />
                </li>
              </ul>
            </article>
          </section>
        </section>
        {/* EDUCATION SECTION */}
        <section>
          {/* header */}
          <h1 className="text-xl font-bold border-black border-b-2 mb-2">
            EDUCATION
          </h1>
          {/* education levels */}
          <section className="space-y-10">
            {/* edu 1 */}
            <article className="flex flex-col gap-1">
              {/* school and course of study */}
              <h3 className="flex items-baseline gap-1">
                {/* school */}

                <Editable
                  className="text-xl font-semibold"
                  initialValue="University Of Nigeria Nsukka"
                />

                <span>-</span>
                {/* course of study */}

                <Editable
                  className="text-lg font-light"
                  initialValue="Mechanical Engineering"
                />
              </h3>
              {/* start and end date / location */}
              <div className="text-gray-500 flex items-center justify-between">
                <Editable initialValue="January 2020 - May 2024" />
                <Editable initialValue="River State" />
              </div>
            </article>
          </section>
        </section>
        {/* SKILLS SECTION */}
        <section>
          {/* header */}
          <h1 className="text-xl font-bold border-black border-b-2 mb-2">
            SKILLS
          </h1>
          {/* skills */}
          <section className="space-y-2">
            <div className="flex items-center gap-1">
              <p className=" font-semibold">Soft skills</p>
              <span>-</span>
              <Editable initialValue="Communication , Teamwork, Problem Solving, Time Management, Leadership, Adaptability" />
            </div>
            <hr />
            <div className="flex items-center gap-1">
              <p className=" font-semibold">Hard Skills</p>
              <span>-</span>
              <Editable initialValue="Communication , Teamwork, Problem Solving, Time Management, Leadership, Adaptability" />
            </div>
          </section>
        </section>
        {/* REFERRAL SECTION */}
        <section>
          {/* header */}
          <h1 className="text-xl font-bold border-black border-b-2 mb-2">
            REFERRALS
          </h1>
          {/* skills */}
          <section className="space-y-2">
            <p>Avaliable on request</p>
          </section>
        </section>
      </main>
    </section>
  );
});

ModernTemplateCV.displayName = "ModernTemplateCV";

export default ModernTemplateCV;
