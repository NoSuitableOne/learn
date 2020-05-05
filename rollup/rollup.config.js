import { uglify } from 'rollup-plugin-uglify';
import { eslint } from 'rollup-plugin-eslint';
import babel, { getBabelOutputPlugin } from '@rollup/plugin-babel';

const env = process.env.NODE_ENV;

const plugins = [
  eslint({
    throwOnError: true,
    throwOnWarning: true,
    include: ['src/**'],
    exclude: ['node_modules/**']
  })
];
if (env === 'prod') {
  plugins.push(uglify());
}

export default {
  input: 'index.js',
  output: [{
    file: 'dist/bundle.umd.js',
    format: 'umd',
    name: '_tool',
    sourcemap: env === 'prod'
  }, {
    file: 'dist/bundle.cjs.js',
    format: 'cjs',
    sourcemap: env === 'prod',
    plugins: [
      ...plugins, 
      getBabelOutputPlugin({ presets: ['@babel/preset-env'] })
    ]
  }],
  plugins: plugins
};