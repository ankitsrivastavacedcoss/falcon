import React from 'react';
import app from '@clientSrc';

if (!React.isValidElement(app.component)) {
  const clientAppIndexJs = require.resolve('@clientSrc');
  throw new Error(`File ${clientAppIndexJs} does not export valid React component!
   Make sure that you export React component e.g. 'export const component = <App />'`);
}

export default {
  component: app.component,
  config: {
    // host: undefined,
    // port: undefined,
    serverSideRendering: true,
    logLevel: 'error',
    usePwaManifest: true,
    gaCode: undefined,
    gtmCode: undefined,

    ...app.config
  },
  clientState: app.clientState || {},

  onServerCreated: app.onServerCreated || (() => {}),
  onServerInitialized: app.onServerInitialized || (() => {}),
  onServerStarted: app.onServerStarted || (() => {})
};
