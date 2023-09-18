import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Chat from '../pages/Chat';
import Profile from '../pages/Profile';
import Settings from '../pages/Settings';
import Tasks from '../pages/Tasks';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Tasks />,
      },
      {
        path: '/chat',
        element: <Chat />,
      },
      {
        path: '/settings',
        element: <Settings />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
]);

export default routes;
