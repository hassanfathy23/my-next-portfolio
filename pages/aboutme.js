import { useEffect } from "react";
import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
// import { AnimationOnScroll } from "react-animation-on-scroll";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Image from "next/image";
import Link from "next/link";
import NavbarList from "../components/NavbarList";
import { closeModal, closeDropdownMenu } from "../store/uiSlice";


const personalInfo = `my name is hassan fathy, i'm a junior full stack from egypt, \
i'm 21 years old, i was studying chemistry major and i dropped out to focus \
on programing. i also like watching soccer, i'm a fan of bayern munchen, i also \
like hip hop music, my top five are eminem, jayz, 2pac, biggie, reggie.`;

const experienceHeader = `i have worked on multiple project of different themes and \
kinds like personal, e-commerce and landing page. \
i'm also open for working on various kinds of projects like restaurants, hotels. \
in 2022 i have worked on 6 projects from a to z, you can review some of them below.`;

const myWorks = [
  {
    id: 1,
    title: "ecommerce for fashion",
    description:
      "i have built online store for clothing with full functionalities like \
        payment, shipping and products, brands, categories, sub-categories listings. \
        i used next.js, react.js, tailwindcss, redux-toolkit, mongodb, express.js to develop \
        this project in less than 45 days",
    link: "https://web-production-d092.up.railway.app/",
    image:
      "https://res.cloudinary.com/oasis321/image/upload/v1667757982/ecommerce-backend/Screenshot_2022-10-26_103342_ugxs30.jpg",
    from: "sep 9 2022",
    to: "oct 20 2022",
  },
  {
    id: 2,
    title: "my 2nd portfolio",
    description:
      "i have built this portfolio because i felt that my previous portfolio was a little bit stale \
      and i felt that i need a new one to display the quality that my clients should expect. \
      i used next.js, react.js, tailwindcss and redux-toolkit for this project. \
      i didn't implement any backend because this is just static website so far",
    link: "/",
    image:
      "https://res.cloudinary.com/oasis321/image/upload/v1667761555/ecommerce-backend/Screenshot_2022-11-05_200712_thqd95.jpg",
    from: "nov 2 2022",
    to: "nov 7 2022",
  },
  {
    id: 3,
    title: "my 1st portfolio",
    description:
      "this is my first real website, i have built some websites before if but i can't say that they are \
      fully functioning websites, this is the first website i coded html and css and javascript and deploy \
      it to heroku, it's not that great when it comes to styling or content, but it was one of the few things \
      that inspired me to continue my journey as a full stack developer. built using react.js, css, heroku \
      for deployment",
    link: "https://oas-is.herokuapp.com/",
    image:
      "https://res.cloudinary.com/oasis321/image/upload/v1667762223/ecommerce-backend/Frame_1_ktnaka.png",
    from: "jan 8 2022",
    to: "jan 20 2022",
  },
];

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
  const dropdownMenuIsOpen = useSelector(
    (state) => state.ui.dropdownMenuIsOpen
  );

  const dispatch = useDispatch()

  useEffect(() => {
  dispatch(closeModal())
  dispatch(closeDropdownMenu())
  }, [])
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
         <main className="w-full lg:w-10/12 my-20 flex flex-col gap-4 items-center bg-gray-50 dark:bg-black rounded-2xl">
          <Header content="who am i?" />
          <div className="w-full lg:w-10/12 px-4 sm:px-8 py-4 flex flex-col gap-20">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-medium dark:text-gray-200">personal information</h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg lowercase">{personalInfo}</p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-medium dark:text-gray-200">experience</h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg lowercase">
                {experienceHeader}
              </p>
              <div className="flex flex-col gap-2">
                {myWorks.map((item) => (
                  <Link href={item.link} key={item.id}>
                    <div className="md:px-4 md:py-2 flex flex-col md:flex-row-reverse items-center gap-2 rounded-xl shadow-md shadow-black/20 cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-black/5">
                      <div className="px-4 md:px-0 flex justify-center items-center">
                        <Image
                          src={item.image}
                          alt="can't display this image"
                          width={700}
                          height={500}
                        />
                      </div>
                      <div className="p-2 flex flex-col gap-2">
                        <div className="py-2 flex flex-row gap-2">
                          <h3 className="text-xl font-medium dark:text-gray-200">{item.title}</h3>
                          <i className="text-gray-600 dark:text-gray-400 font-medium">
                            from {item.from} to {item.to}
                          </i>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 lowercase">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
              <div>
                <h2 className="text-2xl font-medium dark:text-gray-200">pricing</h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg lowercase">
                  {pricingDetails}
                </p>
              </div>
              <div className=" animate__animated animate__fadeInRight">
                <h2 className="text-2xl font-medium dark:text-gray-200">requirement</h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg lowercase">
                  {requirementDetails}
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-medium dark:text-gray-200">contact info</h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg lowercase">
                  email: hassanfathy593@gmail.com <br /> phone: +201091284365
                </p>
              </div>
          </div>
          {dropdownMenuIsOpen && <NavbarList />}
        </main>
      </Layout>
    </>
  );
}
