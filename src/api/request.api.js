const URL = "https://g54qw205uk.execute-api.eu-west-1.amazonaws.com/DEV/stub"; // suppose to come from the env file

export const sendRequest = async data => {
  const response = await fetch(`${URL}`, {
    method: "POST",
    body: JSON.stringify(data),
  });

  if (response.ok) {
    const data = await response.json();
    const total = data.length;
    return { data, total };
  } else {
    const error = await response.json();
    throw new Error(error);
  }
};
