export const list = (state = [], action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return [
                ...state,
                {
                    item:action.item
                }
            ]
        default:
    }
    return state
}