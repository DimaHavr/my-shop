import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "grha1jed",
  dataset: "production",
  apiVersion: "2023-03-01",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

//add local img
export const urlFor = (source) => builder.image(source);
