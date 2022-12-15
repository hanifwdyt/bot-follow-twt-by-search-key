"use strict";

var _readlineSync = _interopRequireDefault(require("readline-sync"));

var _puppeteer = _interopRequireDefault(require("puppeteer"));

var _chalk = _interopRequireDefault(require("chalk"));

var _userAgents = _interopRequireDefault(require("user-agents"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var userAgent = new _userAgents["default"](); //get Username Twitter

var user = _readlineSync["default"].question(_chalk["default"].blue('username twitter? ')); // Handle the secret text (e.g. password).


var pass = _readlineSync["default"].question(_chalk["default"].red('password twitter?  '), {
  hideEchoBack: true // The typed text on screen is hidden by `*` (default).

}); //get Username Twitter


var searchKey = _readlineSync["default"].question(_chalk["default"].green('search keyword? '));

function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}

(function _callee() {
  var browser, page, inputText, inputPass, url, inputSearchKey, data, rd, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, el, tweetParent, urlLike, followButton, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _el;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_puppeteer["default"].launch({
            headless: false
          }));

        case 2:
          browser = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(browser.newPage());

        case 5:
          page = _context.sent;
          _context.next = 8;
          return regeneratorRuntime.awrap(page.setExtraHTTPHeaders({
            'Accept-Language': 'en-US,en;q=0.9'
          }));

        case 8:
          _context.next = 10;
          return regeneratorRuntime.awrap(page.setUserAgent(userAgent.toString()));

        case 10:
          console.log('mencoba login....');
          _context.next = 13;
          return regeneratorRuntime.awrap(page["goto"]('https://twitter.com/i/flow/login'));

        case 13:
          console.log('mengisi username...');
          inputText = 'input[name=text]';
          _context.next = 17;
          return regeneratorRuntime.awrap(page.waitForSelector(inputText));

        case 17:
          _context.next = 19;
          return regeneratorRuntime.awrap(page.type(inputText, user));

        case 19:
          _context.next = 21;
          return regeneratorRuntime.awrap(page.keyboard.press('Enter'));

        case 21:
          console.log('mengisi password...');
          inputPass = 'input[name=password]';
          _context.next = 25;
          return regeneratorRuntime.awrap(page.waitForSelector(inputPass));

        case 25:
          if (inputPass) {
            _context.next = 29;
            break;
          }

          console.log('username tidak ditemukan!');
          _context.next = 29;
          return regeneratorRuntime.awrap(browser.close());

        case 29:
          _context.next = 31;
          return regeneratorRuntime.awrap(page.type(inputPass, pass));

        case 31:
          _context.next = 33;
          return regeneratorRuntime.awrap(page.keyboard.press('Enter'));

        case 33:
          _context.next = 35;
          return regeneratorRuntime.awrap(delay(3000));

        case 35:
          url = page.url();

          if (!(url == 'https://twitter.com/home')) {
            _context.next = 140;
            break;
          }

          console.log('login berhasil');
          _context.next = 40;
          return regeneratorRuntime.awrap(page["goto"]('https://twitter.com/explore'));

        case 40:
          inputSearchKey = 'input[data-testid=SearchBox_Search_Input]';
          _context.next = 43;
          return regeneratorRuntime.awrap(page.waitForSelector(inputSearchKey));

        case 43:
          _context.next = 45;
          return regeneratorRuntime.awrap(page.type(inputSearchKey, searchKey));

        case 45:
          _context.next = 47;
          return regeneratorRuntime.awrap(page.keyboard.press('Enter'));

        case 47:
          console.log('menuju url pencarian mutual');
          _context.next = 50;
          return regeneratorRuntime.awrap(delay(5000));

        case 50:
          data = [];
          _context.t0 = data.push;
          _context.t1 = data;
          _context.t2 = _toConsumableArray;
          _context.next = 56;
          return regeneratorRuntime.awrap(page.evaluate(function () {
            return Array.from(document.querySelectorAll('a.css-4rbku5.css-18t94o4.css-901oao.r-1bwzh9t.r-1loqt21.r-xoduu5.r-1q142lx.r-1w6e6rj.r-37j5jr.r-a023e6.r-16dba41.r-9aw3ui.r-rjixqe.r-bcqeeo.r-3s2u2q.r-qvutc0'), function (a) {
              return a.href;
            });
          }));

        case 56:
          _context.t3 = _context.sent;
          _context.t4 = (0, _context.t2)(_context.t3);

          _context.t0.apply.call(_context.t0, _context.t1, _context.t4);

          console.log('mendapatkan semua link mutual');
          console.log(data);
          rd = data.reverse();
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 65;
          _iterator = rd[Symbol.iterator]();

        case 67:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context.next = 125;
            break;
          }

          el = _step.value;
          _context.next = 71;
          return regeneratorRuntime.awrap(page["goto"](el));

        case 71:
          _context.next = 73;
          return regeneratorRuntime.awrap(delay(5000));

        case 73:
          _context.next = 75;
          return regeneratorRuntime.awrap(page.$('article[data-testid=tweet]'));

        case 75:
          tweetParent = _context.sent;
          _context.next = 78;
          return regeneratorRuntime.awrap(tweetParent.click());

        case 78:
          _context.next = 80;
          return regeneratorRuntime.awrap(delay(3000));

        case 80:
          urlLike = page.url();
          console.log('menuju link untuk follow-follow orang');
          _context.next = 84;
          return regeneratorRuntime.awrap(page["goto"](urlLike + '/likes'));

        case 84:
          _context.next = 86;
          return regeneratorRuntime.awrap(delay(10000));

        case 86:
          _context.next = 88;
          return regeneratorRuntime.awrap(page.$$('div.css-18t94o4.css-1dbjc4n.r-42olwf.r-sdzlij.r-1phboty.r-rs99b7.r-15ysp7h.r-4wgw6l.r-1ny4l3l.r-ymttw5.r-o7ynqc.r-6416eg.r-lrvibr'));

        case 88:
          followButton = _context.sent;
          _iteratorNormalCompletion2 = true;
          _didIteratorError2 = false;
          _iteratorError2 = undefined;
          _context.prev = 92;
          _iterator2 = followButton[Symbol.iterator]();

        case 94:
          if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
            _context.next = 105;
            break;
          }

          _el = _step2.value;
          _context.next = 98;
          return regeneratorRuntime.awrap(_el.click());

        case 98:
          console.log(_chalk["default"].greenBright('sukses follow'));
          console.log('tunggu 10 detik sebelum menfollow akun selanjutnya');
          _context.next = 102;
          return regeneratorRuntime.awrap(delay(10000));

        case 102:
          _iteratorNormalCompletion2 = true;
          _context.next = 94;
          break;

        case 105:
          _context.next = 111;
          break;

        case 107:
          _context.prev = 107;
          _context.t5 = _context["catch"](92);
          _didIteratorError2 = true;
          _iteratorError2 = _context.t5;

        case 111:
          _context.prev = 111;
          _context.prev = 112;

          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }

        case 114:
          _context.prev = 114;

          if (!_didIteratorError2) {
            _context.next = 117;
            break;
          }

          throw _iteratorError2;

        case 117:
          return _context.finish(114);

        case 118:
          return _context.finish(111);

        case 119:
          console.log('menunggu 10 menit biar ga banned');
          _context.next = 122;
          return regeneratorRuntime.awrap(delay(600000));

        case 122:
          _iteratorNormalCompletion = true;
          _context.next = 67;
          break;

        case 125:
          _context.next = 131;
          break;

        case 127:
          _context.prev = 127;
          _context.t6 = _context["catch"](65);
          _didIteratorError = true;
          _iteratorError = _context.t6;

        case 131:
          _context.prev = 131;
          _context.prev = 132;

          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }

        case 134:
          _context.prev = 134;

          if (!_didIteratorError) {
            _context.next = 137;
            break;
          }

          throw _iteratorError;

        case 137:
          return _context.finish(134);

        case 138:
          return _context.finish(131);

        case 139:
          console.log('link sudah habis, mencoba mencari kembali....');

        case 140:
          console.log('gagal login, password salah!');
          _context.next = 143;
          return regeneratorRuntime.awrap(delay(4000));

        case 143:
          _context.next = 145;
          return regeneratorRuntime.awrap(browser.close());

        case 145:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[65, 127, 131, 139], [92, 107, 111, 119], [112,, 114, 118], [132,, 134, 138]]);
})();