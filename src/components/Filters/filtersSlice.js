import { SET_SEARCH_FILTER, STATUS_FILTER_CHANGE, PRIORITY_FILTER_CHANGE } from "../../redux/constants";
const initState = {
    search: "",
    status: "All",
    priority: [],
};

function filtersReducer(state = initState, action) {
    switch (action.type) {
        case SET_SEARCH_FILTER:
            return {
                ...state,
                search: action.payload,                
            }
        case STATUS_FILTER_CHANGE:
            return {
                ...state,
                status: action.payload
            }
        case PRIORITY_FILTER_CHANGE:
            return {
                ...state,
                priorities: action.payload
            }
        default:
            return state;
    }
}

export { initState };
export default filtersReducer;
