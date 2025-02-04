import { Dot } from "lucide-react";
import Editable from "../editable";

const Beam = () => {
  return (
    <section className="flex flex-col items-start justify-start gap-5 text-base min-w-[800px] max-w-4xl lg:w-[72rem] p-5 border font-sans text-[0.75rem]">
      <header className="flex border-b-2 border-gray-200 pb-5 flex-col items-center w-full justify-start gap-1 text-black">
        {/* NAME */}
        <h1 className="text-[1.8em] font-bold">
          <Editable initialValue="KAREN SANTOS" />
        </h1>
        {/* CARRER NAME */}
        <h3 className="text-[1.25em] font-bold mt-10">
          <Editable initialValue="Senior Front End Developer" />
        </h3>
        {/* PERSONAL DETAILS */}
        <section className="text-[1em] flex items-center  justify-center gap-3">
          {/* email */}
          <Editable initialValue="john@mail.com" />

          <div className="flex gap-1 items-center ">
            <span className="bg-black w-[2px] h-5"></span>
            <span className="bg-black w-[2px] h-5"></span>
          </div>

          {/* phone number */}
          <Editable initialValue="(070) 3454 6789" />
        </section>

        {/* link to lindein profile */}
        <Editable
          className="underline"
          initialValue="Your LinkedIn Profile Link"
        />
      </header>
      <main className="w-full space-y-5">
        {/* PROFILE */}
        <section className="border-b-2 border-gray-200 pb-5 space-y-5 ">
          <h2 className="text-[1.2em] font-bold">PROFILE</h2>
          <Editable
            initialValue="An iOS developer with 3+ years experience of working in a team to deliver high-end iOS applications using recent
technologies and tools. Have a keen eye for design and appreciate the importance of a clean and beautiful user interface that engages the user."
          />
        </section>
        {/* SKILLS */}
        <section className="border-b-2 border-gray-200 pb-5 space-y-5 ">
          <h2 className="text-[1.2em] font-bold">SKILLS</h2>
          <ul className="list-disc list-outside">
            {/* hard skills */}
            <li className="flex flex-col items-start text-wrap text-smy">
              <Editable
                className="font-semibold underline text-zinc-600"
                initialValue="Hard skills"
              />
              <div className="flex items-start">
                <Dot />
                <Editable
                  className="flex-1"
                  initialValue=" Swift, Objective-C, UIKit, SwiftUI, Combine, RxSwift, Firebase, CoreData, Cocoapods, Git,
Firebase and APIs"
                />
              </div>
            </li>
            {/* soft skills */}
            <li className="flex flex-col items-start text-wrap text-smy">
              <Editable
                className="font-semibold underline text-zinc-600"
                initialValue="Tools"
              />
              <div className="flex items-start">
                <Dot />
                <Editable
                  className="flex-1"
                  initialValue=" Xcode, Xcode cloud Clickup, Slack, MS Teams, Github, Bitbucket, CircleCI, Codemagic"
                />
              </div>
            </li>
          </ul>
        </section>
        {/* WORK EXPERIENCE */}
        <section className="border-b-2 border-gray-200 pb-5 space-y-5 ">
          <h2 className="text-[1.2em] font-bold">WORK EXPERIENCE</h2>
          <article>
            <div className="flex items-center justify-between">
              {/* right side */}
              <div className="flex items-center gap-1">
                {/* role */}
                <Editable
                  className="text-[1.2em] font-semibold"
                  initialValue="iOS Developer"
                />
                {/* company */}
                <Editable
                  className="text-[1.2em] font-normal"
                  initialValue="DRO Health [Remote]"
                />
              </div>
              {/* left-side */}
              <Editable
                className="text-gray-500"
                initialValue="January 2023 - Present"
              />
            </div>
            {/* one sentence about the company */}
            <Editable
              className="text-gray-500"
              initialValue="DRO Health is a telehealth platform that makes healthcare easy, fast and affordable"
            />
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
          <article>
            <div className="flex items-center justify-between">
              {/* right side */}
              <div className="flex items-center gap-1">
                {/* role */}
                <Editable
                  className="text-[1.2em] font-semibold"
                  initialValue="iOS Developer"
                />
                {/* company */}
                <Editable
                  className="text-[1.2em] font-normal"
                  initialValue="DRO Health [Remote]"
                />
              </div>
              {/* left-side */}
              <Editable
                className="text-gray-500"
                initialValue="January 2023 - Present"
              />
            </div>
            {/* one sentence about the company */}
            <Editable
              className="text-gray-500"
              initialValue="DRO Health is a telehealth platform that makes healthcare easy, fast and affordable"
            />
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
        {/* PROJECTS */}
        <section className="border-b-2 border-gray-200 pb-5 space-y-5 ">
          <h2 className="text-[1.2em] font-bold">PROJECTS</h2>
          <ul className="space-y-2">
            <li className="flex flex-col items-centery gap-1y">
              <Editable
                className="uppercase font-semibold"
                initialValue="Personal Website"
              />
              {/* <span>-</span> */}
              <Editable
                className="underline text-blue-400"
                initialValue="https://www.google.com/project"
              />
            </li>
            <li className="flex flex-col items-centery gap-1">
              <Editable
                className="uppercase font-semibold"
                initialValue="Solace Game"
              />
              {/* <span>-</span> */}
              <Editable
                className="underline text-blue-400"
                initialValue="https://www.google.com/project"
              />
            </li>
            <li className="flex flex-col items-centery gap-1">
              <Editable
                className="uppercase font-semibold"
                initialValue="E-commerce Website"
              />
              {/* <span>-</span> */}
              <Editable
                className="underline text-blue-400"
                initialValue="https://www.google.com/project"
              />
            </li>
            <li className="flex flex-col items-centery gap-1">
              <Editable
                className="uppercase font-semibold"
                initialValue="GitHub Projects"
              />
              {/* <span>-</span> */}
              <Editable
                className="underline text-blue-400"
                initialValue="https://www.google.com/project"
              />
            </li>
          </ul>
        </section>
        {/* EDUCATION */}
        <section className="border-b-2 border-gray-200 pb-5 space-y-5 ">
          <h2 className="text-[1.2em] font-bold">EDUCATION</h2>
          <section>
            <div className="flex items-center justify-between">
              {/* right side */}
              <div className="flex items-center">
                {/* role */}
                <Editable
                  className="text-[1.2em] font-semibold"
                  initialValue="BEng Mechanical Engineering"
                />
                {/* company */}
                <Editable
                  className="text-[1.2em] font-light"
                  initialValue="[Second Class Upper]"
                />
              </div>
              {/* left-side */}
              <Editable
                className="text-gray-500"
                initialValue="January 2023 - Present"
              />
            </div>
            {/* one sentence about the company */}
            <Editable
              className="text-gray-500"
              initialValue="University Of Nigeria, Nsukka"
            />
          </section>
        </section>
        {/* REFERRENCES */}
        <section className="pb-5 space-y-5 ">
          <h2 className="text-[1.2em] font-bold">REFERENCE</h2>
          <p>Avaliable on request</p>
        </section>
      </main>
    </section>
  );
};
export default Beam;
