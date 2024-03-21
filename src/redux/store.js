//createStore is deprecated but it still working

import { createStore } from 'redux';
import reducer from './reducer';

export default createStore(reducer);