import React from 'react';
import {
  Title,
  Paragraf,
  BottomWrapper,
  TextContainer,
  Container,
  Btn,
} from './NotFoundPage.styled';
import { useNavigate } from 'react-router-dom';

function NotFoundPage() {
    const navigate = useNavigate();
  
    return (
      <Container>
        <TextContainer>
          <Title>
            <Paragraf> This page not found</Paragraf>
          </Title>
        </TextContainer>
        <BottomWrapper>
          <Btn type="button" onClick={() => navigate('/')}>
            To main page
          </Btn>
        </BottomWrapper>
      </Container>
    );
  }
  
  export default NotFoundPage;