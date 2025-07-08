// src/features/auth/authSlice.ts
import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';

// 👉 Aquí irá tu futura llamada GraphQL:
export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async ({ email, password }: { email: string; password: string }, thunkAPI) => {
        // Simulamos delay de GraphQL
        await new Promise((res) => setTimeout(res, 800));

        // Simulación de "validación"
        if (email === 'admin@empresa.com' && password === '1234') {
            return {
                id: 1,
                email,
                tenants: ['TenantA', 'TenantB'],
            };
        } else {
            return thunkAPI.rejectWithValue('Credenciales incorrectas');
        }
    }
);

interface AuthState {
    user: null | { id: number; email: string };
    tenants: string[];
    activeTenant: string | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: AuthState = {
    user: localStorage.getItem('authUser') ? JSON.parse(localStorage.getItem('authUser') || '{}') : null,
    tenants: localStorage.getItem('authTenants') ? JSON.parse(localStorage.getItem('authTenants') || '{}') : [],
    activeTenant: localStorage.getItem('authActiveTenant') ? JSON.parse(localStorage.getItem('authActiveTenant') || '{}') : null,
    status: 'idle',
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state) {
            state.user = null;
            state.tenants = [];
            state.activeTenant = null;
            state.status = 'idle';
            state.error = null;

            localStorage.removeItem('authUser');
            localStorage.removeItem('authTenants');
            localStorage.removeItem('authActiveTenant');
        },
        switchTenant(state, action: PayloadAction<string>) {
            if (state.tenants.includes(action.payload)) {
                state.activeTenant = action.payload;
            }
        },
    },
    extraReducers(builder) {
        builder
            .addCase(loginUser.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = { id: action.payload.id, email: action.payload.email };
                state.tenants = action.payload.tenants;
                state.activeTenant = action.payload.tenants[0];
                localStorage.setItem('authUser', JSON.stringify(state.user));
                localStorage.setItem('authTenants', JSON.stringify(state.tenants));
                localStorage.setItem('authActiveTenant', JSON.stringify(state.activeTenant));
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            });
    },
});

export const { logout, switchTenant } = authSlice.actions;
export default authSlice.reducer;
