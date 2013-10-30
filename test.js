
var assert = require('assert');
var isbot = require('./index');

assert(isbot('Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'));
assert(isbot('AdsBot-Google (+http://www.google.com/adsbot.html)'));
assert(!isbot('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.101 Safari/537.36'));
assert(!isbot(''));