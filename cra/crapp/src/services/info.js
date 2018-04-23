import request from '../utils/request'

function requestServerInfo(url) {
    return request(url);
}

export default requestServerInfo;
