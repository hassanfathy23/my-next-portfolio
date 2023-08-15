import WorkItem from "./WorkItem";

function WorksList() {
  return (
    <div className="flex flex-col gap-2">
      <WorkItem
        id={1}
        title="Madleen"
        description="Worked on several projects with top class clients to build the user
        interface of their websites using mainly React"
        link="https://madleen.vercel.app"
        image="/images/madleen.jpg"
        from="mar 14 2022"
        to="now"
      />
      <WorkItem
        id={2}
        title="ai-search"
        description="i was tech lead at ai-search for 2 months and i was one of the few who
         helped built the startup from the first block to help users to find their favorite ai 
         tools and submit their own and be able to promote their products through fully
          functional ads system"
        link="https://ai-search.io"
        image="/images/ai-search.jpg"
        from="jan 14 2023"
        to="mar 14 2023"
      />
      <WorkItem
        id={3}
        title="ecommerce for fashion"
        description="i have built online store for clothing with full functionalities like
        payment, shipping and products, brands, categories, sub-categories listings.
        i used next.js, react.js, tailwindcss, redux-toolkit, mongodb, express.js to develop
        this project in less than 45 days"
        link="https://next-ecommerce-plum.vercel.app"
        image="/images/ecommerce-for-fashion.jpg"
        from="sep 9 2022"
        to="oct 20 2022"
      />
      <WorkItem
        id={4}
        title="user interface for hotel"
        description="user interface for a hotel's main page with customized design
          and compatibility over all screen sizes, the stack used in this project
          is next.js, react, tailwind, typescript"
        link="https://graceful-tanuki-18e88b.netlify.app"
        image="/images/hotel.jpg"
        from="nov 2 2022"
        to="nov 7 2022"
      />
      <WorkItem
        id={5}
        title="user interface for restaurant"
        description="this is a user interface for a main page in a restaurant web application
          it's developed using top notch front end stack which includes: html, css, javascript, react, nextjs, tailwindcss, typescript and some ready-to-use components installed using npm
          this page is compatible with all kinds of devices(responsive) and very performant."
        link="https://singular-fenglisu-fafd59.netlify.app"
        image="/images/restaurant.jpg"
        from="jan 8 2022"
        to="jan 20 2022"
      />
    </div>
  );
}

export default WorksList;
