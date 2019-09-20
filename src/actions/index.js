export const addEmployee = newEmployee => {
  return {
    type: "ADD_EMPLOYEE",
    payload: newEmployee
  };
};
