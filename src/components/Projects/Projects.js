import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';


// const ProjectDemo =  [{
//   title :"project1 ",
//   description: "Bu uzun bir tanımlama olacağı için sonradan yazacağım"
// },{
//   title :"project2 ",
//   description: "Bu uzun bir tanımlama olacağı için sonradan yazacağım"
// },{
//   title :"project3 ",
//   description: "Bu uzun bir tanımlama olacağı için sonradan yazacağım"
// },{
//   title :"project4 ",
  
//   description: "Bu uzun bir tanımlama olacağı için sonradan yazacağım"
// },{
//   title :"project5 ",
//   description: "Bu uzun bir tanımlama olacağı için sonradan yazacağım"
// },]

const Projects = (props) => (
  <Section nopadding id="projects">
    <SectionDivider/>
    <SectionTitle main> Projects </SectionTitle>
    <GridContainer>
      {projects.map(({title, description, image,  tags, source, visit, id}) => (
        <BlogCard key= {id}>
          <Img src={image}/>
          <TitleContent>
            <HeaderThree title={title}></HeaderThree>
            <Hr/>
          </TitleContent>
          <CardInfo>
            {description}
          </CardInfo>
          <div>
            <TitleContent> Stacks </TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key= {i}> {tag} </Tag>
              ))}
              <Tag></Tag>
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href= {visit}>Code</ExternalLinks>
            <ExternalLinks href = {visit}>Source</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>

  </Section>
);

export default Projects;