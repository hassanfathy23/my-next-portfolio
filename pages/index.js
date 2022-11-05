import { useSelector } from "react-redux";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Cta from "../components/Cta";
import Features from "../components/Features";
import Stack from "../components/Stack";
import Header from "../components/Header";
import ContactList from '../components/ContactList'

const contactList = [
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
  },
  {
    id: "101",
    url: "vscode-icons:file-type-css",
    name: "css3",
    description: "css is used to style the website and give it fresh look",
  },
  {
    id: "102",
    url: "logos:javascript",
    name: "javascriptES6",
    description: "used to give the website interactivity",
  },
  {
    id: "103",
    url: "logos:react",
    name: "react",
    description:
      "the best javascript library for building the front end of one page websites",
  },
  {
    id: "104",
    url: "logos:nextjs-icon",
    name: "nextjs",
    description:
      "the react library for production with its advantages in file based system routing and various data fetching methods that helps with SEO",
  },
  {
    id: "105",
    url: "logos:redux",
    name: "redux-toolkit",
    description:
      "javascript best library for managing the state all over the application",
  },
  {
    id: "106",
    url: "logos:tailwindcss-icon",
    name: "tailwindcss",
    description:
      "css frame work that helps scaling web apps and makes it quicker and easier to maintain any website",
  },
  {
    id: "107",
    url: "logos:typescript-icon",
    name: "typescript",
    description:
      "strongly typed programing language that builds on javascript to add type safety to your code",
  },
];

const backStack = [
  {
    id: "1",
    url: "logos:nodejs-icon",
    name: "nodejs",
    description:
      "open source server environment allows you to build backend for websites using javascript syntax",
  },
  {
    id: "2",
    url: "logos:express",
    name: "expressjs",
    description:
      "node library that makes the code written minimal and more flexible",
  },
  {
    id: "3",
    url: "logos:mongodb-icon",
    name: "mongodb",
    description:
      "nosql database allows you to create data sets for web applications",
  },
  {
    id: "4",
    url: "",
    name: "mongoose",
    description: "node based object data modeling library for mongodb",
  },
  {
    id: "5",
    url: "logos:jwt",
    name: "jsonwebtoken",
    description:
      "npm package that add security layers to web apps like login, signup, cookies, sessions and logout",
  },
  {
    id: "6",
    url: "logos:typescript-icon",
    name: "typescript",
    description:
      "strongly typed programing language that builds on javascript to add type safety to your code",
  },
  {
    id: "10",
    url: "logos:graphql",
    name: "graphql",
    description:
      "a query language for APIs and a runtime that allows you to send queries from and to backend and manipulate it",
  },
  {
    id: "11",
    url: "dashicons:rest-api",
    name: "restAPI",
    description:
      "REpresentational State Transfer and an architectural style for distributed hypermedia systems",
  },
];

const miscStack = [
  {
    id: "200",
    url: "logos:git-icon",
    name: "git",
    description:
      "version control system handles processes like saving files into the local machine",
  },
  {
    id: "201",
    url: "logos:github-icon",
    name: "github",
    description:
      "code hosting platform for version control and collaboration, it's used for saving files on the cloud",
  },
  {
    id: "202",
    url: "vscode-icons:file-type-npm",
    name: "npm",
    description:
      "node package manager, it's used for the purpose of downloading packages to be integrated in web apps",
  },
  {
    id: "203",
    url: "logos:cypress",
    name: "cypress",
    description: "javascript-based front end testing tool built for web apps",
  },
  {
    id: "204",
    url: "logos:vercel-icon",
    name: "vercel",
    description: "service built by nextjs team to host static web pages",
  },
  {
    id: "205",
    url: "logos:heroku",
    name: "heroku",
    description:
      "service for hosting web applications, web pages and all kinds of websites",
  },
  {
    id: "206",
    url: "simple-icons:railway",
    name: "railway",
    description:
      "service for hosting web applications, web pages and all kinds of websites",
  },
];

export default function Home() {
  const modalIsOpen = useSelector((state) => state.ui.modalIsOpen);

  return (
    <div>
      <Navbar />
      <Hero />
      {modalIsOpen && <ContactList list={contactList} />}
      <Features />
      <Header content="tech stack" />
      <Stack header="stack for front end" stack={frontStack} id="front-stack" />
      <Stack header="stack for back end" stack={backStack} id="back-stack" />
      <Stack header="stack for misc" stack={miscStack} id="misc-stack" />
      <Cta />
    </div>
  );
}
