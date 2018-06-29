var homedate = require('./home/home');
var page1 = require('./home/recommend1');
var page2 = require('./home/recommend2');
var page3 = require('./home/recommend3');
var searchkey = require('./search/searchKey');
var searchResult = require('./search/search');
var detail = require('./detail/352876');
var chapter = require('./detail/chapter-list');
var reader1 = require('./detail/data1');
var reader2 = require('./detail/data2');
var reader3 = require('./detail/data3');
var reader4 = require('./detail/data4');

var data = {
    '/api/index': homedate,
    '/api/loadmore?pagenum=1&limit=20': page1,
    '/api/loadmore?pagenum=2&limit=20': page2,
    '/api/loadmore?pagenum=3&limit=20': page3,
    '/api/bookself': page1,
    '/api/searchkey': searchkey,
    '/api/detail?id=352876': detail,
    '/api/chapter?id=352876': chapter,
    '/api/reader?chapternum=1': reader1,
    '/api/reader?chapternum=2': reader2,
    '/api/reader?chapternum=3': reader3,
    '/api/reader?chapternum=4': reader4
};
module.exports = function(url) {
    if (/\/api\/result/.test(url)) {
        var n = url.split("?")[1];
        var val = decodeURIComponent(n.split("=")[1]);
        var reg = new RegExp(val, 'g');
        var obj = {
            mes: "暂无数据",
            cont: []
        }
        var newarr = searchResult.items.filter(function(v, i) {
            v.authors = v.role[0][1];
            v.summary = v.intro;
            return reg.test(v.title) || reg.test(v.intro) || reg.test(v.role[0][1]);
        });
        if (newarr.length) {
            obj.mes = "success";
            obj.cont = newarr;
        }
        return obj;
    }
    return data[url];
};