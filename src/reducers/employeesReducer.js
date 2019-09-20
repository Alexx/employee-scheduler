import { v4 } from "uuid";

const employeeList = {
  employees: {
    [v4()]: {
      firstName: "Alex",
      lastName: "Siegberg",
      monStart: "08:00:00",
      monEnd: "24:00:00",
      tueStart: "08:00:00",
      tueEnd: "24:00:00",
      wedStart: "08:00:00",
      wedwedEnd: "24:00:00",
      thuStart: "08:00:00",
      thuEnd: "24:00:00",
      friStart: "08:00:00",
      friEnd: "24:00:00",
      satStart: "08:00:00",
      satEnd: "24:00:00",
      sunStart: "08:00:00",
      sunEnd: "24:00:00"
    },
    [v4()]: {
      firstName: "Bob",
      lastName: "Burger",
      monStart: "10:00:00",
      monEnd: "20:00:00",
      tueStart: "10:00:00",
      tueEnd: "20:00:00",
      wedStart: "10:00:00",
      wedwedEnd: "20:00:00",
      thuStart: "10:00:00",
      thuEnd: "20:00:00",
      friStart: "10:00:00",
      friEnd: "20:00:00",
      satStart: "10:00:00",
      satEnd: "20:00:00",
      sunStart: "10:00:00",
      sunEnd: "20:00:00"
    }
  }
};

const employeesReducer = (state = employeeList, action) => {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      employeeList.push(action.payload);
      return state;
    default:
      return state;
  }
};

export default employeesReducer;
