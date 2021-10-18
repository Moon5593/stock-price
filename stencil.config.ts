import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stockPrice',
  outputTargets: [
    {
      type: 'dist'
    },
    {
      type: 'dist-custom-elements-bundle',
    }
    // {
    //   type: 'www',
    //   serviceWorker: null, // disable service workers
    // },
  ],
};
