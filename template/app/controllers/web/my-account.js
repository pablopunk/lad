const _ = require('lodash');
const validator = require('validator');
const Boom = require('boom');

// const { Users } = require('../../models');

module.exports = async ctx => {
  let { body } = ctx.request;

  body = _.pick(body, ['email', 'name']);

  if (!_.isString(body.email) || !validator.isEmail(body.email)) {
    return ctx.throw(Boom.badRequest(ctx.translate('INVALID_EMAIL')));
  }

  if (!_.isString(body.name)) {
    return ctx.throw(Boom.badRequest(ctx.translate('INVALID_NAME')));
  }
  // TODO check if email changed
  // if it did, look if its unique (no other model has it)
  // do the same for name? or can it be duplicated?
};
