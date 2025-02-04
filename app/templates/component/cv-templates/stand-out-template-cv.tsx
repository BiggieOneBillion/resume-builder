import Editable from "../editable";


const StandOut = () => {
  return (
    <section className="flex flex-col items-start justify-start gap-5 text-base min-w-[800px] max-w-4xl lg:w-[72rem] p-5 border font-sans text-[0.75rem]">
      <header className="flex flex-col items-start w-full justify-start gap-1 text-black">
        {/* NAME */}
        <h1 className="text-[1.8em] font-bold">
          <Editable initialValue="KAREN SANTOS" />
        </h1>
        {/* CARRER NAME */}
        <h3 className="text-[1.25em] font-bold">
          <Editable initialValue="Senior Front End Developer" />
        </h3>
        {/* PERSONAL DETAILS */}
        <section className="text-[1em] flex items-center gap-10 justify-center">
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
      <main className="grid grid-cols-3 gap-10">
        {/* right side section */}
        <section className="col-span-2">
          {/* WORK EXPERINENCE SECTION */}
          <section>
            {/* header */}
            <h1 className="text-[1.35em] font-extrabold border-black border-b-2 mb-2">
              WORK EXPERIENCE
            </h1>
            {/* work experience */}
            <section className="space-y-10">
              {/* work experience 1 */}
              <article className="flex flex-col gap-1">
                {/* company and role */}
                <h3 className="flex flex-col gap-1">
                  {/* company */}

                  <Editable
                    className="text-base font-light"
                    initialValue="Senior Front-End Developer"
                  />

                  <Editable
                    className="text-sm font-semibold"
                    initialValue="Github"
                  />
                </h3>
                {/* start and end date / location */}
                <div className="text-gray-500 flex items-center gap-10">
                  <Editable initialValue="January 2024 - present" />
                  <Editable initialValue="River State" />
                </div>
                {/* bullet points */}
                <ul className="list-disc list-outside mt-4 pl-4 font-light">
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
                <h3 className="flex flex-col gap-1">
                  {/* company */}

                  <Editable
                    className="text-base font-light"
                    initialValue="Senior Front-End Developer"
                  />

                  <Editable
                    className="text-sm font-semibold"
                    initialValue="Github"
                  />
                </h3>
                {/* start and end date / location */}
                <div className="text-gray-500 flex items-center gap-10">
                  <Editable initialValue="January 2024 - present" />
                  <Editable initialValue="River State" />
                </div>
                {/* bullet points */}
                <ul className="list-disc list-outside mt-4 pl-4 font-light">
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
                <h3 className="flex flex-col gap-1">
                  {/* company */}

                  <Editable
                    className="text-base font-light"
                    initialValue="Senior Front-End Developer"
                  />

                  <Editable
                    className="text-sm font-semibold"
                    initialValue="Github"
                  />
                </h3>
                {/* start and end date / location */}
                <div className="text-gray-500 flex items-center gap-10">
                  <Editable initialValue="January 2024 - present" />
                  <Editable initialValue="River State" />
                </div>
                {/* bullet points */}
                <ul className="list-disc list-outside mt-4 pl-4 font-light">
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
        </section>
        {/* left side section */}
        <section className="w-full space-y-5">
          {/* CAREER OBJECTIVE */}
          <section>
            {/* header */}
            <h1 className="text-[1.35em] uppercase font-extrabold border-black border-b-2 mb-2">
              Career Objective
            </h1>
            {/* objective */}
            <Editable
              className="text-pretty "
              initialValue="Senior Front-End Developer with 9 years of proven leadership and meaningfully contributions to teams of varying size and scope. With my results-driven mentality, I transformed my team at GitHub by seeking, learning, and teaching new, efficient technologies to make aggressive deadlines consistently achievable. Passionate about going the extra mile to ensure the customer is unquestionably satisfied with the product or service provided. With emphasis on scalable and well-documented code, I look forward to working collaboratively as well as spearheading independent projects at Accenture."
            />
          </section>
          {/* EDUCATION */}
          <section>
            {/* header */}
            <h1 className="text-[1.35em] uppercase font-extrabold border-black border-b-2 mb-2">
              Education
            </h1>
            {/* education levels */}
            <section className="space-y-10">
              {/* edu 1 */}
              <article className="flex flex-col gap-1">
                {/* school and course of study */}
                <h3 className="flex flex-col items-baseline">
                  {/* course of study */}
                  <Editable
                    className=" font-light"
                    initialValue="Mechanical Engineering"
                  />
                  {/* school */}
                  <Editable
                    className=" font-semibold"
                    initialValue="University Of Nigeria Nsukka"
                  />
                </h3>
                {/* start and end date / location */}
                <div className="text-gray-500 flex flex-col">
                  <Editable initialValue="January 2020 - May 2024" />
                  <Editable initialValue="River State" />
                </div>
              </article>
            </section>
          </section>
          {/* SKILLS */}
          <section>
            {/* header */}
            <h1 className="text-[1.35em] uppercase font-extrabold border-black border-b-2 mb-2">
              Skills
            </h1>
            <section className="space-y-2">
              <div className="flex flex-col items-start gap-1">
                <p className=" font-semibold">Soft skills</p>

                <Editable initialValue="Communication , Teamwork, Problem Solving, Time Management, Leadership, Adaptability" />
              </div>
              <hr />
              <div className="flex flex-col items-start gap-1">
                <p className=" font-semibold">Hard Skills</p>

                <Editable initialValue="Communication , Teamwork, Problem Solving, Time Management, Leadership, Adaptability" />
              </div>
            </section>
          </section>
        </section>
      </main>
    </section>
  );
};
export default StandOut;
