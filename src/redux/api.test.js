import api from './api';
import fetch from 'node-fetch';

jest.mock('node-fetch');

describe('API module', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  describe('get method', () => {
    test('fetches data from the server with correct URL', async () => {
      const testData = { id: 1, name: 'Test Data' };
      fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => testData,
      });

      const data = await api.get('/test');
      expect(data).toEqual(testData);
      expect(fetch).toHaveBeenCalledWith('/api/test');
    });

    test('throws an error when network response is not ok', async () => {
      fetch.mockResolvedValueOnce({ ok: false });

      await expect(api.get('/test')).rejects.toThrow('Network response was not ok');
    });
  });

  describe('post method', () => {
    test('sends data to the server with correct URL and body', async () => {
      const testData = { id: 1, name: 'Test Data' };
      fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => testData,
      });

      const postData = { data: 'test' };
      const data = await api.post('/test', postData);

      expect(data).toEqual(testData);
      expect(fetch).toHaveBeenCalledWith('/api/test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
    });

    test('throws an error when network response is not ok', async () => {
      fetch.mockResolvedValueOnce({ ok: false });

      await expect(api.post('/test', {})).rejects.toThrow('Network response was not ok');
    });
  });
});