import path from 'path'
import chalk from 'chalk'

import AssetsPlugin from 'assets-webpack-plugin'
import ProgressBarPlugin from 'progress-bar-webpack-plugin'
import baseWpPlugins from '../src/base/wp-plugins'

export const mainPath = path.resolve(__dirname, '..')
export const context = path.resolve(__dirname, '../')
export const buildPath = path.resolve(__dirname, '../dist')
export const basePath = path.resolve(__dirname, '../src/base')
export const dllPath = path.resolve(__dirname, '../dist/dlls')
export const assetsPath = path.resolve(__dirname, '../dist/assets')
export const clientPath = path.resolve(__dirname, '../src/base/client/')
export const manifestPath = buildPath

export const entry = {
  vendor: [
    'react',
    'redux',
    'react-dom',
    'prop-types',
    'classnames',
    'react-redux',
    'isomorphic-fetch'
  ]
}

export const module = {
  rules: [
    { test: /\.json$/, loader: 'json-loader', include: [mainPath] },
    {
      test: /\.(html)$/,
      use: {
        loader: 'html-loader',
        options: {
          attrs: [':data-src'],
          minimize: true
        }
      }
    },
    { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000&name=assets/images/[name].[ext]' }
  ]
}

export const plugins = [
  new ProgressBarPlugin({
    format: `[BASE] ${chalk.blue('i')} Bundling... [:bar] ${chalk.green(':percent')} (:elapsed seconds)`,
    clear: true,
    summary: false
  }),
  new AssetsPlugin({
    path: buildPath,
    filename: 'webpack-assets.json',
    prettyPrint: true
  }),
  new baseWpPlugins.CompileInfoPlugin()
]

export const postcss = [
  require('postcss-import')(),
  require('postcss-url')(),
  require('postcss-modules-extract-imports'),
  require('postcss-nested')(),
  require('postcss-reporter')(),
  require('precss')(),
  require('postcss-mixins')()
]

export const resolve = {
  extensions: ['.js', '.jsx', '.css'],
  modules: ['node_modules'],
  alias: {
    app: path.resolve(__dirname, '../src/App'),
    server: path.resolve(__dirname, '../server'),
    base: path.resolve(__dirname, '../src/base'),
    store: path.resolve(__dirname, '../src/base/store'),
    styles: path.resolve(__dirname, '../src/App/styles'),
    mocks: path.resolve(__dirname, '../server/api/mocks'),
    containers: path.resolve(__dirname, '../src/App/containers'),
    components: path.resolve(__dirname, '../src/App/components')
  }
}
