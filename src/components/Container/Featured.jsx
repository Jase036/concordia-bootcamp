import React, { useContext, useState } from "react";
import { StoreContext } from "../../contexts/Store";
import styled from "styled-components";

const Featured = () => {
    const {featuredArticle} = useContext(StoreContext)
    
    return (
        <Wrapper>
            <Image src={`https://picsum.photos/id/1042/560/300`} />
            <FeaturedContent>
                <FeaturedTitle>
                    {featuredArticle?.fields.title}
                </FeaturedTitle>
                <FeaturedShort>
        {/* Quick and dirty code to get an excerpt from the content. Should replace with a split and create the excerpt on word count instead of charcount */}
                {featuredArticle?.fields.content.substring(0,299) + '...'}
                </FeaturedShort>
                <ReadMore>
                    Read More
                </ReadMore>
            </FeaturedContent>
        </Wrapper>
    )
}

// 

const Wrapper = styled.div`
    
    max-width: 1168px;
    padding: 0 20px;
    margin: 0 auto;
    display: flex;
    padding: 30px;
    border-top: 2px solid #222;
    border-bottom: 2px solid #222;
    margin: 20px 10px 0 0;
`
const Image = styled.img`
    max-width: 510px;
    height: auto;
`
const FeaturedContent = styled.div`
    display:flex;
    flex-direction: column;
    margin-left: 30px;
`
const FeaturedTitle = styled.h2`
    font-size: 36px;
    font-weight: 700;
`
const FeaturedShort = styled.p`
    font-size: 14px;
    margin: 15px 0;
`
//Ideally this would be a NavLink or similar, but because we have no link, I'm simulating link like behaviour with hover pseudo-selector
const ReadMore = styled.p`
    font-size: 14px;
    width: 200px;

&:hover {
    color: #aaa;
    cursor: pointer;

}
`
export default Featured;