import '../../mock/mockdata';

function fetchServerInfo() {
    return {
        type: 'GET SERVER INFO'
    };
}

function receiveServerInfo({ payload: server }) {
    return {
        type: 'RECEIVE SERVER INFO',
        payload: server
    };
}

// function getServerInfo() {
//     return (dispatch, getState) => {
//         dispatch(fetchServerInfo());
//         return fetch(`http://server/test`)
//             .then(
//                 response => response.json(),
//                 error => console.log('an error', error)
//             )
//             .then(
//                 (json) => {
//                     let { server } = json;
//                     dispatch(receiveServerInfo({ payload: server }));
//                 }
//             )
//     }
// }


export { fetchServerInfo, receiveServerInfo };
