import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import { getImagesSuccess, getImagesFailure } from '../src/store/actions';


// function that makes the api request and returns a Promise for response
const apiUrl = `https://pixabay.com/api`;
const apiKey = '9189435-9f1e00129bd25c9bcbe88ef08';
const amount = 15;

function fetchImages(searchText) {
    return axios({
        method: "get",
        url: `${apiUrl}/?key=${apiKey}&q=${searchText}&image_type=photo&per_page=${amount}&safesearch=true`
    });
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
    yield takeLatest("GET_IMAGES_REQUEST", workerSaga);
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga(action) {
    try {
        const response = yield call(fetchImages, action.searchText);
        const images = response.data;
        yield put(getImagesSuccess(images));
    } catch (error) {
        yield put(getImagesFailure(error));
    }
}