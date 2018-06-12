export const GET_IMAGES_REQUEST = "GET_IMAGES_REQUEST";
export const GET_IMAGES_SUCCESS = "GET_IMAGES_SUCCESS";
export const GET_IMAGES_FAILURE = "GET_IMAGES_FAILURE";

export function getImagesRequest(searchText) {
    return {
        type: GET_IMAGES_REQUEST,
        searchText
    };
}

export function getImagesSuccess(images) {
    return {
        type: GET_IMAGES_SUCCESS,
        images
    };
}

export function getImagesFailure(error) {
    return {
        type: GET_IMAGES_FAILURE,
        error
    };
}