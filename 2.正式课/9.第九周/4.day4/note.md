# 类库、框架、组件、插件
1.类库 
  jquery、Zepto、underscore，类库中提供了大量的方法供我们在项目中使用，类库就是一个工具包，让我们在开发项目的时候变得更快，更简单

2.插件
  tab选项卡、banner轮播图、拖拽、swiper插件
  jquery中其实也有大量的插件
  插件就是把某一个具体的功能进行封装

3.组件
  bootstrap ui组件库 swiper  layui
  ui组件库一般都是大量插件的一个集合。不仅提供了js的功能，还把结构和样式也实现了，我们需要做的就是复制粘贴就能够实现一款产品

4.框架
  vue、react、angular、uni-app、react native、flutter、。。。。。
  一般来说框架就是类库和组件的综合体，里面提供了大量供我们操作的方法，也有配套的ui库供我们去快速开发项目；框架是具备独立的思想，vue(mvvm思想)，让我们告别传统操作dom的方式，mvvm可以让按照视图和数据的相互渲染完成项目的开发，你不用管人家怎么变，人家内部的操作逻辑肯定比我们之前操作原生dom，性能要更好

  框架 vue(mvvm)、react(mvc)
  app框架(uni-app、react native、flutter)

  vue2 咱们学习和使用的第二代版本的vue， 尤雨溪



声明式：直接告诉计算机你想要干什么(计算机帮你做)
命令式：把你想要指向的结果的指向方式告诉极端(自己告诉计算机一步一步该怎么实现)

中后台项目：后台管理系统
to B项目 后台项目
to C项目 给用户使用的项目  vant
埋点：就是在页面展示，或者用户点击某一个按钮的时候都会统一的往后台发送一个接口(接口里有对应的参数来区分用户操作的区域)用来记录用户的行为轨迹，记录一下用户对这宽项目的一个操作情况，从而给pm一个判断页面功能有无缺陷的依据
http：//www.baidu.xyk.com?lx=1


# 渐进式框架
> 框架一般都是重量级的，里边包含了很多方法，但是我们在实际开发过程中可能不会用到框架的框架的所有方法，所以他们(框架开发人员)会按照功能把框架分模块开发
vue 基础模块(基础的语法，核心功能、组件化开发、相关指令)
vue-router构建SPA单页面应用的路由
vuex：公共数据(状态)的工具
vue-cli：vue的脚手架
components：element-ui iview vant....

# vue的MVVM

> MVC：是单向数据绑定，数据更改可以渲染视图，但是视图更改不能更新数据(需要我们自己手动更改数据)
> MVVM：是双向数据绑定的，vue本身就可以实现数据和视图之间的相互监听，并且从真正意义上把视图和数据分开了
把你的view和model进行分离
m:model数据层
v：view视图层
vm：viewModel是数据和视图的监听层







