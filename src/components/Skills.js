import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SkillsForm from './SkillsForm';
import ProgressBar from './ProgressBar';
import { fetchSkills, addSkill } from '../redux/skillsSlice';
import '../assets/styles/App.css';

const Skills = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.skills);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newSkills, setNewSkills] = useState([]);
  const [beginner, setBeginner] = useState(0);
  const [proficient, setProficient] = useState(0);
  const [expert, setExpert] = useState(0);
  const [master, setMaster] = useState(0);

  useEffect(() => {
    dispatch(fetchSkills());
  }, [dispatch]);

  useEffect(() => {
    const storedSkills = localStorage.getItem('skills');
    if (storedSkills) {
      try {
        const parsedSkills = JSON.parse(storedSkills);
        dispatch({ type: 'skills/setData', payload: parsedSkills });
      } catch (error) {
        console.error('Error parsing skills data:', error);
      }
    }
  }, [dispatch]);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  const handleAddSkill = (newSkill) => {
    dispatch(addSkill(newSkill));
    setNewSkills((prevSkills) => [...prevSkills, newSkill]);
    updateSkillLevels(newSkill.range);
  };

  const updateSkillLevels = (range) => {
    if (range >= 10 && range < 40) {
      setBeginner(beginner + 1);
    } else if (range >= 40 && range < 70) {
      setProficient(proficient + 1);
    } else if (range >= 70 && range < 90) {
      setExpert(expert + 1);
    } else if (range >= 90 && range <= 100) {
      setMaster(master + 1);
    }
  };

  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <button onClick={handleOpenForm} className="btn-openSkills">Open Edit</button>
      {isFormOpen && <SkillsForm onClose={handleCloseForm} onAddSkill={handleAddSkill} />}
      {status === 'loading' && <p>Loading skills...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && (
        <div>
          <div className="liners">
            <span className="liner1"></span>
            <span className="liner2"></span>
            <span className="liner3"></span>
          </div>
          <div className="skills-stats">
            <div className="skill-stat skill-stat1">Beginner</div>
            <div className="skill-stat skill-stat2">Proficient</div>
            <div className="skill-stat skill-stat3">Expert</div>
            <div className="skill-stat skill-stat4">Master</div>
          </div>
          <ul className="skills-list">
            {data && newSkills && data.concat(newSkills).map((skill, index) => (
              <li key={index}>
                {skill && (
                  <ProgressBar isVisible={!isFormOpen} progress={skill.range} skillName={skill.name} />
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Skills;