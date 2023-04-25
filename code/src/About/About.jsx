import { Helmet } from "react-helmet-async";
import Page from "../components/page";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About | Aidos Kanapyanov</title>
      </Helmet>
      <Page title="About me" subtitle="(in about 1038 words)">
        <h1 className="mt-10 mb-4 uppercase font-bold tracking-widest">
          Intro
        </h1>
        <p>
          I am a full-stack web developer and a mobile app developer. I
          specialize in the MERN stack (MongoDB, Express, React, and Node.js)
          and React Native. I am also proficient in Java and C++.
        </p>
        <h1 className="mt-10 mb-4 uppercase font-bold tracking-widest">
          About Me
        </h1>
        <p>
          I am a full-stack web developer and a mobile app developer. I
          specialize in the MERN stack (MongoDB, Express, React, and Node.js)
          and React Native. I am also proficient in Java and C++.
        </p>
        <h1 className="mt-10 mb-4 uppercase font-bold tracking-widest">
          Experience
        </h1>
        <p>
          I am a full-stack web developer and a mobile app developer. I
          specialize in the MERN stack (MongoDB, Express, React, and Node.js)
          and React Native. I am also proficient in Java and C++.
        </p>
        <h1 className="mt-10 mb-4 uppercase font-bold tracking-widest">
          Education
        </h1>
        <p>
          I am a full-stack web developer and a mobile app developer. I
          specialize in the MERN stack (MongoDB, Express, React, and Node.js)
          and React Native. I am also proficient in Java and C++.
        </p>
        <h1 className="mt-10 mb-4 uppercase font-bold tracking-widest">
          Skills
        </h1>
        <p>
          I am a full-stack web developer and a mobile app developer. I
          specialize in the MERN stack (MongoDB, Express, React, and Node.js)
          and React Native. I am also proficient in Java and C++.
        </p>
      </Page>
    </>
  );
}
