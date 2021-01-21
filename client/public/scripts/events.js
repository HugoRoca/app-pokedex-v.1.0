var registerEvent = function (eventName) {
  var self = this;
  self[eventName] = self[eventName] || {};
  self[eventName].callBacks = self[eventName].callBacks || [];
  self[eventName].subscribe =
    self[eventName].subscribe ||
    function (cb) {
      if (!!cb && typeof cb == "function") {
        self[eventName].callBacks.push(cb);
        return;
      }
    };

  self[eventName].emit =
    self[eventName].emit ||
    function (args) {
      self[eventName].callBacks.forEach(function (cb) {
        cb.call(undefined, args);
      });
    };

  self.subscribe =
    self.subscribe ||
    function (event, cb) {
      if (!!event) {
        if (self[event]) {
          self[event].subscribe(cb);
          return;
        }
      }
    };

  self.applyChanges =
    self.applyChanges ||
    function (event, args) {
      if (self[event]) {
        self[event].callBacks.forEach(function (cb) {
          cb.call(undefined, args);
        });
      }
    };
};

var PokemonEvent = function () {
  var self = {};

  self.eventName = {
    onPokemonEvent: "onPokemonEvent",
  };
  registerEvent.call(self, self.eventName.onPokemonEvent);

  return self;
};
