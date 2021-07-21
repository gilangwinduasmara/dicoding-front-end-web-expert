const formToJSON = (formElement) => {
  const data = new FormData(formElement);
  const json = JSON.stringify(Object.fromEntries(data));
  return json;
};

module.exports = { formToJSON };
