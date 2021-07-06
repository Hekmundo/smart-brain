export const apiFetch = async (endPoint, method, data) => {
  try {
    const response = await fetch(`/api/${endPoint}`, {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw new Error(`Thrown from apiFetch(): ${error.message}`);
  }
};
