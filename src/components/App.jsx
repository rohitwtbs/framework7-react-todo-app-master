import React from 'react';
import { App, View } from 'framework7-react';

import routes from '../routes';

export default function () {
  const f7params = {
    id: 'io.framework7.testapp',
    name: 'Framework7',
    theme: 'auto',
    routes
  };

  return (
    <App params={f7params}>
      <View id="main-view" url="/" main className="ios-edges"/>
    </App>
  );
};
