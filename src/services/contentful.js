import request, { GET } from "./request";

const CONTENTFUL_URL = `https://cdn.contentful.com/spaces/6fmuqje9nkz0/environments/master/entries?access_token=yNcU-W6qITUmC18PRtK6Gyy32Vy7oGLRAWzW-2zyUaM&content_type=blog-entry`;

// TODO: Update the method below to utilize contentful's pagination functionality to return only 6 entries
//       NOTE: remember on "load more" it's 6 *additional* entries
export const getAllArticles = async () => {
  try {
    const response = await request(GET, CONTENTFUL_URL);

    return response.items;
  } catch (e) {
    console.log("getAllArticles failed:", e);
  }
};

//Grab articles based on limit and skip for pagination
export const getPaginatedArticles = async (limit, skip) => {
 const PAGINATED_CONTENTFUL_URL = `https://cdn.contentful.com/spaces/6fmuqje9nkz0/environments/master/entries?access_token=yNcU-W6qITUmC18PRtK6Gyy32Vy7oGLRAWzW-2zyUaM&content_type=blog-entry&limit=${limit}&skip=${skip}`;
  try {
    const response = await request(GET, PAGINATED_CONTENTFUL_URL);

    return response.items;
  } catch (e) {
    console.log("getAllArticles failed:", e);
  }
};

//Grab the articles with the feature attribute set to true
export const getFeaturedArticles = async () => {
  const FEATURED_CONTENTFUL_URL = `https://cdn.contentful.com/spaces/6fmuqje9nkz0/environments/master/entries?access_token=yNcU-W6qITUmC18PRtK6Gyy32Vy7oGLRAWzW-2zyUaM&content_type=blog-entry&fields.featured=true`;
  try {
    const response = await request(GET, FEATURED_CONTENTFUL_URL);
    
    return response.items;
    
  } catch (e) {
    console.log("getAllArticles failed:", e);
  }
};

//Grab the articles by category
export const getArticlesByCategory = async (category) => {
  
  //Added the [match] operator to the query so that it will retrieve the entries that had the escaped quotes in the category.
  const FEATURED_CONTENTFUL_URL = `https://cdn.contentful.com/spaces/6fmuqje9nkz0/environments/master/entries?access_token=yNcU-W6qITUmC18PRtK6Gyy32Vy7oGLRAWzW-2zyUaM&content_type=blog-entry&fields.category[match]="${category}"`;
  try {
    const response = await request(GET, FEATURED_CONTENTFUL_URL);
    
    return response.items;
    
  } catch (e) {
    console.log("getAllArticles failed:", e);
  }
};

// TODO: Using the category argument, update the method below by making a GET
//       request and returning entries from contentful filtered by the category.
//       NOTE: this method will need to be connected to ../contexts/Store!

// Possibly useful documentation:
// - https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters
// - https://www.contentful.com/developers/docs/references/content-management-api/#/reference/entries/entries-collection/get-all-entries-of-a-space/console
// - https://www.contentful.com/developers/docs/references/content-delivery-api/#/introduction/collection-resources-and-pagination
