import React from 'react';
import Button from './Button';
import '../assets/styles/App.css';

const FormSection = ({ isFormOpen, toggleForm, formData, formErrors, handleInputChange, handleFileChange, handleSubmit }) => {
  return (
    <div className="contact-form-container">
      <h2 className="contact-form-title">Want to offer me a job? Write me now!</h2>
      {!isFormOpen && (
        <Button className="toggle-form-button" text="Open contact form" onClick={toggleForm} />
      )}
      <form className={`contact-form ${isFormOpen ? 'visible' : ''}`} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Please, introduce yourself"
          value={formData.name}
          onChange={(e) => handleInputChange(e, 'name')}
          maxLength={250}
          required
        />
        {formErrors.nameError && <p className="error-message">{formErrors.nameError}</p>}
        <input
          type="text"
          placeholder="What job do you have for me?"
          value={formData.job}
          onChange={(e) => handleInputChange(e, 'job')}
          maxLength={250}
          required
        />
        {formErrors.jobError && <p className="error-message">{formErrors.jobError}</p>}
        <input
          type="text"
          placeholder="What conditions are you ready to offer me?"
          value={formData.conditions}
          onChange={(e) => handleInputChange(e, 'conditions')}
          maxLength={250}
          required
        />
        {formErrors.conditionsError && <p className="error-message">{formErrors.conditionsError}</p>}
        <input type="file" onChange={handleFileChange} />
        <Button text="Submit" type="submit" disabled={!formData.name || !formData.job || !formData.conditions} />
      </form>
    </div>
  );
};

export default FormSection;