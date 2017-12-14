const loading = (state = false, action) => {
    switch (action.type) {
        case 'USER_LOGIN_REQUESTED':
            return true;

        case 'USER_LOGIN_SUCCESSED':
            return false;

        case 'USER_LOGIN_FAILED':
            return false;

        case 'USERS_LIST_FETCH_REQUESTED':
            return true;

        case 'USERS_LIST_FETCH_SUCCESSED':
            return false;

        case 'USERS_LIST_FETCH_FAILED':
            return false;

        default:
            return false;
    }
}

export default loading;