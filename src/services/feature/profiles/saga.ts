import { PayloadAction } from '@reduxjs/toolkit';
import profileById, { UniqueProfileProps } from '../../../data/usecases/get.profile.by.id';
import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { Profile } from './types';
import { actions } from './slice';

function* getProfile({ payload }: PayloadAction<UniqueProfileProps>) {
    yield put(actions.profileStartLoading());
    try {
        const response: AxiosResponse<Profile> = yield call(profileById, payload);
        yield put(actions.profileSuccess(response.data));
    } catch (error) {
        if (error instanceof Error) {
            yield put(actions.profileFailure(error.message));
        }
    }
}

export default function* watchProfile() {
    yield takeLatest(actions.getProfileRequest.type, getProfile);
}
