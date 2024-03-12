import {AppThunk} from '../store';
import {pushPromise} from '../reducers/xhr';

export const addPromise = (promise: Promise<any>): AppThunk => async (dispatch) => {
	dispatch(pushPromise({promise}));
};