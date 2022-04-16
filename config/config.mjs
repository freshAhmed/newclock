import path from 'path'
import url from 'url';
let __dirname=url.fileURLToPath(import.meta.url);
__dirname=path.dirname(__dirname);

const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

export const config = {
  development: {
    root: rootPath,
    app: {
      name: 'appinit'
    },
    port: process.env.PORT || 2000,
    db: 'mongodb://localhost/appinit-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'appinit'
    },
    port: process.env.PORT ||2000,
    db: 'mongodb://localhost/appinit-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'appinit'
    },
    port: process.env.PORT || 2000,
    db: 'mongodb://localhost/appinit-production'
  }
};

