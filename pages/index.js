import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I'm a Software Engineering Student, Working as a QA Tester and
          Front-End developer. My force of willingness combined with the desire
          to learn new things gives me, every day, the right energy for carrying
          out any projects or any problems. I'm open-minded, I don't watch only
          the appearance and I always try to explore and get the core of a given
          topic, I always want to understand the "why" and the "how". At the
          same time I also recognize my limits and accept constructive criticism
          that is useful for the growth of my course of study. All of this gives
          me the tenacity to keep going and never give up!
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      {/* props */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const allPostsData = getSortedPostsData();
  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    // props: ...
    props: {
      allPostsData,
    },
  };
}
// If you need to fetch data at request time instead of at build time, you can try Server-side Rendering:
// ............................................
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // props for your component
//     }
//   }
// }

// SWRThe team behind Next.js has created a React hook for
// data fetching called SWR. We highly recommend it if you’re
// fetching data on the client side. It handles caching,
// revalidation, focus tracking, refetching on interval,
// and more. We won’t cover the details here, but here’s
//  an example usage:
// ............................................
// import useSWR from 'swr'

// function Profile() {
//   const { data, error } = useSWR('/api/user', fetch)

//   if (error) return <div>failed to load</div>
//   if (!data) return <div>loading...</div>
//   return <div>hello {data.name}!</div>
// }
