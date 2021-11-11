import React, { useState, useEffect, useContext } from "react";
import { getAllArticles, getPaginatedArticles, getFeaturedArticles, getArticlesByCategory} from "../services/contentful";

export const StoreContext = React.createContext();

export const StoreProvider = ({ children }) => {
  const [featuredArticle, setFeaturedArticle] = useState(null);
  const [articles, setArticles] = useState([]);
  
  //create new state to store paginated articles
  const [paginatedArticles, setPaginatedArticles] = useState([]);
  
  //create new state to track pagination
  const [paginationIndex, setPaginationIndex] = useState(1)

  useEffect(() => {
    (async function fetchArticles() {
      setArticles(await getAllArticles());
    })();
  }, []);

  
  useEffect(() => {
    (async function fetchPaginatedArticles() {
      const limit=6;
      let skip= 6 * paginationIndex;
      
      //declare a variable to store the new fetch data
      const moreArticles = await getPaginatedArticles(limit, skip);
      
      //duplicate Array and concat the newly retrieved articles to the array
      let newpagArr=[...paginatedArticles].concat(moreArticles)
      
      //update state with concatenated array
      setPaginatedArticles(newpagArr)
    })();
  }, [paginationIndex]);  // We want the fetch to run when the paginationIndex changes


  useEffect(() => {
    (async function fetchFeautredArticles() {
      
      const featuredArray = (await getFeaturedArticles())
      
      //Map through the array and find the newest date then reduce to get the newest article
      new Date(Math.max(...featuredArray.map(article => new Date(article.fields.date.MeasureDate))))
      const newestFeatured = featuredArray.reduce((a, b) => {
          return new Date(a.MeasureDate) > new Date(b.MeasureDate) ? b : a;
        })

      setFeaturedArticle(newestFeatured);

    })();
  }, []);

  const articlesByCategory = async (category) => {
    const catArticles = await getArticlesByCategory(category);
    setPaginatedArticles(catArticles);
  }
   console.log (articles)

  return (
    <StoreContext.Provider
      value={{ featuredArticle, articles, paginationIndex, setPaginationIndex, paginatedArticles, articlesByCategory}}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
