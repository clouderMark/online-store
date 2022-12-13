export const addNewUser = async (firstName: string, lastName: string, email: string, password: string) => {
  const response = await fetch('https://dummyjson.com/users/add', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      /* other user data */
    }),
  });
  const result = await response.json();

  return result;
};
