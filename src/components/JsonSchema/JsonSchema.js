import React from "react";
import {StyledJson, Code, JsonContent, CodeValue} from "./JsonSchema.styles";
import {StyledSpan, StyledTitle, TitleWrapper} from "../Alert/Alert.styles";
import {StyledLogo} from "../Header/Header.styles";

const JsonSchema = () => {
    return (<StyledJson>
        <TitleWrapper style={{marginRight: 5}}>
            <StyledLogo src={'/restaurant.png'} style={{margin: 0}} height={16} width={16}/>
            <StyledTitle>{'RMS'}<StyledSpan>{' JSON schema'}</StyledSpan></StyledTitle>
        </TitleWrapper>
        <JsonContent>
            <Code>{'{'}</Code>
            <Code jsonVar>{'"id": '}
                <CodeValue>{'"507f1f77bcf86cd799439011"'}</CodeValue>
                <CodeValue color={'grey'}>{' ObjectID'}</CodeValue>
            </Code>
            <Code jsonVar>{'"name": '}
                <CodeValue>{'"Pizza pepperoni"'}</CodeValue>
                <CodeValue color={'green'}>{' String'}</CodeValue>
            </Code>
            <Code jsonVar>{'"preparation_time": '}
                <CodeValue>{'"00:35:00"'}</CodeValue>
                <CodeValue color={'blue'}>{' String [format HH:mm:ss]'}</CodeValue>
            </Code>
            <Code jsonVar>{'"type": '}
                <CodeValue>{'"pizza"'}</CodeValue>
                <CodeValue color={'red'}>{' String [pizza, soup, sandwich]'}</CodeValue>
            </Code>
            <Code jsonVar>{'"no_of_slices": '}
                <CodeValue>{'"12"'}</CodeValue>
                <CodeValue color={'orange'}>{' Number [Integer] {pizza}'}</CodeValue>
            </Code>
            <Code jsonVar>{'"diameter": '}
                <CodeValue>{'"30.5"'}</CodeValue>
                <CodeValue color={'darkgreen'}>{' Number [Float] {pizza}'}</CodeValue>
            </Code>
            <Code jsonVar>{'"spiciness_scale": '}
                <CodeValue>{'"8"'}</CodeValue>
                <CodeValue color={'darkblue'}>{' Number [0..10] {soup}'}</CodeValue>
            </Code>
            <Code jsonVar>{'"slices_of_bread": '}
                <CodeValue>{'"4"'}</CodeValue>
                <CodeValue color={'darkviolet'}>{' Number [Integer] {sandwich}'}</CodeValue>
            </Code>
            <Code style={{marginBottom: 15}}>{'}'}</Code>
        </JsonContent>
    </StyledJson>);
};

export default JsonSchema;
