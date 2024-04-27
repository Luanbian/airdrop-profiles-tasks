import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../../pages/home';
import Details from '../../pages/details';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/:id',
        element: <Details />,
    },
]);

export default function Router() {
    return <RouterProvider router={routes} />;
}
