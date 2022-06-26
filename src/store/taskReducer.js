import { taskDeleted, taskUpdated } from "./actionTypes";

export function taskReducer(state = [], action) {
  switch (action.type) {
    case taskUpdated: {
      const newArray = [...state];
      const elementIndex = newArray.findIndex(
        (el) => el.id === action.payload.id
      );
      newArray[elementIndex] = {
        ...newArray[elementIndex],
        ...action.payload,
      };
      return newArray;
    }
    case taskDeleted: {
      let newArray = [...state];
      const filteredArray = newArray.filter(
        (el) => el.id !== action.payload.id
      );
      return filteredArray;
    }
    default:
      return state;
  }
}
