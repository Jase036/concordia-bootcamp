import React, { useContext } from "react";
import { StoreContext } from "../../contexts/Store";
import styled from "styled-components";



const Categories = () => {
    const {articles} = useContext(StoreContext)
    
    //Push all the categories in the articles to an array then filter for unique categories.
    let categories= [];
    articles.map((article) => categories.push(article.fields.category));
    let filteredCategoryArray = categories.filter((e, i, s) => s.indexOf(e) === i);
    
    console.log(filteredCategoryArray)
    
    return (
        <>
            {filteredCategoryArray.map((category, index) => {
                return (
                    <CategoryButton key={index}>{category}</CategoryButton>
                    )
                })
            }
        </>
        
    )
}

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