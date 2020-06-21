import Layout from "@components/Layout";

const About = ({ title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={`${title} | About`} description={description}>
        <div className="container">
          <div className="jumbotron bg-dark text-white">
            <blockquote className="blockquote text-center">
              <h1 className="display-4 mb-0">Hi, I'm Lokesh Reddy</h1>
              <footer className="blockquote-footer ml-6">
                Software Engineer
              </footer>
            </blockquote>
            <p className="lead">
              Developing robust code for high volume business. An Enthusiastic
              team player with deep creative thinking, addicted to learn new
              technology and build things which can help other people.
            </p>
            <h4>Wanna Connect With Me....</h4>
            <hr className="my-4"></hr>
            <p className="lead">
              <a
                className="btn btn-dark btn-lg m-1"
                href="http://lokeshreddy007.github.io/"
                target="_blank"
                role="button"
              >
                Portfolio Site
              </a>
              <a
                className="btn btn-dark btn-lg m-1"
                href="https://twitter.com/lokeshrocks7"
                target="_blank"
                role="button"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a
                className="btn btn-dark btn-lg m-1"
                href="https://www.linkedin.com/in/lokesh-reddy7/"
                target="_blank"
                role="button"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                className="btn btn-dark btn-lg m-1"
                href="https://www.youtube.com/channel/UCqJUEjYreOKH3XD0wpoJeYQ/"
                target="_blank"
                role="button"
              >
                <i className="fa fa-youtube"></i>
              </a>
              <a
                className="btn btn-dark btn-lg m-1"
                href="https://github.com/lokeshreddy007/"
                target="_blank"
                role="button"
              >
                <i className="fa fa-github"></i>
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
