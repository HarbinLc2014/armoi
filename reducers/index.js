import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectReducer from './SelectReducer';

export default combineReducers({
  libraries: LibraryReducer,
  selectId: SelectReducer
});
