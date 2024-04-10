import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profile } from './types';

interface ProfileState {
    loading: boolean;
    profile: Profile;
    error: string | null;
}

const initialState: ProfileState = {
    loading: false,
    profile: {} as Profile,
    error: null,
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        getProfileRequest(
            _state,
            _action: PayloadAction<{
                id: string;
                token: string;
            }>,
        ) {},
        profileStartLoading: (state) => {
            state.loading = true;
            state.error = null;
        },
        profileSuccess(state, action: PayloadAction<Profile>) {
            state.loading = false;
            state.profile = action.payload;
        },
        profileFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { actions } = profileSlice;
export default profileSlice.reducer;
