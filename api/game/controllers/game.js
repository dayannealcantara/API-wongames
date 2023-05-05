'use strict';

module.exports = {
  populate: (ctx) => {
    console.log("Initializing")
    ctx.send({ ok: true })
  }
};
