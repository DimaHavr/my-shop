import dynamic from "next/dynamic";
import { useRouter } from "next/router";
const CategoriesList = dynamic(() =>
  import("../../components/CategoriesList/CategoriesList")
);
import { client } from "../../lib/client";
import Box from "../../components/Box/Box";
import BackLink from "../../components/BackLink";

const Categories = ({ categories }) => {
  const router = useRouter();
  function goBack() {
    router.back();
  }

  return (
    <Box as="section">
      <BackLink goBack={goBack} />
      <ul>
        {categories?.map(({ name, _id }) => {
          <li key={_id}>
            <h2>{name}</h2>;
          </li>;
        })}
      </ul>
    </Box>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "categories"] {
    slug {
      current
    }
  }
  `;

  const categories = await client.fetch(query);

  const paths = categories.map((category) => ({
    params: {
      slug: category.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async () => {
  const categoriesQuery = '*[_type == "categories"]';

  const categories = await client.fetch(categoriesQuery);

  console.log(categories);

  return {
    props: {
      categories: categories.map((category) => {
        name: category.name;
        id: category._id;
      }),
    },
  };
};

export default Categories;
