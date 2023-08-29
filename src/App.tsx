import { Provider } from 'react-redux';
import './i18n.ts'
import { store } from './store';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
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
import { BUILDER_PATH, BUILD_DETAIL_EDIT_PATH, BUILD_DETAIL_PATH, BUILD_LIST_PATH, CONFIGURATOR_PATH, HARDWARE_AC_PATH, HARDWARE_BASE_PATH, HARDWARE_CASE_PATH, HARDWARE_CPU_PATH, HARDWARE_GPU_PATH, HARDWARE_HDD_PATH, HARDWARE_MB_PATH, HARDWARE_PSU_PATH, HARDWARE_RAM_PATH, HARDWARE_LC_PATH, HARDWARE_SSD_PATH, LOGIN_PATH, REGISTER_PATH, ROOT_PATH, USER_PROFILE_PATH } from './constants';
import AuthRoute from './routes/AuthRoute';
import UserProfile from './pages/UserProfile/UserProfile';
import BuilderProfile from './pages/BuilderProfile/BuilderProfile';
import Hardware from './pages/Hardware/Hardware';
import CPUList from './pages/Hardware/CPUList/CPUList';
import MBList from './pages/Hardware/MBList/MBList';
import RAMList from './pages/Hardware/RAMList/RAMList';
import GPUList from './pages/Hardware/GPUList/GPUList';
import ACList from './pages/Hardware/ACList/ACList';
import HDDList from './pages/Hardware/HDDList/HDDList';
import SSDList from './pages/Hardware/SSDList/SSDList';
import CaseList from './pages/Hardware/CaseList/CaseList';
import LCList from './pages/Hardware/LCList/LCList';
import PSUList from './pages/Hardware/PSUList/PSUList';

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
              <Route exact path={BUILDER_PATH} >
                <AuthRoute><BuilderProfile /></AuthRoute>
              </Route>
              <Route exact path={HARDWARE_BASE_PATH} >
                <AuthRoute><Hardware /></AuthRoute>
              </Route>
              <Route exact path={HARDWARE_CPU_PATH} >
                <AuthRoute><CPUList /></AuthRoute>
              </Route>
              <Route exact path={HARDWARE_MB_PATH} >
                <AuthRoute><MBList /></AuthRoute>
              </Route>
              <Route exact path={HARDWARE_RAM_PATH} >
                <AuthRoute><RAMList /></AuthRoute>
              </Route>
              <Route exact path={HARDWARE_AC_PATH} >
                <AuthRoute><ACList /></AuthRoute>
              </Route>
              <Route exact path={HARDWARE_LC_PATH} >
                <AuthRoute><LCList /></AuthRoute>
              </Route>
              <Route exact path={HARDWARE_GPU_PATH} >
                <AuthRoute><GPUList /></AuthRoute>
              </Route>
              <Route exact path={HARDWARE_HDD_PATH} >
                <AuthRoute><HDDList /></AuthRoute>
              </Route>
              <Route exact path={HARDWARE_SSD_PATH} >
                <AuthRoute><SSDList /></AuthRoute>
              </Route>
              <Route exact path={HARDWARE_PSU_PATH} >
                <AuthRoute><PSUList /></AuthRoute>
              </Route>
              <Route exact path={HARDWARE_CASE_PATH} >
                <AuthRoute><CaseList /></AuthRoute>
              </Route>
            </>
          </Layout>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  </Provider>
);

export default App;
