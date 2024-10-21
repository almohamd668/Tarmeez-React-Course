import styled from 'styled-components';
export default function Post({ postName = "no title", postBody = "no body" }) {

  const StPost = styled.div`     
        padding: 10px;
        border: solid teal 5px;
        background: white;
        margin: 25px;
        text-align: center;
        `
  return (
    <StPost

    >
      <h2>{postName}</h2>
      <hr />
      <p>{postBody}</p>
    </StPost>
  );
}
