import React from 'react';
import {FormContent,TitleForm,InputForm,ButtomForm} from './StyledForm';
import { useDispatch } from "react-redux";
import {postActivity} from '../../Redux-actions/Actions';
function Form(props) {
    const dispatch = useDispatch();
    function handleInputChange(e) {
        props.setState(states => {
            return {
                ...states,
                [e.target.name]: e.target.value
            }
        })
    }
    function handleOnSubmit(e) {
        e.preventDefault();
        dispatch(postActivity(props.state))
        console.log(props.state);
        alert("Your Create A Activity")
    }
    return (
        <FormContent onSubmit={(e) => handleOnSubmit(e)}>
            <TitleForm>Create A New Activity</TitleForm>
            <InputForm
            type="text" 
            name="name" 
            value={props.state.name} 
            onChange={(e) => handleInputChange(e)}
            autoComplete="off"
            placeholder='Name Activity...'
            />
            <InputForm
            type="text" 
            name="dificultad" 
            value={props.state.dificultad} 
            onChange={(e) => handleInputChange(e)}
            autoComplete="off"
            placeholder='Difficulty...'
            />
            <InputForm
            type="text" 
            name="duracion" 
            value={props.state.duracion} 
            onChange={(e) => handleInputChange(e)}
            autoComplete="off"            
            placeholder='Duration...'
            />
            <InputForm
            type="text" 
            name="temporada" 
            value={props.state.temporada} 
            onChange={(e) => handleInputChange(e)}
            autoComplete="off"            
            placeholder='Duration...'            
            placeholder='Season...'
            />
            <ButtomForm type='submit'>Save...</ButtomForm>
        </FormContent>
    )
}

export default Form
