import React from 'react';
import { nanoid } from "nanoid";
import { FormContainer, Input, Label } from "components/Form/Form.styled";
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';

export const Filter = ({ value }) => {
   const dispatch = useDispatch();
   const filterId = nanoid();  
return (
      <FormContainer>
        <Label htmlFor={filterId}>Find contacts by name</Label>
        <Input
      id={filterId}
      type="text"
      name="filter"
      value={value}
      onChange={evt =>
        dispatch(changeFilter(evt.target.value.toLowerCase()))
      }
        />
      </FormContainer>
    );
  }

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

