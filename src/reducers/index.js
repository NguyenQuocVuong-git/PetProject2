import todoReducers from "./todo";
import {combineReducers} from "redux";
import displayReducer from './isDisplayForm';

//tổng hợp các reducer của các chức năng khác
const rootReducer = combineReducers({
	todo : todoReducers,
	isDisplayForm : displayReducer
	});
export default rootReducer;