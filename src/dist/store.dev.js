"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _firebase = require("./firebase");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_vue["default"].use(_vuex["default"]);

var _default = new _vuex["default"].Store({
  state: {
    users: []
  },
  mutations: {
    setUsers: function setUsers(state, users) {
      state.users = users;
    },
    addUser: function addUser(state, user) {
      state.users.push(user);
    },
    deleteUser: function deleteUser(state, id) {
      state.users = state.users.filter(function (user) {
        return user.id !== id;
      });
    }
  },
  actions: {
    fetchUsers: function fetchUsers(_ref) {
      var commit, snapshot, users;
      return regeneratorRuntime.async(function fetchUsers$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              commit = _ref.commit;
              _context.next = 3;
              return regeneratorRuntime.awrap(_firebase.db.collection('users').get());

            case 3:
              snapshot = _context.sent;
              users = snapshot.docs.map(function (doc) {
                return _objectSpread({
                  id: doc.id
                }, doc.data());
              });
              commit('setUsers', users);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      });
    },
    addUser: function addUser(_ref2, user) {
      var commit, docRef;
      return regeneratorRuntime.async(function addUser$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              commit = _ref2.commit;
              _context2.next = 3;
              return regeneratorRuntime.awrap(_firebase.db.collection('users').add(user));

            case 3:
              docRef = _context2.sent;
              commit('addUser', _objectSpread({
                id: docRef.id
              }, user));

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      });
    },
    deleteUser: function deleteUser(_ref3, id) {
      var commit;
      return regeneratorRuntime.async(function deleteUser$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              commit = _ref3.commit;
              _context3.next = 3;
              return regeneratorRuntime.awrap(_firebase.db.collection('users').doc(id)["delete"]());

            case 3:
              commit('deleteUser', id);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  }
});

exports["default"] = _default;
//# sourceMappingURL=store.dev.js.map
