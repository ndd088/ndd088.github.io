import { experienceData, feedbackData } from './consts';

describe('experienceData', () => {
  it('should be an array', () => {
    expect(Array.isArray(experienceData)).toBe(true);
  });

  it('each item should have properties date and info', () => {
    experienceData.forEach(item => {
      expect(item).toHaveProperty('date');
      expect(item).toHaveProperty('info');
    });
  });

  it('date property should be a string in the format YYYY-YYYY', () => {
    experienceData.forEach(item => {
      expect(typeof item.date).toBe('string');
      expect(item.date).toMatch(/^\d{4}-\d{4}$/);
    });
  });

  it('info property should be an object with properties company, job, and description', () => {
    experienceData.forEach(item => {
      expect(typeof item.info).toBe('object');
      expect(item.info).toHaveProperty('company');
      expect(item.info).toHaveProperty('job');
      expect(item.info).toHaveProperty('description');
    });
  });
});

describe('feedbackData', () => {
  it('should be an array', () => {
    expect(Array.isArray(feedbackData)).toBe(true);
  });

  it('each item should have properties feedback and reporter', () => {
    feedbackData.forEach(item => {
      expect(item).toHaveProperty('feedback');
      expect(item).toHaveProperty('reporter');
    });
  });

  it('feedback property should be a string', () => {
    feedbackData.forEach(item => {
      expect(typeof item.feedback).toBe('string');
    });
  });

  it('reporter property should be an object with properties photoUrl, name, and citeUrl', () => {
    feedbackData.forEach(item => {
      expect(typeof item.reporter).toBe('object');
      expect(item.reporter).toHaveProperty('photoUrl');
      expect(item.reporter).toHaveProperty('name');
      expect(item.reporter).toHaveProperty('citeUrl');
    });
  });
});