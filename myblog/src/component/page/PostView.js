import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import CommentList from "../list/CommentList";
import Button from "../ui/Button";
import TextInput from "../ui/TextInput";
import data from '../../data.json';

const Wrapper = styled.div`
  padding: 16px;
  width: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;
  :not(:last-child) {
    margin-bottom: 16px;
  }
`;

const PostContainer = styled.div`
  padding: 8px 16px;
  border: 1px solid gray;
  border-radius: 8px;
`;

const TitleText = styled.p`
  font-size: 28px;
  font-weight: 500;
`;

const ContentText = styled.p`
  font-size: 20px;
  line-height: 32px;
  white-space: pre-wrap;
`;

const CommentLabel = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

function PostViewPage(props) {
  const navigate = useNavigate();
  const {postId} = useParams();
  const [comment, setComment] = useState("");

  const post = data.find( (item) => {
    return item.id === Number(postId);
  });

  return (
    <Wrapper>
      <Container>
        {/* 메인으로 돌아가기. */}
        <Button title='뒤로가기' onClick={ () => {
          navigate("/");
        }} />
      <PostContainer>
        <TitleText>{post.title}</TitleText>
        <ContentText>{post.content}</ContentText>
      </PostContainer>
      {/* 댓글 */}
      <CommentLabel>댓글</CommentLabel>
      <CommentList comments={post.comments} />
      {/* 댓글 작성. */}
      <TextInput height={40} value={comment} onChange={(event) => {
        setComment(event.target.value);
      }} />
      <Button title="댓글 작성" onClick={() => {
        console.log("comment", comment);
        navigate("/");
      }} />
      </Container>
    </Wrapper>
  );
}

export default PostViewPage;
