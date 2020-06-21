import Layout from "@components/Layout";

const About = ({ title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={`${title} | About`} description={description}>
        <div className="container">
          <div className="jumbotron bg-dark text-white">
            <blockquote className="blockquote text-center">
              <h1 className="display-4 mb-0">Lokesh Reddy</h1>
              <footer className="blockquote-footer">Software Engineer</footer>
            </blockquote>
            <p className="lead">
              Developing robust code for high volume business. An Enthusiastic
              team player with deep creative thinking, addicted to learn new
              technology and build things which can help other people.
            </p>
            <hr className="my-4"></hr>
            <p className="lead">
              <a className="btn btn-primary" href="#" role="button">
                Learn more
              </a>
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}
