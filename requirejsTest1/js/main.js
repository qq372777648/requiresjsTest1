//如果模块存在依赖：则第一个参数是依赖的名称数组；
//第二个参数是函数，
//在模块的所有依赖加载完毕后，该函数会被调用来定义该模块，
//因此该模块应该返回一个定义了本模块的object。
//依赖关系会以参数的形式注入到该函数上，参数列表与依赖名称列表一一对应。

define(["require","mdl2","main"], function(require,md2) {
		require(["m1"],function(m1){
			m1.func1();
		});
		
		md2.func2();
        //return an object to define the "my/shirt" module.
//      return {
//          color: "blue",
//          size: "large",
//          func1: function() {
//             console.log("main func1")
//          }
//      }
    }
);