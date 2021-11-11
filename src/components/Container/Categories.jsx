import React, { useContext } from "react";
import { StoreContext } from "../../contexts/Store";
import styled from "styled-components";




const Categories = () => {
    const {articles, articlesByCategory} = useContext(StoreContext)
    
    //Push all the categories in the articles to an array then filter for unique categories.
    let categories= [];
    
    //added a replace method to filter out the couple of articles that had an escaped quote at the end.
    articles.map((article) => categories.push(article.fields.category.replace(/"/g, '')));
    let filteredCategoryArray = categories.filter((e, i, s) => s.indexOf(e) === i);
    
    
    
    return (
        <>
            <Wrapper>
                <CategoryButton>View All</CategoryButton>
                {filteredCategoryArray.map((category, index) => {
                    return (
                        <CategoryButton key={index} onClick={() =>{articlesByCategory(category)}}>{category}</CategoryButton>
                        )
                    })
                }
            </Wrapper>
        </>
        
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1100px;
`

const CategoryButton = styled.button`
    border:2px solid #c4e6f1;
    background-color: #c4e6f1;
    margin: 15px auto;
    border-radius: 30px;
    font-size: 15px;
    padding: 10px;
    margin: 15px;
&:hover {
    background-color: transparent;
}
`

export default Categories;