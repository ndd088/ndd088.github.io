import React, { useState } from 'react';
import FormSection from './FormSection';
import { useDispatch, useSelector } from 'react-redux';
import { handleToggleForm, submitForm } from '../redux/formSlice'; 
const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    job: '',
    conditions: '',
    file: null,
  });
  const [formErrors, setFormErrors] = useState({
    nameError: '',
    jobError: '',
    conditionsError: '',
  });
  const isFormOpen = useSelector((state) => state.form.isFormOpen);
  const dispatch = useDispatch();

  const toggleForm = () => { 
    dispatch(handleToggleForm());
  };

  const handleInputChange = (e, field) => {
    const value = e.target.value;
    setFormData({ ...formData, [field]: value });
    setFormErrors({ ...formErrors, [`${field}Error`]: value.length < 4 ? `${field} must be at least 4 characters` : '' });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.length < 4 || formData.job.length < 4 || !formData.conditions.match(/\d{3}/)) {
      setFormErrors({
        nameError: formData.name.length < 4 ? 'Name must be at least 4 characters' : '',
        jobError: formData.job.length < 4 ? 'Job must be at least 4 characters' : '',
        conditionsError: !formData.conditions.match(/\d{3}/) ? 'Conditions must contain at least three digits' : '',
      });
    } else {
      dispatch(submitForm(formData));
      setFormData({ name: '', job: '', conditions: '', file: null });
      setFormErrors({ nameError: '', jobError: '', conditionsError: '' });
    }
  };

  return (
    <FormSection
      isFormOpen={isFormOpen}
      toggleForm={toggleForm} 
      formData={formData}
      formErrors={formErrors}
      handleInputChange={handleInputChange}
      handleFileChange={handleFileChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default Form;
