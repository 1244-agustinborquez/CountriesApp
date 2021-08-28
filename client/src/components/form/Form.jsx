import React from 'react';
import {FormContent,TitleForm,InputForm,ButtomForm,ErrorP,SelectForm,OptionForm} from './StyledForm';
import { useDispatch } from "react-redux";
import {postActivity} from '../../Redux-actions/Actions';
import swal from 'sweetalert';
function Form(props) {
    const dispatch = useDispatch();

    const validate = (input) => {
        let errors = {};
        if (!input.name || !input.dificultad || !input.duracion || !input.temporada ){
            errors.name = "Complete all the fields."
        }else{
            errors.name = null
        }
        return errors;
    };
    function handleInputChange(e) {
        props.setState(states => {
            return {
                ...states,
                [e.target.name]: e.target.value
            }
        })
        let objError = validate({ ...props.state, [e.target.name]: e.target.value });
        props.setNewErrors(objError);
    }
    function handleOnSubmit(e) {
        e.preventDefault();
        if (!props.state.name || !props.state.dificultad || !props.state.duracion || !props.state.temporada ) {
            //alert("Complete all the fields.")
            swal({
                title: 'Complete all the fields.',
                text: 'form fields cannot be empty',
                icon: 'error',
                buttons: 'to accept',
            })
        }else{
            dispatch(postActivity(props.state))
            swal({
                title: 'Your Create A Activity',
                text: 'Your activity has already been created successfully',
                icon: 'success',
                buttons: 'to accept'
            })
           // alert("Your Create A Activity")
        }
        
    }
    return (
        <FormContent onSubmit={(e) => handleOnSubmit(e)}>
            <TitleForm>Create A New Activity</TitleForm>
            {(props.newErrors.name || props.newErrors.dificultad || props.newErrors.duracion || props.newErrors.temporada) 
            && <ErrorP className="danger">{props.newErrors.name} </ErrorP>}
            <InputForm
            type="text" 
            name="name" 
            value={props.state.name} 
            onChange={(e) => handleInputChange(e)}
            autoComplete="off"
            placeholder='Name Activity...'
            />
            <InputForm
            type="number" 
            name="dificultad" 
            value={props.state.dificultad} 
            onChange={(e) => handleInputChange(e)}
            autoComplete="off"
            placeholder='Difficulty...' 
            min = '1'
            max = '5'
            />
            <InputForm
            type="number" 
            name="duracion" 
            value={props.state.duracion} 
            onChange={(e) => handleInputChange(e)}
            autoComplete="off"            
            placeholder='Duration(Min)...'
            />
            <SelectForm  name='temporada' onChange={(e) => handleInputChange(e)}>
                <OptionForm value="Verano">Verano</OptionForm>
                <OptionForm value="Invierno">Invierno</OptionForm>
                <OptionForm value="Primavera">Primavera</OptionForm>
                <OptionForm value="Otoño">Otoño</OptionForm>
            </SelectForm>
            <ButtomForm type='submit'>Save...</ButtomForm>
        </FormContent>
    )
}

export default Form
