const initialUi = {
    backgroundColor: false
};


function markItem (state = initialUi, action) {
    let backgroundColor = state.backgroundColor;

    if (action.type === 'MARK ITEM') {
        console.log(state);
        backgroundColor = !backgroundColor;
        return backgroundColor;
    }

    return backgroundColor;
}

function ui (state = initialUi, action) {
    return {
        backgroundColor: markItem(state, action)
    }
}

export default ui;
