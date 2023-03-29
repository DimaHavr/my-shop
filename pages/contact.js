import dynamic from "next/dynamic";
import Box from "../components/Box/Box";
const Layout = dynamic(() => import("../components/Layout/Layout"));

const Contact = () => {
  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <Layout pageTitle="My-Shop">
        <h1>Contacts</h1>
      </Layout>
    </Box>
  );
};

export default Contact;
