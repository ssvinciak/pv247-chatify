import { dismissError } from './../error/actionCreators';
import {
    FAILED_LOGIN_MESSAGE,
    MILISECONDS_TO_AUTO_DISMISS_ERROR
} from './../../constants/uiMessages';
import { Dispatch } from 'redux';
import { loginApiAsync } from '../../../api/usersRepository';
import {
    loginUserStarted,
    loginUserSuccess,
    loginUserFailure,
    receiveToken
} from './actionCreators';
import { IAuthenticationResponse } from '../../models/IAuthenticationResponse';
import { setAuthenticationDataToLocalStorage } from '../../../common/localStorageUtils';

export const loginUser = (email: string, redirect: () => void): any => async (dispatch: Dispatch): Promise<void> => {
    dispatch(loginUserStarted());
    try {
        const response: IAuthenticationResponse = await loginApiAsync(email);

        setAuthenticationDataToLocalStorage(response.token, response.expiration, email);
        dispatch(receiveToken(response.token));
        await dispatch(loginUserSuccess(email));
        redirect();
    }
    catch (err) {
        const dispatchedAction = dispatch(loginUserFailure(FAILED_LOGIN_MESSAGE, err));
        setTimeout(() => {
            dispatch(dismissError(dispatchedAction.payload.error.id));
        }, MILISECONDS_TO_AUTO_DISMISS_ERROR);
    }
};
