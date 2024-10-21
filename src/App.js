// src/App.js
import React from 'react';
import styled from 'styled-components';
import logo from "./logo.svg";
import "./App.css";
import MyFirstComponent from "./MyFirstComponent";
import Header from "./Header";
import Post from "./Post";
import SideMenu from "./SideMenu";

// Styled components
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const PostsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`
const ContentWrapper = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
`;
const PostsSection = styled.div`
  width: 70%;
`;

const SideMenuSection = styled.div`
  width: 30%;
  margin-top: 25px;
 
`;


function App() {
  const posts = [
    {
      id: 1,
      postName: "أكاديمية ترميز",
      postBody: "أكاديمية مخصصة لتعليم البرمجة",
    },
    {
      id: 2,
      postName: "Hello",
      postBody: "This is the second body",
    },
    {
      id: 3,
      postName: "the third post",
      postBody: "This is the third body",
    },
    {
      id: 4,
      postName: "the third post",
      postBody: "This is the third body",
    },
  ];

  const postsList = posts.map((post) => {
    return <Post  key={post.id} postName={post.postName} />;
  });

  return (
    <AppContainer>
      <Header />

      {/* POSTS CONTAINER */}
      <PostsContainer>
        <ContentWrapper>
          {/* == POSTS CONTAINER == */}
          <PostsSection>
            {postsList}
          </PostsSection>

          <SideMenuSection>
            <SideMenu />
          </SideMenuSection>
        </ContentWrapper>
      </PostsContainer>
    </AppContainer>
  );
}

export default App;