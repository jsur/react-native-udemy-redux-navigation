import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';

export default combineReducers({
  defaultReducer: () => [],
  auth: AuthReducer,
  employeeForm: EmployeeFormReducer
});
