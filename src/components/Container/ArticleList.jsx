import React, { useContext, useState } from "react";
import { StoreContext } from "../../contexts/Store";
import ArticleCard from "./ArticleCard";
import styled from "styled-components";

//This will map through our article array to create the article list
const ArticleList = () => {
    
    const {paginatedArticles, paginationIndex, setPaginationIndex} = useContext(StoreContext)
    
    const handleLoadMore = () => {
        setPaginationIndex( paginationIndex + 1)
    }
    
        return (
        <>
            <Wrapper>
            {paginatedArticles.map((article) => {
                
                return <ArticleCard key={article.sys.id} articleInfo={article.fields}></ArticleCard>
            }) }
               
            </Wrapper>
            <ButtonWrapper><PaginationButton onClick={handleLoadMore}>Load More</PaginationButton></ButtonWrapper> 
        </>
    )

}


const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1100px;
`
const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;
    max-width: 1100px;
`
const PaginationButton = styled.button`
    margin: 15px auto;
    background-color: #ffefe2;
    color: #222;
    border: 1px solid #222;
    border-radius: 30px;
    width: 200px;
    font-size: 24px;
    padding: 10px;
    font-family: 'Playfair Display', serif;
    font-weight: 700;

&:hover {
    background-color: #222;
    color: #ffefe2;
}
`

export default ArticleList;