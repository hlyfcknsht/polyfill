'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = function () {
 function Task() {
  var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Task.getDefaultTitle();

  _classCallCheck(this, Task);

  this.title = title;
  this._done = false;
  Task.count += 1;
  console.log('Происходит создание задачи');
 }

 _createClass(Task, [{
  key: 'complete',
  value: function complete() {
   this.done = 1;
   console.log('\u0417\u0430\u0434\u0430\u0447\u0430 "' + this.title + '" \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0430!');
  }
 }, {
  key: 'done',
  get: function get() {
   return this._done === true ? 'Выполнено' : 'Не выполнено';
  },
  set: function set(value) {
   if (value !== undefined && typeof value === 'boolean') {
    this._done = value;
   } else {
    console.error("Ошибка! Укажите значение true или false.");
   }
  }
 }], [{
  key: 'getDefaultTitle',
  value: function getDefaultTitle() {
   return "Задача";
  }
 }]);

 return Task;
}();

;

Task.count = 0;

var task = new Task("Выучить JavaScript");
console.log(task.done, task._done);
task.complete();
console.log(task.done, task._done);
