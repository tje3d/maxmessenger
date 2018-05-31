import { AUTH_LOGOUT } from '@actions/auth';
import { mapTo, mergeAll } from 'rxjs/operators';

export default {
    logout: (action$) =>
        action$.ofType(AUTH_LOGOUT)
            // .pipe(mapTo([{type: PROFILE_CLEAR}, {type: LOGIN_CLEAR}, {type: GROUP_CLEAR}]))
            .pipe(mapTo([]))
            .pipe(mergeAll())
};
