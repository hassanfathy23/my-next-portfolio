import Head from "next/head";
import { useEffect } from "react";

import { useAppSelector } from "../store/hooks";
import Layout from "../components/Layout";
import Header from "../components/Header";
import NavbarList from "../components/NavbarList";
import Paragraph from "../components/Paragraph";
import WorkList from "../components/WorksList";

const personalInfo = `my name is hassan fathy, i'm a junior full stack from egypt, \
i'm 21 years old, i was studying chemistry major and i dropped out to focus \
on programing. i also like watching soccer, i'm a fan of bayern munchen, i also \
like hip hop music, my top five are eminem, jayz, 2pac, biggie, reggie.`;

const experienceHeader = `I'm expert full stack JavaScript developer with 2 years of \
experience in building full stack web applications using JavaScript top notch frameworks \
like React, Next.js, TypeScript, Redux, Tailwind CSS, Node, MongoDB and i have worked with \
remotely distributed teams from north America and Europe using agile systems for product \
management.`;

const pricingDetails =
  "charging money as a freelancer varies, some clients prefer to \
pay per project, and others prefer to pay per hour, so as a base rule, me as a freelancer \
i charge what is equal to 10 dollars per hour (10$/h), and that's because multiple reasons \
first of all is i'm a junior developer, i worked on few projects and i need experience more \
than i need money in the time being, secondly, i live in egypt which is relatively much more cheaper \
than lots of countries in the world, dispite all that, the price i charge will increase \
in the next few months.";

const requirementDetails =
  "all i need from you to start working is a design with all the content/media like \
images, videos, ...etc and i will start work on your project instantly";

export default function AboutMe() {
  const dropdownMenuIsOpen = useAppSelector(
    (state) => state.ui.dropdownMenuIsOpen
  );
  const modalIsOpen = useAppSelector((state) => state.ui.modalIsOpen);

  useEffect(() => {
    document.body.className = modalIsOpen ? "overflow-hidden" : "";
  }, [modalIsOpen]);

  return (
    <>
      <Head>
        <title>who am i?</title>
        <meta
          name="description"
          content={
            personalInfo +
            " " +
            experienceHeader +
            " " +
            pricingDetails +
            " " +
            requirementDetails
          }
          key="desc"
        />
        <meta property="og:title" content="who am i?" />
        <meta
          property="og:description"
          content={
            personalInfo +
            " " +
            experienceHeader +
            " " +
            pricingDetails +
            " " +
            requirementDetails
          }
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/oasis321/image/upload/v1667761555/ecommerce-backend/Screenshot_2022-11-05_200712_thqd95.jpg"
        />
      </Head>
      <Layout>
        <main className="w-full lg:w-10/12 my-20 flex flex-col gap-4 items-center overflow-hidden bg-gray-50 dark:bg-black rounded-2xl">
          <Header content="who am i?" style="text-black dark:text-gray-300" />
          <div className="w-full lg:w-10/12 px-4 sm:px-8 py-4 flex flex-col gap-20">
            <Paragraph header="personal info" paragraph={personalInfo} />
            <Paragraph header="experience" paragraph={experienceHeader} />
            <WorkList />
            <Paragraph header="pricing" paragraph={pricingDetails} animate />
            <Paragraph header="requirements" paragraph={requirementDetails} animate />
            <Paragraph
              header="contact info"
              paragraph='email: hassanfathy593@gmail.com'
              secondPar='phone: +201091284365'
              animate
            />
          </div>
          {dropdownMenuIsOpen && <NavbarList />}
        </main>
      </Layout>
      </>
  );
}
