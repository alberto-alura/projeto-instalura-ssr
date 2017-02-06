import {combineReducers} from "redux";
import {timeline} from './timeline';
import {notificacao} from './header';

const rootReducer = combineReducers({timeline,notificacao});

export default rootReducer;

