'use strict';
// global.env = process.env.NODE_ENVIRONMENT || 'LOCAL';
// if (!(global.env === 'LOCAL' || global.env === 'DEV' || global.env === 'PROD')) {
//   global.env = 'LOCAL';
//   console.log(process.env.NODE_ENVIRONMENT + ' is not a valid environment - using \'LOCAL\' environment');
// }
// console.log(global.env);
let ENV = process.env.NODE_ENVIRONMENT || 'LOCAL';
if (!(ENV === 'LOCAL' || ENV === 'DEV' || ENV === 'PROD')) {
    ENV = 'LOCAL';
    console.log(process.env.NODE_ENVIRONMENT + ' is not a valid environment - using \'LOCAL\' environment');
}
console.log(ENV);
let buddizAdmin = {
    PROD: {
        hostname: 'admin.prod.buddiz.io',
        port: 80,
    },
    DEV: {
        hostname: 'admin.dev.buddiz.io',
        port: 80,
    },
    LOCAL: {
        hostname: '127.0.0.1',
        port: 10013,
    },
};
let buddizDbAbstractionLayer = {
    PROD: {
        hostname: 'dbabstractionlayer.prod.buddiz.io',
        port: 80,
    },
    DEV: {
        hostname: 'dbabstractionlayer.dev.buddiz.io',
        port: 80,
    },
    LOCAL: {
        hostname: '127.0.0.1',
        port: 10012,
    },
};
let buddizApiCatalog = {
    PROD: {
        hostname: 'apicatalog.prod.buddiz.io',
        port: 80,
    },
    DEV: {
        hostname: 'apicatalog.dev.buddiz.io',
        port: 80,
    },
    LOCAL: {
        hostname: '127.0.0.1',
        port: 10010,
    },
};
let buddizAppFront = {
    PROD: {
        hostname: 'appfront.prod.buddiz.io',
        port: 443,
    },
    DEV: {
        hostname: 'appfront.dev.buddiz.io',
        port: 443,
    },
    LOCAL: {
        hostname: '127.0.0.1',
        port: 10011,
    },
};
let buddizBrain = {
    PROD: {
        hostname: 'brain.prod.buddiz.io',
        port: 80,
    },
    DEV: {
        hostname: 'brain.dev.buddiz.io',
        port: 80,
    },
    LOCAL: {
        hostname: '127.0.0.1',
        port: 10015,
    },
};
module.exports = {
    buddizDbAbstractionLayer,
    buddizApiCatalog,
    buddizAppFront,
    buddizAdmin,
    buddizBrain,
    ENV,
};
//# sourceMappingURL=buddiz.conf.js.map