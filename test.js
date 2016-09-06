
var assert = require('assert');
var isbot = require('./index');

assert(isbot('Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'));
assert(isbot('AdsBot-Google (+http://www.google.com/adsbot.html)'));
assert(!isbot('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.101 Safari/537.36'));
assert(!isbot('Mozilla/5.0 (Linux; U; Android 4.0.3; en-us; KFTT Build/IML74K) AppleWebKit/537.36 (KHTML, like Gecko) Silk/3.41 like Chrome/37.0.2026.117 Safari/537.36'));
assert(isbot('Pinterest/0.2 (+http://www.pinterest.com/)'));
assert(!isbot('Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13F69 [Pinterest/iOS]'));
assert(isbot('W3C_Validator/1.3'));
assert(!isbot(''));
