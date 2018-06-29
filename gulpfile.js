var gulp = require('gulp');
var server = require('gulp-webserver');
var fs = require('fs'),
    url = require('url'),
    mock = require('./mock/')
path = require('path');
var mincss = require('gulp-clean-css');
var minhtml = require('gulp-htmlmin');
var text = require('./mock/text.json').userInfo;

gulp.task('server', function() {
    gulp.src('src')
        .pipe(server({
            port: 7777,
            host: "localhost",
            open: true,
            middleware: function(req, res, next) {
                if (req.url === '/favicon.ico') {
                    return false;
                };
                var pathname = url.parse(req.url).pathname;
                pathname = pathname === '/' ? "/index.html" : pathname
                if (/\/api\//.test(pathname)) {
                    // res.end(JSON.stringify(mock(req.url)));
                    if (pathname === '/api/register') {
                        var objarr = [];
                        req.on('data', function(chunk) {
                            objarr.push(chunk);
                        });
                        req.on('end', function() {
                            var objData = require('querystring').parse(Buffer.concat(objarr).toString());
                            text.push(objData);
                            var objUser = {
                                userInfo: text
                            };
                            fs.writeFileSync('./mock/text.json', JSON.stringify(objUser));
                        });
                        return false;
                    } else if (pathname === '/api/login') {
                        var objarr = [];
                        req.on('data', function(chunk) {
                            objarr.push(chunk);
                        });
                        req.on('end', function() {
                            var objData = require('querystring').parse(Buffer.concat(objarr).toString());
                            var result = text.some(function(v) {
                                return v.user === objData.user && v.pwd === objData.pwd;
                            });
                            if (result) {
                                res.end('{"code": 1, "mes": "success"}');
                            } else {
                                res.end('{"code": 0, "mes": "用户不存在,请注册"}');
                            }
                        });
                        return false;
                    }
                    res.end(JSON.stringify(mock(req.url)));
                } else {
                    res.end(fs.readFileSync(path.join(__dirname, 'src', pathname)))
                }
            }
        }));
});

// css
gulp.task('mincss', function() {
        gulp.src('src/css/*.css')
            .pipe(mincss())
            .pipe(gulp.dest('build/css'))
    })
    // html
gulp.task('minhtml', function() {
    gulp.src('src/*.html')
        .pipe(minhtml({
            collapseWhitespace: true, //压缩HTML
            removeComments: false // 是否删除注释
        }))
        .pipe(gulp.dest('build/index'))
})