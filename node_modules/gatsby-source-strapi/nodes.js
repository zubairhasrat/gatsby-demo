'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Node = undefined;

var _gatsbyNodeHelpers = require('gatsby-node-helpers');

var _gatsbyNodeHelpers2 = _interopRequireDefault(_gatsbyNodeHelpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _createNodeHelpers = (0, _gatsbyNodeHelpers2.default)({
  typePrefix: 'Strapi'
}),
    createNodeFactory = _createNodeHelpers.createNodeFactory;

/**
 * Node factory with `type` option based on
 * original `createNodeFactory`.
 *
 * @param {string} type - Node type
 * @param {object} node - Node
 * @constructor
 */


var Node = exports.Node = function Node(type, node) {
  return createNodeFactory(type, function (node) {
    node.id = type + '_' + node.strapiId;
    return node;
  })(node);
};