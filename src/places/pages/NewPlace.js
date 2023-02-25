import React, { useCallback } from 'react';

import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';
import Input from '../../shared/FormElements/Input';
import './NewPlace.css';

const NewPlace = () => {
    const titleInputHandler = useCallback(( id,value, isValid ) => {
    }, []);

    const descriptionInputHandler = useCallback(( id,value, isValid ) => {
    }, []);

    return(
        <form className='place-form'>
            <Input 
                id='title'
                element='input' 
                type='text'
                label='Title'
                validators ={[ VALIDATOR_REQUIRE() ]}    
                errorText='please enter a valid title.'
                onInput={titleInputHandler}
            />
            <Input 
                id='description'
                element='text' 
                type='Description'
                label='Title'
                validators ={[ VALIDATOR_MINLENGTH(5) ]}    
                errorText='please enter a valid description (atlease 5 characters long).'
                onInput={descriptionInputHandler}
            />
        </form>
    );
};

export default NewPlace;
