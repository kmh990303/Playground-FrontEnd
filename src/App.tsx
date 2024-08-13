import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { movieLoader } from "./pages/Movie";
// import Home from "./pages/Home";
// import Movie from "./pages/Movie";
// import MovieDetail from "./pages/MovieDetail";
// import { movieLoader } from "./pages/Movie";
// import Root from "./pages/Root";
// import Error from "./pages/Error";
// import Form from "./pages/FormSubmit";

const Home = React.lazy(() => import('./pages/Home'));
const Movie = React.lazy(() => import('./pages/Movie'));
const MovieDetail = React.lazy(() => import('./pages/MovieDetail'));
const Root = React.lazy(() => import("./pages/Root"));
const Error = React.lazy(() => import('./pages/Error'));
const FormSubmit = React.lazy(() => import('./pages/FormSubmit'));


const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Root />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<div>Loading...</div>}>
        <Error />
      </Suspense>
    ),
    children: [
      {
        path: '',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        )
      },
      {
        path: 'movie',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Movie />
          </Suspense>
        ),
        loader: movieLoader,
        id: 'movie', // 부모 라우트에 ID를 설정
        children: [
          {
            path: 'movieDetail',
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <MovieDetail />
              </Suspense>
            )
          }
        ]
      },
      {
        path: 'form',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <FormSubmit />
          </Suspense>
        )
      }
    ]
  }
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
}

export default App;
