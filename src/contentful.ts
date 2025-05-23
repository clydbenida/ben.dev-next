import * as contentful from "contentful";

export const contentfulClient = contentful.createClient({
  accessToken: process.env.CONTENTFUL_DELIVERY_KEY!,
  space: process.env.CONTENTFUL_SPACE_ID!,
});
