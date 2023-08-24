import { Provider } from 'react-redux';
import { store } from './store';

import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/app.css';

/* Pages */
import Login from './pages/Auth/Login/Login';
import Register from './pages/Auth/Register/Register';
import BuildList from './pages/Build/BuildList/BuildList';
import BuildDetail from './pages/Build/BuildDetail/BuildDetail';
import Configutator from './pages/Build/Configurator/Configurator';
import BuildEdit from './pages/Build/BuildEdit/BuildEdit';
import Layout from './pages/Layout/Layout';
import { BUILD_DETAIL_EDIT_PATH, BUILD_DETAIL_PATH, BUILD_LIST_PATH, CONFIGURATOR_PATH, LOGIN_PATH, REGISTER_PATH, ROOT_PATH, USER_PROFILE_PATH } from './constants';
import AuthRoute from './routes/AuthRoute';
import UserProfile from './pages/UserProfile/UserProfile';

setupIonicReact();

const App: React.FC = () => (
  <Provider store={store}>
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Layout>
            <>
              <Route exact path={ROOT_PATH}>
                <Redirect to={BUILD_LIST_PATH} />
              </Route>
              <Route exact path={LOGIN_PATH} >
                <AuthRoute><Login /></AuthRoute>
              </Route>
              <Route exact path={REGISTER_PATH} >
                <AuthRoute><Register /></AuthRoute>
              </Route>
              <Route exact path={BUILD_LIST_PATH}>
                <AuthRoute><BuildList /></AuthRoute>
              </Route>
              <Route exact path={CONFIGURATOR_PATH} >
                <AuthRoute sessionRequired><Configutator /></AuthRoute>
              </Route>
              <Route exact path={BUILD_DETAIL_PATH} >
                <AuthRoute><BuildDetail /></AuthRoute>
              </Route>
              <Route exact path={BUILD_DETAIL_EDIT_PATH} >
                <AuthRoute sessionRequired><BuildEdit /></AuthRoute>
              </Route>
              <Route exact path={USER_PROFILE_PATH} >
                <AuthRoute sessionRequired><UserProfile /></AuthRoute>
              </Route>
            </>
          </Layout>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  </Provider>
);

export default App;
