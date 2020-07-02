import Layout from "@components/Layout";
import PostList from "@components/PostList";

import getPosts from "@utils/getPosts";

const Index = ({ posts, title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={title} description={description}>
        <h1 className="title">Welcome to My Blog!</h1>

        <p className="description">
          This is a simple blog built with{" "}
          <a href="https://nextjs.org/" target="_blank">
            Next.js
          </a>{" "}
          , easily deployable on{" "}
          <a href="https://url.netlify.com/r1j6ybSYU " target="_blank">
            Netlify
          </a>
          .
        </p>
        <main>
          <PostList posts={posts} />
        </main>
      </Layout>
      <style jsx>{`
        .title {
          margin: 1rem auto;
          font-size: 3rem;
        }
      `}</style>
    </>
  );
};

export default Index;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  const posts = ((context) => {
    return getPosts(context);
  })(require.context("../posts", true, /\.md$/));

  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}
