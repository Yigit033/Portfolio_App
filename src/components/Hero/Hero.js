import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>  
      <SectionTitle main center>
        Kişisel Portföyüme <br/>
        Hoşgeldiniz
      </SectionTitle>
      <SectionText>
        Burada benim asıl amacım artık alışılmışın dışına çıkarak geleneksel cv türleri yerine dijital bir tanıtım kimliğim olarak sizlere sunabileceğim bir portföy oluşturmak istedim! 
      </SectionText>
      <Button onClick={() => window.location= "https://google.com/linkedin"}>Hakkımda Daha Fazla!</Button>
    </LeftSection>  
  </Section>
);

export default Hero;