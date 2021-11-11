import React from "react";
import styled from "styled-components";

//Let's render the individual cards
const ArticleCard = ({articleInfo}) => {

    //get a random id number for the placeholder images from Loren Picsum
    const imgNum = Math.floor(Math.random() * (1045 - 1035 + 1) + 1035)


    return (
        <Wrapper aria-label="Article card" tabIndex='0'>
            <Image src={`https://picsum.photos/id/${imgNum}/560/300`} alt='placeholder' />
            <Title>{articleInfo.title}</Title>
            <Category>{articleInfo.category.replace(/"/g, '')}</Category>
        </Wrapper>
    )

}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #fff;
    max-width: 510px;
    border: 1px solid white;
    margin: 20px 10px 0 0;
    transition: all ease-in-out 200ms;
&:hover {
    box-shadow: 0 0 10px #aaa;
    background-color: #eee;
    cursor: pointer;
}
`

const Image = styled.img`
    max-width: 510px;
`
const Title = styled.h2`
    font-style: bold;
    font-size: 24px;
    margin: 20px;
`

const Category = styled.p`
    font-style: italic;
    font-size: 12px;
    margin: 0 0 20px 20px;
`
export default ArticleCard;