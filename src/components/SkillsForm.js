import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import ProgressBar from './ProgressBar';
import { addSkill } from '../redux/skillsSlice';
import '../assets/styles/App.css';

const SkillsForm = ({ onClose, onAddSkill, visibleSkills }) => {
  const dispatch = useDispatch();
  const [progressBars, setProgressBars] = useState([]);

  const formik = useFormik({
    initialValues: {
      skillName: '',
      skillRange: '',
    },
    validate: (values) => {
      const errors = {};

      if (!values.skillName.trim()) {
        errors.skillName = 'Skill name is a required field';
      }

      if (!values.skillRange) {
        errors.skillRange = 'Skill range is a required field';
      } else if (Number.isNaN(Number(values.skillRange))) {
        errors.skillRange = 'Skill range must be a number';
      } else if (Number(values.skillRange) < 10) {
        errors.skillRange = 'Skill range must be greater than or equal to 10';
      } else if (Number(values.skillRange) > 100) {
        errors.skillRange = 'Skill range must be less than or equal to 100';
      }

      return errors;
    },
    onSubmit: async (values, { resetForm }) => {
      await dispatch(addSkill(values));
      resetForm();
      onAddSkill(values);
      setProgressBars([...progressBars, values]);
    },
  });

  return (
    <div className="skills-form">
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="skillName">Skill name:</label>
          <input
            type="text"
            id="skillName"
            name="skillName"
            placeholder="Enter skill name"
            onChange={formik.handleChange}
            value={formik.values.skillName}
          />
          {formik.errors.skillName && <div className="error">{formik.errors.skillName}</div>}
        </div>

        <div>
          <label htmlFor="skillRange">Skill range:</label>
          <input
            type="number"
            id="skillRange"
            name="skillRange"
            placeholder="Enter skill range"
            onChange={formik.handleChange}
            value={formik.values.skillRange}
            max="100"
          />
          {formik.errors.skillRange && <div className="error">{formik.errors.skillRange}</div>}
        </div>

        {formik.errors.submit && <div className="error">{formik.errors.submit}</div>}

        <button type="submit" disabled={!formik.isValid}>
          Add skill
        </button>
      </form>

      {progressBars.map((skill, index) => (
        <ProgressBar key={index} progress={skill.skillRange} isVisible={true} skillName={skill.skillName} />
      ))}
    </div>
  );
};

export default SkillsForm;