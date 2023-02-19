import dynamic from "next/dynamic";

const Layout = dynamic(() => import("../components/Layout/Layout"));

const About = () => {
  return <Layout pageTitle="My-Shop"></Layout>;
};

export default About;
