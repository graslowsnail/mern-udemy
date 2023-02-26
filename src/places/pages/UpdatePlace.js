import React from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/FormElements/Input';
import Button from '../../shared/FormElements/Button';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import './PlaceForm.css';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire state building',
        description: 'one of the most famous sky scrapers in the world!',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTcav7lx2vlOKnydSmtVSdbF51RJtIAEX_Q&usqp=CAU',
        address: '20 W 34th St., New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Empire state building',
        description: 'one of the most famous sky scrapers in the world!',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTcav7lx2vlOKnydSmtVSdbF51RJtIAEX_Q&usqp=CAU',
        address: '20 W 34th St., New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u2'
    }
];



const UpdatePlace = () => {
    const placeId = useParams().placeId;

    const identifiedPalce = DUMMY_PLACES.find(p => p.id === placeId);

    const [formState, inputHandler] = useForm(
        {
            title: {
                value: identifiedPalce.title,
                isValid: true
            },
            description: { 
                value: identifiedPalce.description,
                isValid: true
            }
    }, true);

    const placeUpdateSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs);
    };

    if(!identifiedPalce) {
        return (
            <div className='center'>
                <h2>Could not find place!</h2>
            </div>
        );
    };

    return (
        <form className='place-form' onSubmit={placeUpdateSubmitHandler}>
            <Input 
                id='title'
                element='input' 
                type='text' 
                label='Title' 
                validators={[ VALIDATOR_REQUIRE() ]}
                errorText= 'please enter a valid title.'
                onInput ={inputHandler}
                initialValue={formState.inputs.title.value}
                initialValid={formState.inputs.title.isValid}
            />

            <Input 
                id='description'
                element='textarea' 
                label='Description' 
                validators={[ VALIDATOR_MINLENGTH(5) ]}
                errorText= 'please enter a valid description (min. 5 characters).'
                onInput ={inputHandler}
                initialValue={formState.inputs.description.value}
                initialValid={formState.inputs.description.isValid}
            />
            <Button type='submit' disabled={!formState.isValid}>
                UPDATE PLACE
            </Button>
        </form>
    );
};

export default UpdatePlace;
