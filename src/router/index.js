import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Header from '../components/header';
import WhatsAppButton from '../components/whatsAppButton';
import Footer from '../components/footer';
import routes from './config';

const Router = () => {
    return (
      <Suspense fallback={null}>
        {/* el header, footer, y el botón de whatsapp siempre se muestran sin importar que ruta sea */}
          <Header />
          <section className='containerAll'>

          <Switch>
            {/* se hacee le cambio de las rutas, se recorre el archivo config y devuelve el contenido con el que hag match */}
          {routes.map((routeItem) => {
          return (
            <Route
              key={routeItem.component}
              path={routeItem.path}
              exact={routeItem.exact}
              component={lazy(() => import(`../pages/${routeItem.component}`))}
            />
            );
          })}
          </Switch>

          </section>
          <WhatsAppButton />
          <Footer />
        </Suspense>
      );
    };

export default Router