import Head from "next/head";
import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../store/hooks';
// import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
// import Cta from "../components/Cta";
import Features from "../components/Features";
import Stack from "../components/Stack";
import Header from "../components/Header";
import ContactList from "../components/ContactList";
import Layout from "../components/Layout";

export const contactList = [
  {
    id: "300",
    url: "mailto:hassanfathy593@gmail.com",
    image: "logos:google-gmail",
    title: "email",
  },
  {
    id: "301",
    url: "https://api.whatsapp.com/send?phone=201091284365",
    image: "logos:whatsapp-icon",
    title: "whatsapp",
  },
  {
    id: "302",
    url: "https://twitter.com/Hassan74156208",
    image: "logos:twitter",
    title: "twitter",
  },
  {
    id: "303",
    url: "https://www.upwork.com/freelancers/~019d74cca5fe9c82e5",
    image: "logos:upwork",
    title: "upwork",
  },
  {
    id: "304",
    url: "https://www.fiverr.com/hassan32143",
    image: "simple-icons:fiverr",
    title: "fiverr",
  },
  {
    id: "305",
    url: "https://www.peopleperhour.com/freelancer/technology-programming/hassan-fathy-full-stack-web-developer-majzxqz",
    image: "icon-park:other",
    title: "peopleperhour",
  },
];

const frontStack = [
  {
    id: "100",
    url: "vscode-icons:file-type-html",
    name: "html5",
    description: "html is used to develop the structure of the front end",
    important: false
  },
  {
    id: "101",
    url: "vscode-icons:file-type-css",
    name: "css3",
    description: "css is used to style the website and give it fresh look",
    important: false
  },
  {
    id: "102",
    url: "logos:javascript",
    name: "javascriptES6",
    description: "used to give the website interactivity",
    important: false
  },
  {
    id: "103",
    url: "logos:react",
    name: "react",
    description:
      "the best javascript library for building the front end of one page websites",
    important: true,
  },
  {
    id: "104",
    url: "logos:nextjs-icon",
    name: "nextjs",
    description:
      "the react library for production with its advantages in file based system routing and various data fetching methods that helps with SEO",
    important: true,
  },
  {
    id: "105",
    url: "logos:redux",
    name: "redux-toolkit",
    description:
      "javascript best library for managing the state all over the application",
      important: false
  },
  {
    id: "106",
    url: "logos:tailwindcss-icon",
    name: "tailwindcss",
    description:
      "css frame work that helps scaling web apps and makes it quicker and easier to maintain any website",
      important: false
  },
  {
    id: "107",
    url: "logos:typescript-icon",
    name: "typescript",
    description:
      "strongly typed programing language that builds on javascript to add type safety to your code",
    important: true,
  },
];

const backStack = [
  {
    id: "1",
    url: "logos:nodejs-icon",
    name: "nodejs",
    description:
      "open source server environment allows you to build backend for websites using javascript syntax",
      important: false
  },
  {
    id: "2",
    url: "logos:express",
    name: "expressjs",
    description:
      "node library that makes the code written minimal and more flexible",
      important: false
  },
  {
    id: "3",
    url: "logos:mongodb-icon",
    name: "mongodb",
    description:
      "nosql database allows you to create data sets for web applications",
      important: false
  },
  {
    id: "4",
    url: "game-icons:goose",
    name: "mongoose",
    description: "node based object data modeling library for mongodb",
    important: false
  },
  {
    id: "5",
    url: "logos:jwt",
    name: "jsonwebtoken",
    description:
      "npm package that add security layers to web apps like login, signup, cookies, sessions and logout",
      important: false
  },
  {
    id: "6",
    url: "logos:typescript-icon",
    name: "typescript",
    description:
      "strongly typed programing language that builds on javascript to add type safety to your code",
    important: true,
  },
  {
    id: "10",
    url: "logos:graphql",
    name: "graphql",
    description:
      "a query language for APIs and a runtime that allows you to send queries from and to backend and manipulate it",
    important: true,
  },
  {
    id: "11",
    url: "dashicons:rest-api",
    name: "restAPI",
    description:
      "REpresentational State Transfer and an architectural style for distributed hypermedia systems",
      important: false
  },
];

const miscStack = [
  {
    id: "200",
    url: "logos:git-icon",
    name: "git",
    description:
      "version control system handles processes like saving files into the local machine",
      important: false
  },
  {
    id: "201",
    url: "logos:github-icon",
    name: "github",
    description:
      "code hosting platform for version control and collaboration, it's used for saving files on the cloud",
      important: false
  },
  {
    id: "202",
    url: "vscode-icons:file-type-npm",
    name: "npm",
    description:
      "node package manager, it's used for the purpose of downloading packages to be integrated in web apps",
      important: false
  },
  {
    id: "203",
    url: "logos:cypress",
    name: "cypress",
    description: "javascript-based front end testing tool built for web apps",
    important: false
  },
  {
    id: "204",
    url: "logos:vercel-icon",
    name: "vercel",
    description: "service built by nextjs team to host static web pages",
    important: false
  },
  {
    id: "205",
    url: "logos:heroku",
    name: "heroku",
    description:
      "service for hosting web applications, web pages and all kinds of websites",
      important: false
  },
  {
    id: "206",
    url: "simple-icons:railway",
    name: "railway",
    description:
      "service for hosting web applications, web pages and all kinds of websites",
      important: false
  },
];

export default function Home() {
  const modalIsOpen = useAppSelector((state) => state.ui.modalIsOpen);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    document.body.className = modalIsOpen ? 'overflow-hidden': ''
  }, [modalIsOpen])
  
  return (
    <>
      <Head>
        <title>hassan fathy, full stack web developer</title>
        <meta
          name="description"
          content="web developer for hire, hire someone to \
          build your website who is expert in developing font \
          end, back end, full stack web applications with \
          experience of 1 year in software and software \
          archticture, i will develop your website using \
          html, css, javascript, react, next, redux, tailwind, \
          mongodb, mongoose, mongodb atlas, node, restapi, graphql, \
          typescript, npm, jsonwebtoken, git, github, cypress, \
          heroku, railway, vercel"
          key="desc"
        />
        <meta property="og:title" content="hassan fathy, full stack web developer" />
        <meta property="og:description" content="web developer for hire, hire someone to \
          build your website who is expert in developing font \
          end, back end, full stack web applications with \
          experience of 1 year in software and software \
          archticture, i will develop your website using \
          html, css, javascript, react, next, redux, tailwind, \
          mongodb, mongoose, mongodb atlas, node, restapi, graphql, \
          typescript, npm, jsonwebtoken, git, github, cypress, \
          heroku, railway, vercel" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/oasis321/image/upload/v1667761555/ecommerce-backend/Screenshot_2022-11-05_200712_thqd95.jpg"
        />
      </Head>
      <Layout>
        <Hero />
        {modalIsOpen && <ContactList list={contactList} />}
        <Features />
        <Header content="tech stack" style="text-black dark:text-gray-300" />
        <Stack
          header="stack for front end"
          stack={frontStack}
          id="front-stack"
        />
        <Stack header="stack for back end" stack={backStack} id="back-stack" />
        <Stack header="stack for misc" stack={miscStack} id="misc-stack" />
      </Layout>
    </>
  );
}
