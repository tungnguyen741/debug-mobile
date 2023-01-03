const path = require('path');
const Router = require('koa-router');
const send = require('koa-send');
const readTpl = require('../lib/readTpl');
const now = require('licia/now');
const pairs = require('licia/pairs');
const reverse = require('licia/reverse');
const map = require('licia/map');
const ms = require('licia/ms');

const pkg = require('../../package.json');
const proxy = require('../lib/proxy');

const maxAge = ms('2h');

module.exports = function (channelManager, domain, cdn, basePath) {
  const router = new Router();

  router.get(basePath, async ctx => {
    const tpl = await readTpl('index');
    ctx.body = tpl({
      domain,
      basePath,
      version: pkg.version,
    });
  });

  router.all(`${basePath}proxy`, async ctx => {
    await proxy(ctx, ctx.query.url);
  });

  // if (cdn) {
    router.get(`${basePath}front_end/chii_app.html`, async ctx => {
      const tpl = await readTpl('chii_app');
      ctx.body = tpl({
        cdn,
      });
    });
  // }

  let timestamp = now();
  router.get(`${basePath}timestamp`, ctx => {
    ctx.body = timestamp;
  });
  channelManager.on('target_changed', () => (timestamp = now()));

  router.get(`${basePath}targets`, ctx => {
    const targets = reverse(
      map(pairs(channelManager.getTargets()), item => {
        const ret = {
          id: item[0],
          ...item[1],
        };
        delete ret.channel;
        return ret;
      })
    );

    ctx.body = {
      targets,
    };
  });

  function createStatic(prefix, folder) {
    router.get(`${basePath}${prefix}/*`, async ctx => {
      console.log('____createStatic____')
      console.log('ctx.path:', ctx.path);
      console.log('ctx slice', ctx.path.slice(basePath.length + prefix.length));
      console.log('ROOT PATH', path.resolve(__dirname, `../..${folder}`));
      console.log('DIR', path.resolve(__dirname));
      console.log('folder', folder);
      console.log('____createStatic END____\n\n\n')
      await send(ctx, ctx.path.slice(basePath.length + prefix.length), {
        root: path.join(__dirname, `../..${folder}`),
        maxAge,
      });
    });
  }

  function createStaticFile(file) {
    router.get(`${basePath}${file}`, async ctx => {
      await send(ctx, file, {
        root: path.join(__dirname, '../../public'),
        maxAge,
      });
    });
  }

  createStatic('front_end', '/public/front_end');
  createStatic('test', '/test');
  createStaticFile('target.js');
  createStaticFile('index.js');

  return router.routes();
};
