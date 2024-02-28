import { Config } from '@stencil/core';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';

export const config: Config = {
  namespace: 'demo-3bird',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    
  ],
  plugins: [
    nodeResolve(),
    commonjs(),
    babel({
      presets: ['@babel/preset-react'],
      plugins: [
        // any additional plugins
      ],
      babelHelpers: 'bundled',
    }),
  ],
  testing: {
    browserHeadless: "new",
  },
};
