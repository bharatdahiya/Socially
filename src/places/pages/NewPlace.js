import React, { useCallback, useReducer } from 'react';
import './NewPlace.css';
import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/components/Util/validators';
import Button from '../../shared/components/FormElements/Button';

const formReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid }
        },
        isValid: formIsValid
      }
    default:
      return state;
  }
}
const NewPlace = () => {

  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      title: {
        value: '',
        isValid: false
      },
      description: {
        value: '',
        isValid: false
      }
    },
    isValid: false
  });

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({ type: 'INPUT_CHANGE', inputId: id, value: value, isValid: isValid })
  }, []);

  const onSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
  }

  return <form className="place-form" onSubmit={onSubmitHandler}>
    <Input type="text"
      id='title'
      label="Title"
      element="input"
      validators={[VALIDATOR_REQUIRE]}
      errorText="Please enter valid title."
      onInput={inputHandler} />
    <Input
      id='address'
      label="Address"
      element="input"
      type="text"
      validators={[VALIDATOR_REQUIRE]}
      errorText="Please enter valid address."
      onInput={inputHandler} />
    <Input
      id='description'
      label="Description"
      element="textarea"
      validators={[VALIDATOR_MINLENGTH(5)]}
      errorText="Please enter description (min length of 5 characters)."
      onInput={inputHandler} />
    <Button type="submit" disabled={!formState.isValid} >Add Place</Button>
  </form>
};

export default NewPlace;