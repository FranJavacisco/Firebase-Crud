"use strict";

var _firebase = require("./firebase");

// store.js
function deleteUser(_ref, id) {
  var commit;
  return regeneratorRuntime.async(function deleteUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          commit = _ref.commit;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(_firebase.db.collection('users').doc(id)["delete"]());

        case 4:
          commit('deleteUser', id);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](1);
          console.error("Error deleting user: ".concat(_context.t0));

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 7]]);
} // Llamar a la función deleteUser en algún lugar del código


deleteUser({
  commit: function commit() {}
}, 'ome-id');
//# sourceMappingURL=store.dev.js.map
