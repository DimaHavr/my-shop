import dynamic from "next/dynamic";

const Layout = dynamic(() => import("../components/Layout/Layout"));

const Contact = () => {
  return <Layout pageTitle="My-Shop"></Layout>;
};

export default Contact;
