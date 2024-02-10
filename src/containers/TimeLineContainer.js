import React, { useEffect, useReducer } from 'react';
import Loader from '../components/Loader';
import '../assets/styles/App.css';
import api from '../redux/api';

const initialState = {
  data: null,
  loading: false,
  error: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_EDUCATIONS_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_EDUCATIONS_SUCCESS':
      return { ...state, loading: false, data: action.payload };
    case 'FETCH_EDUCATIONS_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const TimeLineContainer = ({ title }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchEducations = async () => {
      dispatch({ type: 'FETCH_EDUCATIONS_REQUEST' });
      try {
        const response = await api.get('/educations');
        dispatch({ type: 'FETCH_EDUCATIONS_SUCCESS', payload: response.data });
      } catch (error) {
        dispatch({ type: 'FETCH_EDUCATIONS_FAILURE', payload: 'An error occurred while fetching data' });
      }
    };
    fetchEducations();
  }, []);

  const { data, loading, error } = state;

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="timeline-error">
        <p className="error-message">{error}</p>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <div className="timeline-container">
      <h2>{title}</h2>
      <div className="timeline">
        {data.map((event, index) => (
          <div key={index} className="timeline-event">
            <div className="event-date">{event.date}</div>
            <div className="event-details">
              <h3>{event.title}</h3>
              <p>{event.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeLineContainer;