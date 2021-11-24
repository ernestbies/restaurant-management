import styled, {keyframes} from 'styled-components';

export const ProductFormWrapper = styled.div`
    flex: 1; 
    display: flex;
    align-items: center;
    justify-content: center;   
    margin-left: 10px;
    
    @media screen and (orientation:portrait) {
        order: 1;
        margin-top: 30px;
        margin-left: 0;
    }
`;

export const StyledForm = styled.form`
    max-width: 480px;
    min-height: 530px;  
    background-color: white;  
    margin: 0 auto;
    border: 1px solid black;  
    border-radius: 10px; 
    margin-top: 30px;
    margin-bottom: 100px;
    position: relative;
    width: 95%;
    
    @media (max-width: 480px) {
        scale: 0.95;
    }
`;

export const FormHeader = styled.p`
    display: inline-block;
    font-size: 30px;
    color: black;
    font-family: Indie Flower, serif; 
    margin-left: 20px;
`;

export const FormSubheader = styled.p`
    display: inline-block;
    font-size: 11px;
    color: gray;
    font-family: Indie Flower, serif; 
    margin-top: 20px;
    margin-right: 20px;
`;

export const ColoredStatus = styled.span`
    color: ${({color}) => color};
    font-weight: bold;
`;

const show = keyframes`
    0% {
        opacity: 0;
    }
    
    100% {
        opacity: 1;
    }
`;

export const FoodImage = styled.img`
    width: 60px;
    height: 60px;
    position: absolute;
    top: 15px;
    right: 15px;
    animation: ${show} 4s;
`;

export const FormContent = styled.div`
    margin-left: 20px;
`;

export const StyledRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const FormLabel = styled.label`
    font-size: 20px;
    color: black;
    font-family: Indie Flower, serif;
    margin-right: 15px;
    margin-top: 15px;
`;

export const FormInput = styled.input`
    height: 20px;
    margin-right: 20px;
    border: 0;
    border-bottom: 1px solid black;
    font-size: 20px;
    color: black;
    font-family: Indie Flower, serif;
    width: ${({width}) => width}px;
    
    &:focus {
         outline: none;
    }
`;

export const FormSelect = styled.select`
    font-family: ${({fontFamily}) => fontFamily ?? 'Indie Flower'}, serif;
    margin-top: 10px;
`;

export const StyledOption = styled.option``;

export const FormButton = styled.button`
    cursor: pointer;
    width: 100px;
    height: 30px;
    font-family: Indie Flower, serif;
    font-weight: bold;
    font-size: 15px;
    color: white;
    background-color: ${({butType}) => butType === 'clear' ? 'red' : 'dodgerblue'};
    border: 0;
    border-radius: 25px;
    margin: 5px;
    right: ${({butType}) => butType === 'clear' ? '130px' : '20px'}; 
    
    &:disabled {
        cursor: auto;
        opacity: 0.5;
    }
`;

export const StyledSpan = styled.span`
    font-size: 10px;
    color: black;
    font-family: Indie Flower, serif;
    margin-right: 15px;
    white-space: pre-wrap;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    margin-top: 30px;
    margin-right: 30px;
`;
