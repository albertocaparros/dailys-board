export const getData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const setData = (key, data) => {
  return localStorage.setItem(key, JSON.stringify(data));
};
