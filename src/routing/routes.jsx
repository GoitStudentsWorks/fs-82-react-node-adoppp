import { lazy } from 'react';

const MainСontainer = lazy(() => import('../components/containers/MainСontainer/MainСontainer'));
const ProfilePage = lazy(() => import('../components/pages/ProfilePage/ProfilePage'));
const DiaryPage = lazy(() => import('../components/pages/DiaryPage/DiaryPage'));
const ProductsPage = lazy(() => import('../components/pages/ProductsPage/ProductsPage'));
const ExercisesPage = lazy(() => import('../components/pages/ExercisesPage/ExercisesPage'));

import { Welcome } from '../components/global/Welcome';
import { SignUp } from '../components/auth/SignUp';
import { SignIn } from '../components/auth/SignIn';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const routes = {
    MAIN_ROUTE: '/',
    WELCOME_ROUTE: '/welcome',
    SIGNUP_ROUTE: '/signup',
    SIGNIN_ROUTE: '/signin',
    PROFILE_ROUTE: '/profile',
    DIARY_ROUTE: '/diary',
    PRODUCTS_ROUTE: '/products',
    EXERCISES_ROUTE: '/exercises',
};

const appRoutes = [
    {
        path: routes.MAIN_ROUTE,
        element: <MainСontainer />,
    },
    {
        path: routes.WELCOME_ROUTE,
        element: (
            <RestrictedRoute>
                <MainСontainer>
                    <Welcome />
                </MainСontainer>
            </RestrictedRoute>
        ),
    },
    {
        path: routes.SIGNUP_ROUTE,
        element: (
            <RestrictedRoute>
                <MainСontainer>
                    <SignUp />
                </MainСontainer>
            </RestrictedRoute>
        ),
    },
    {
        path: routes.SIGNIN_ROUTE,
        element: (
            <RestrictedRoute>
                <MainСontainer>
                    <SignIn />
                </MainСontainer>
            </RestrictedRoute>
        ),
    },
    {
        path: routes.PROFILE_ROUTE,
        element: (
            <PrivateRoute>
                <ProfilePage />
            </PrivateRoute>
        ),
    },
    {
        path: routes.DIARY_ROUTE,
        element: (
            <PrivateRoute>
                <DiaryPage />
            </PrivateRoute>
        ),
    },
    {
        path: routes.PRODUCTS_ROUTE,
        element: (
            <PrivateRoute>
                <ProductsPage />
            </PrivateRoute>
        ),
    },
    {
        path: routes.EXERCISES_ROUTE,
        element: (
            <PrivateRoute>
                <ExercisesPage />
            </PrivateRoute>
        ),
    },
];

export { routes };

export default appRoutes;
