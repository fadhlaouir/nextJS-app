import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
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
    </Layout>
  );
}
