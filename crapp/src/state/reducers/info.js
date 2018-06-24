const initialInfo = {
    server: {
        isFetching: false,
        name: 'localhost',
        status: ''
    }
};

function setServerName (state = initialInfo, action) {
    let server = state.server;

    switch (action.type) {
        case 'GET SERVER INFO':
            return Object.assign(
                {},
                server,
                {
                    isFetching: true
                }
            );
        case 'RECEIVE SERVER INFO':
            let { payload: { server: { name: name } } } = action;
            return Object.assign(
                {},
                server,
                {
                    isFetching: false,
                    name
                }
            );
        case 'RECEIVE AN ERROR':
            return Object.assign(
                {},
                server,
                {
                    isFetching: false,
                    name: 'unknown server'
                }
            );
        default:
            return server

    }
}

function info (state = initialInfo, action) {
    return {
        server: setServerName(state.title, action)
    }
}

export default info;
