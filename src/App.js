import { BrowserRouter as Router, Switch, Routes, Route } from 'react-router-dom';
import { DefaultLayout } from '~/components/layouts';
import { publicRouter } from './routes';
import { Fragment } from 'react';

function App() {
  const getLayout = (route) => {
    let layout = DefaultLayout;

    if (route.layout) {
      layout = route.layout;
    } else if (route.layout === null) {
      layout = Fragment;
    }
    return layout;
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRouter.map((route, index) => {
            const Layout = getLayout(route);
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}
export default App;
