import Navbar from "../../parts/Navbar/Navbar";
import Footer from "../../parts/Footer/Footer";
import React from "react";
import Header from "../../components/Header/Header";
import {MenuContainer} from "../../components/Menu/Menu.styles";
import {Quote} from "../../components/Quote/Quote";
import SiteContent from "../../components/SiteContent/SiteContent";
import {Link} from "react-router-dom";
import {StyledButton} from "../../components/StyledButton/StyledButton";
import {Logo} from "../../components/Logo/Logo";
import {
    AnswerText,
    FaqContainer,
    FaqRow,
    FaqTitle,
    StyledRow,
    QuestionText,
    QuestionId,
    QuestionIdWrapper, FaqItem
} from "./Faq.styles";
import {faqQuestionsAnswers} from "./faqQuestionsAnswers";
import {ColoredSpan} from "../../components/Alert/Alert.styles";
import JsonSchema from "../../components/JsonSchema/JsonSchema";
import HttpQueryContainer from "../../components/HttpQueryContainer/HttpQueryContainer";

const Faq = () => {

    const renderFaq = () => {
        return faqQuestionsAnswers.map(e =>
            <FaqItem>
                <StyledRow key={e.id}>
                    <QuestionIdWrapper>
                        <QuestionId>{e.id + '. '}</QuestionId>
                    </QuestionIdWrapper>
                    <FaqRow>
                        <QuestionText><ColoredSpan>{'Q: '}</ColoredSpan>{e.question}</QuestionText>
                        <AnswerText><ColoredSpan>{'A: '}</ColoredSpan>{e.answer}</AnswerText>
                    </FaqRow>
                </StyledRow>
                {e.id === 3 && <JsonSchema/>}
                {e.id === 4 && <HttpQueryContainer/>}
            </FaqItem>
        );
    };

    return (
        <SiteContent>
            <Navbar/>
            <MenuContainer>
                <Header/>
                <FaqTitle>{'Frequently Asked Questions (FAQ)'}</FaqTitle>
                <FaqContainer>
                    {renderFaq()}
                </FaqContainer>
                <Link to={'/'} style={{marginTop: 50, marginBottom: 120}}>
                    <StyledButton fontSize={13}>{'BACK TO THE MAIN PAGE'}</StyledButton>
                </Link>
                <Logo/>
                <Quote/>
            </MenuContainer>
            <Footer/>
        </SiteContent>
    )
};

export default Faq;
