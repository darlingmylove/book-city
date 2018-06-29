> 项目介绍
````
  读书在小米 创作无极限 —— 这个口号一直是起点众多玄幻、魔幻、武侠、军文小说作者的创作目标，严谨的写作态度，锲而不舍的求新求变，与书友的直接沟通交流修改，从而小米读书拥有国内很多具有一流水平的原创作品，使书友得以在第一时间阅读到作者连载的好书佳作。
```````
> 技术栈
````
gulp + require + handlebars + ES6/7 + ajax  + flex
`````
> 项目运行
````
git clone git@github.com:darlingmylove/book-city.git
npm install --save-dev
```````
> 目录介绍
`````
-------- book-city -------
    1.mock
      1.1-- detail
        1.1.1--- 352876.json // 老九门数据
        1.1.2--- chapter-list.json // 目录
        1.1.3--- data1.json // 第一章的jsonp地址
        1.1.4--- data2.json // 第二章的jsonp地址
        1.1.5--- data3.json // 第三章的jsonp地址
        1.1.6--- data4.json // 第四章的jsonp地址
      1.2-- home
        1.2.1--- home.json // 首页数据
        1.2.2--- recommend1.json // 加载更多数据
        1.2.3--- recommend2.json // 加载更多数据
        1.2.4--- recommend3.json // 加载更多数据
      1.3--search 
        1.3.1--- search.json // 搜索结果
        1.3.2--- searchKey.json // 搜索关键字
      1.4-- index.js    // 数据接口
      1.5-- text.json   //用户数据
    2.src
      2.1-- css   // 样式
        2.1.1 ---detail.css
        2.1.2 ---login.css
        2.1.3 ---menu.css
        2.1.4 ---read.css
        2.1.5 ---search.css
        2.1.6 ---style.css
      2.2-- img
      2.3-- js
        2.3.1---common
           ------getUrl.js //获取地址栏参数
           -------temp.js //handlebars模板编译公共方法
        2.3.2---detail
          --------index.js  // 详情页
        2.3.3---index
          --------index.js // 首页
        2.3.4---lib
          
        2.3.5---login
          --------login.js  // 登录页
        2.3.6---menu
          --------menu.js   // 目录页
        2.3.7---read
          --------read.js   // 阅读页
        2.3.8---search
          -------search.js  // 搜索页
      ----config.js
      2.4-- login
        ----login.html
      2.5-- page
        ----detail.html
        ----menu.html
        ----read.html
        ----search.html
      2.6-- template
        ----bolck.html  // 本周最火和限时免费模板
        ----detail.html // 详情页模板
        ----dl-list.html  // 女生最爱，男生最爱和加载更多
        ----index.html  // 首页模板
        ----recommend-list.html // 重磅推荐
      2.7-- index.html  // 首页
`````
> 部分截图
`````
![image](./src/img/截图/首页.png)
![image](./src/img/截图/详情页.png)
![image](./src/img/截图/目录页.png)
![image](./src/img/截图/阅读页.png)
![image](./src/img/截图/登录页.png)