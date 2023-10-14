import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { FaNode ,FaPython} from 'react-icons/fa';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';


const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider/>
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText> Ben Frond end ve back end olmak üzere iki tarafta da kendimi geliştirerek bir full stack developer olma yolunda ilerlemek istiyorum! </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>Experience with :<br/>
          React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaNode size="3rem"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>Experience with :<br/>
          Node.js <br/>
          Database
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle>Full Stack</ListTitle>
          <ListParagraph>Experience with :<br/>
          React.js <br/>
          Node.js <br/>
          Database          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaPython  size="3rem"/>
        <ListContainer>
          <ListTitle>Data Science</ListTitle>
          <ListParagraph>Experience with :<br/>
          C++ <br/>
          Python
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;

