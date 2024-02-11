import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader';
import '../assets/styles/App.css';
import api from '../redux/api';

const TimeLine = ({ title }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/educations');
        setData(response.data);
      } catch (error) {
        setError('An error occurred while fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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

export default TimeLine;