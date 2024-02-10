const api = {
  baseURL: '/api',

  async get(url) {
    try {
      const response = await fetch(this.baseURL + url);
      if (!response.ok) {
        return { error: 'Network response was not ok' };
      }
      return { data: await response.json() };
    } catch (error) {
      console.error('Error:', error);
      return { error: 'An error occurred while processing the request' };
    }
  },

  async post(url, data) {
    try {
      const response = await fetch(this.baseURL + url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        return { error: 'Network response was not ok' };
      }
      return { data: await response.json() };
    } catch (error) {
      console.error('Error:', error);
      return { error: 'An error occurred while processing the request' };
    }
  },
};

export default api;