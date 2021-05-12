// Configuración de las rutas existentes del sitio, inicio, aviso de privacidad, términos y condiciones y error 404
const routes = [
    {
      // ruta
      path: ["/", "/home"],
      // siempre debe estar en true
      exact: true,
      // componente donde se encuentra el contenido
      component: "Home"
    },
    {
      path: ["/Notice-Of-Privacy"],
      exact: true,
      component: "Notice_Of_Privacy"
    },
    {
      path: ["/Terms-And-Conditions"],
      exact: true,
      component: "Terms_And_Conditions"
    },
    {
      path: ["*"],
      exact: false,
      component: "ErrorPage"
    }
  ];
  
  export default routes;
  