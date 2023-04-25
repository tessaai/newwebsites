import { Helmet } from "react-helmet-async";
import Page from "../components/page";

export default function About() {
  return (
    <>
      <Helmet>
        <title>pro</title>
      </Helmet>
      <Page
        title="About this site"
        subtitle="a beautiful, responsive, statically-generated, react application written with modern javascript."
      >
        <p className="mb-4">
          Welcome to my website. Please feel free to read more about me, or you
          can check out my resume, projects, view site statistics, or contact
          me.
        </p>
        <p className="mb-4">pro.</p>
      </Page>
    </>
  );
}
