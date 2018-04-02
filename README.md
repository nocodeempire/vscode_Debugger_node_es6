# vscode_Debugger_node_es6  在vscode中使用es6写nodejs的配置方法。

```html
1.首先在根目录下建立.babelrc文件，写入babel配置，我的配置如下，记得npm安装babel及你需要的presets或者plugin。
{
 "presets": [
 "es2015",
 "stage-3"
 ]
}

2.其实此时已经可以通过babel-node来执行你的es6代码了。
babel-node src/index.js
然而这样的话，vscode里面是无法调试的。所以我们得换个思路，首先将源码使用babel转换，然后执行转换后的代码，附加一份sourcemap就好了。

3.package.json中增加build命令，使用babel转换es6代码。
"scripts": {
......
"build": "babel src -d dist --source-maps"
}

4.创建一个npm task（vscode概念），用来执行npm run build (该文件在根目录.vscode目录下，名字是tasks.json，如果没有可以自己创建一个。)
    "version": "2.0.0",
    "tasks": [
        {
            "label": "build",
            "type": "npm",
            "script": "build",
            "problemMatcher": []
        }
    ]
    
5.在vscode的调试配置文件中(.vscode -> launch.json)，进行如下配置
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "启动程序",
            "program": "${workspaceFolder}\\src\\index.js",
            "sourceMaps": true,
            "outFiles": [
            "${workspaceRoot}\\dist\\index.js"  //源映射，指定实际执行文件
            ], 
            "preLaunchTask": "build" //首先执行build task
        }
    ]
    
    
    
主要干了这几件事：
开启source-map，以便追踪到es6源码
运行前先执行build，编译es6源码
执行和调试编译后的代码
OK，现在我们就可以愉快的在vscode里用es6写nodejs了
```
