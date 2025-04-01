import * as prismic from "@prismicio/client";
export const repositoryName = "new-nile"; // Your repo name
const endpoint = prismic.getRepositoryEndpoint(repositoryName);
export const client = prismic.createClient(endpoint);