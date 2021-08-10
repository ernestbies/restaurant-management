import React, {useEffect, useState} from "react";
import {
    FormContent,
    FormLabel,
    FormInput,
    FormHeader,
    FoodImage,
    StyledForm,
    StyledRow,
    FormSelect, StyledOption, FormButton, FormSubheader, ColoredStatus, StyledSpan
} from "./ProductForm.styles";
import {addProduct} from "../../helpers/fetchData";

export const formStatusList = {
    preparation: {
        text: 'Fill in the required fields and add the dish.',
        color: 'gray'
    },
    success: {
        text: 'The dish has been added successfully.',
        color: 'green'
    },
    error: {
        text: 'There was an error adding the dish.',
        color: 'red'
    },
    clear: {
        text: 'All fields have been cleared. Please re-enter dish details.',
        color: 'black'
    }
}

const ProductForm = () => {

    const [type, setType] = useState('pizza');
    const [name, setName] = useState('');
    const [preparationTime, setPreparationTime] = useState('');
    const [noOfSlices, setNoOfSlices] = useState(1);
    const [diameter, setDiameter] = useState(1);
    const [spicinessScale, setSpicinessScale] = useState(1);
    const [slicesOfBread, setSlicesOfBread] = useState(1);

    const [status, setStatus] = useState(formStatusList.preparation);
    useEffect(() => {
        setStatus(formStatusList.preparation);
        clear();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [type]);

    const generateSpicinessScale = () => {
        let view = [];
        for(let i = 1; i < 11; i++) {
            view.push(<StyledOption key={i} value={i}>{i}</StyledOption>);
        }
        return view;
    }

    const clear = (statusType) => {
        statusType === 'add' && setStatus(formStatusList.success);
        statusType === 'clear' && setStatus(formStatusList.clear);
        setName('');
        setPreparationTime('');
        setNoOfSlices(1);
        setDiameter(1);
        setSpicinessScale(1);
        setSlicesOfBread(1);
    }

    const add = () => {
        let defaultFields = {name: name, preparation_time: preparationTime, type: type};
        let payload = {};

        switch (type) {
            case 'pizza':
                payload = Object.assign({}, defaultFields, {no_of_slices: noOfSlices, diameter: Number(diameter)});
                break;
            case 'soup':
                payload = Object.assign({}, defaultFields, {spiciness_scale: spicinessScale});
                break;
            case 'sandwich':
                payload = Object.assign({}, defaultFields, {slices_of_bread: slicesOfBread});
                break;
            default:
                console.error('Wrong type');
        }

        addProduct(payload).then((res) => {
            if(res.status === 201) {
                clear('add')
            } else {
                setStatus(formStatusList.error);
            }
        }).catch(() => setStatus(formStatusList.error));
    }

    const allowOnlyNumbers = (evt, floatNumbers = false) => {
        const keyCodes = evt.keyCode !== 8 && evt.keyCode !== 37 && evt.keyCode !== 39 &&
            evt.keyCode !== 48 && evt.keyCode !== 38 && evt.keyCode !== 40;

        const number = !parseInt(evt.key);

        const dot = evt.key !== '.';

        if(floatNumbers ? keyCodes && number && dot : keyCodes && number) {
            evt.preventDefault();
        }
    }

    const setValue = (event, type) => {
        const value = event.target.value;
        switch (type ) {
            case 'no_of_slices':
                setNoOfSlices(value);
                break;
            case 'diameter':
                if(/^\d*\.?\d*$/.test(value)) {
                    setDiameter(value);
                } else {
                    event.preventDefault();
                }
                break;
            case 'spiciness_scale':
                setSpicinessScale(value);
                break;
            case 'slices_of_bread':
                setSlicesOfBread(value);
                break;
            default:
                console.error('Wrong type.');
        }
    }

    const validateForm = () => {
        const basicValidation = type && name && preparationTime;
        switch (type) {
            case 'pizza':
                return basicValidation && noOfSlices && diameter;
            case 'soup':
                return basicValidation && spicinessScale;
            case 'sandwich':
                return basicValidation && slicesOfBread;
            default:
                console.error('Wrong type');
        }
    }

    return (<StyledForm name={'add-dish'}>
        <FormHeader>{'Dish add form'}</FormHeader><br/>
        <FoodImage src={'/' + type + '.png'} key={type}/>
        <FormContent>
            <StyledRow>
                <FormLabel htmlFor={'type'}>{'Dish type: '}</FormLabel>
                <FormSelect required onChange={(event) => setType(event.target.value)} value={type}>
                    <StyledOption value={'pizza'}>{'Pizza'}</StyledOption>
                    <StyledOption value={'soup'}>{'Soup'}</StyledOption>
                    <StyledOption value={'sandwich'}>{'Sandwich'}</StyledOption>
                </FormSelect>
            </StyledRow>
            <StyledRow>
                <FormLabel htmlFor={'name'} type={'text'}>{'Dish name: '}</FormLabel>
                <FormInput required onChange={(event) => setName(event.target.value)} value={name} id={'name'} width={200}/>
            </StyledRow>
            <StyledRow>
                <FormLabel htmlFor={'preparation_time'}>{'Preparation time: '}</FormLabel>
                <FormInput required onChange={(event) => setPreparationTime(event.target.value)}
                           type={'time'} id={'preparation_time'} pattern={'[0-9][0-9]:[0-9][0-9]:[0-9][0-9]'}
                           value={preparationTime} min={'00:00:00'} max={'99:59:59'} step={1} width={80}/>
                <StyledSpan>{'(Valid format:\nHH : mm : ss)'}</StyledSpan>
            </StyledRow>
            {
                type === 'pizza' &&
                <>
                    <StyledRow>
                        <FormLabel htmlFor={'no_of_slices'}>{'Number of slices: '}</FormLabel>
                        <FormInput required onChange={(e) => setValue(e, 'no_of_slices')}
                                   onKeyDown={allowOnlyNumbers}
                                   min={1} type={'number'} id={'no_of_slices'} value={noOfSlices} width={100}/>
                    </StyledRow>
                    <StyledRow>
                        <FormLabel htmlFor={'diameter'}>{'Diameter: '}</FormLabel>
                        <FormInput required onChange={(e) => setValue(e, 'diameter')}
                                   type={'text'} id={'diameter'} value={diameter} width={100}/>
                        <StyledSpan>{'(Valid format:\nfloating point number)'}</StyledSpan>
                    </StyledRow>
                </>
            }
            {
                type === 'soup' &&
                <>
                    <StyledRow>
                        <FormLabel htmlFor={'spiciness_scale'}>{'Spiciness scale: '}</FormLabel>
                        <FormSelect required onChange={(e) => setValue(e, 'spiciness_scale')} value={spicinessScale}>
                            {generateSpicinessScale()}
                        </FormSelect>
                    </StyledRow>
                </>
            }
            {
                type === 'sandwich' &&
                <>
                    <StyledRow>
                        <FormLabel htmlFor={'slices_of_bread'}>{'Slices of bread: '}</FormLabel>
                        <FormInput required onChange={(e) => setValue(e, 'slices_of_bread')}
                                   onKeyDown={allowOnlyNumbers}
                                   type={'number'} id={'slices_of_bread'} value={slicesOfBread} width={100}/>
                    </StyledRow>
                </>
            }
            <FormSubheader>{'Fill in all the required fields and then press the `Add dish` button to add dish or the `Clear` button to reset the entered data.'}</FormSubheader>
            <FormSubheader>{'Current form status: '}<ColoredStatus color={status.color}>{status.text}</ColoredStatus></FormSubheader>
            <FormButton onClick={() => clear('clear')} type={'button'} butType={'clear'}>{'- Clear data'}</FormButton>
            <FormButton disabled={!validateForm()} onClick={() => add()} type={'button'} butType={'add'}>{'+ Add dish'}</FormButton>
        </FormContent>
    </StyledForm>);
};

export default ProductForm;
