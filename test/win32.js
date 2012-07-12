var test = require('tap').test;
var parents = require('../');

test('win32', function (t) {
    var dir = 'C:\\Program Files\\Maxis\\Sim City 2000\\cities';
    var dirs = parents(dir, { platform : 'win32' });
    t.same(dirs, [
        'C:\\Program Files\\Maxis\\Sim City 2000\\cities',
        'C:\\Program Files\\Maxis\\Sim City 2000',
        'C:\\Program Files\\Maxis',
        'C:\\Program Files',
        'C:',
    ]);
    t.end();
});
