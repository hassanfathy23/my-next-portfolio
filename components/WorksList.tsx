import WorkItem from "./WorkItem";

function WorksList() {
  return (
    <div className="flex flex-col gap-2">
      <WorkItem
        id={1}
        title="ecommerce for fashion"
        description="i have built online store for clothing with full functionalities like \
        payment, shipping and products, brands, categories, sub-categories listings. \
        i used next.js, react.js, tailwindcss, redux-toolkit, mongodb, express.js to develop \
        this project in less than 45 days"
        link="https://next-ecommerce-plum.vercel.app/"
        image="https://res.cloudinary.com/oasis321/image/upload/v1667757982/ecommerce-backend/Screenshot_2022-10-26_103342_ugxs30.jpg"
        from="sep 9 2022"
        to="oct 20 2022"
      />
      <WorkItem
        id={2}
        title= "my 2nd portfolio"
        description=
          "i have built this portfolio because i felt that my previous portfolio was a little bit stale \
          and i felt that i need a new one to display the quality that my clients should expect. \
          i used next.js, react.js, tailwindcss and redux-toolkit for this project. \
          i didn't implement any backend because this is just static website so far"
        link= "/"
        image=
          "https://res.cloudinary.com/oasis321/image/upload/v1667761555/ecommerce-backend/Screenshot_2022-11-05_200712_thqd95.jpg"
        from= "nov 2 2022"
        to= "nov 7 2022"
       />
       <WorkItem 
        id={3}
        title= "user interface for restaurant"
        description=
          "this is a user interface for a main page in a restaurant web application\
          it&apos;s developed using top notch front end stack which includes: html, css, javascript, react, nextjs, tailwindcss, typescript and some ready-to-use components installed using npm\
          this page is compatible with all kinds of devices(responsive) and very performant."
        link= "https://singular-fenglisu-fafd59.netlify.app"
        image="https://res.cloudinary.com/oasis321/image/upload/v1674029651/Screenshot_2023-01-18_080605_pyweon.jpg"
        from= "jan 8 2022"
        to= "jan 20 2022"
        />
    </div>
  );
}

export default WorksList;
