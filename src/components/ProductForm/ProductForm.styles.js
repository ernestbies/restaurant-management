import styled, {keyframes} from 'styled-components';

export const ProductFormWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
`;

export const StyledForm = styled.form`
    max-width: 400px;
    height: 530px;  
    background-color: white;  
    margin: 0 auto;
    border: 1px solid black;  
    border-radius: 10px; 
    position: relative;
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

export const StyledText = styled.p`
    user-select: none;
    font-size: 15px;
    letter-spacing: 2px;
    color: dodgerblue;
    font-family: Indie Flower, serif;
    margin-right: 15px;
    border-bottom: 2px solid dodgerblue;
    position: absolute;
    bottom: 20px;
    left: 20px;  
`;

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
    position: absolute;
    bottom: 30px;
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
