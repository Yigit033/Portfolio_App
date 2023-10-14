import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:111-111-1111'>111-111-1111</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='yigittilaver2000@gmail.com'>yigittilaver2000@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialContainer>
        <CompanyContainer>
          <Slogan> Innovstion and Wiev by Yiğit TİLAVER </Slogan>
        </CompanyContainer>
        <SocialIcons href='https://github.com'>
        <AiFillGithub size="4rem"/>
      </SocialIcons>

      <SocialIcons href='https://linkedin.com'>
        <AiFillLinkedin size="4rem"/>
      </SocialIcons>

      <SocialIcons href='https://instagram.com'>
        <AiFillInstagram size="4rem"/>
      </SocialIcons>
      </SocialContainer>
    </FooterWrapper>
  );
};

export default Footer;
