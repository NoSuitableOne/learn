function mark({ payload: id }) {
    return {
        type: 'MARK ITEM',
        payload: id
    };
}

export { mark };
