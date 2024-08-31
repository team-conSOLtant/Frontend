import React, { useCallback, useEffect, useState } from "react";

import styled from "styled-components";
import { useNavigate } from "react-router";
import {
  getPortfolios,
  postSaveAll,
  uploadImage,
} from "../../../apis/Portfolio";
import { useSelector } from "react-redux";
import {
  deleteComment,
  getComments,
  postComment,
  putComment,
} from "../../../apis/Comment";

const CommentComtrollerStyle = styled.div`
  position: fixed;
  right: 1rem;
  top: 60vh;
  width: 15%;
  border: 0.1rem solid #f5f5f5;
  border-radius: 0.5rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 4px rgb(0, 0, 0, 0.25);
  padding: 1rem 1rem;
`;
const CommentItem = styled.div`
  width: 100%;
  margin-top: 0.5rem;
`;

const CommentWriterName = styled.div``;
const CommentContent = styled.div`
  font-size: 0.8rem;
`;

const CommentInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
`;
const CommentInput = styled.input`
  width: 85%;
  height: 1.5rem;
  border: #c7c7c7 solid 0.05rem;
  border-radius: 2rem;
  padding-left: 0.5rem;
`;
const CommentInputSubmit = styled.div`
  border-radius: 50%;
  background-color: gray;
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 0.5rem;
  color: white;
  line-height: 2rem;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
`;
const CommentDeleteButton = styled.div`
  border-radius: 50%;
  background-color: red;
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 0.5rem;
  color: white;
  line-height: 1.2rem;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
`;

function CommentController({ userName, portid, portloginid }) {
  const navigate = useNavigate();

  let { loginid, portfolioid } = useSelector((state) => state.user);
  const [comments, setComments] = useState([]);
  const [CommentInputValue, setCommentInputValue] = useState();
  const [changedComment, setChangedComment] = useState();
  const [clickedComment, setClickedComment] = useState();

  useEffect(() => {
    getAllComment();
  }, []);

  useEffect(() => {
    if (comments.length > 0 && clickedComment) {
      setChangedComment(
        comments.filter((comment) => comment.id === clickedComment)[0].comment
      );
    }
  }, [clickedComment]);

  const getAllComment = async () => {
    const newData = await getComments(portid);
    setComments(newData);
  };

  const submitComment = async (comment) => {
    await postComment(portid, loginid, userName, comment);
    getAllComment();
  };

  const resubmitComment = async (comment) => {
    await putComment(clickedComment, comment);
    getAllComment();
    setClickedComment(null);
  };

  const _deleteComment = async () => {
    await deleteComment(clickedComment);
    setClickedComment(null);
    getAllComment();
  };

  const handlePortfolioId = async (dto) => {
    const portId = await getPortfolioId(dto.userId);
    navigate(`/portfolio/${portId}`, {
      state: { portloginid: dto.userId },
    });
  };

  const getPortfolioId = async (loginid) => {
    const newData = await getPortfolios(loginid);
    return newData.id;
  };

  return (
    <CommentComtrollerStyle>
      {comments.map((dto) => (
        <CommentItem>
          <CommentWriterName onClick={() => handlePortfolioId(dto)}>
            {dto.userName}
          </CommentWriterName>
          {clickedComment !== dto.id ? (
            <CommentContent onClick={() => setClickedComment(dto.id)}>
              {dto.comment}
            </CommentContent>
          ) : (
            <CommentInputContainer>
              <CommentInput
                value={changedComment}
                onChange={(e) => setChangedComment(e.target.value)}
              ></CommentInput>
              <CommentInputSubmit
                onClick={() => resubmitComment(changedComment)}
              >
                ^
              </CommentInputSubmit>
              {String(dto.userId) === String(loginid) && (
                <CommentDeleteButton onClick={_deleteComment}>
                  x
                </CommentDeleteButton>
              )}
            </CommentInputContainer>
          )}
        </CommentItem>
      ))}
      <CommentInputContainer>
        <CommentInput
          value={CommentInputValue}
          onChange={(e) => setCommentInputValue(e.target.value)}
        ></CommentInput>
        <CommentInputSubmit onClick={() => submitComment(CommentInputValue)}>
          ^
        </CommentInputSubmit>
      </CommentInputContainer>
    </CommentComtrollerStyle>
  );
}

export default CommentController;
