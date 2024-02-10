import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEducations } from '../redux/educationsSlice';
import TimeLine from '../components/TimeLine';
import Loader from '../components/Loader';
import '../assets/styles/App.css';

const TimeLineContainer = ({ title }) => {
  const dispatch = useDispatch();

  const educationData = useSelector((state) => state.educations.data);
  const loading = useSelector((state) => state.educations.status === 'loading');
  const error = useSelector((state) => state.educations.error);

  useEffect(() => {
    dispatch(fetchEducations());
  }, [dispatch]);

  return (
    <div>
      <h2>{title}</h2>
      {loading && <Loader />}
      {!loading && !error && <TimeLine data={educationData} title={title} />}
      {error && <p className="error-message">Something went wrong; please review your server connection!</p>}
    </div>
  );
};

export default TimeLineContainer;
