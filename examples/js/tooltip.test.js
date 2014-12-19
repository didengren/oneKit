requirejs.config({
	paths: {
		'oneKit': '../../dist/js' //指定Module所在的路径
	}
})

require(["oneKit/tooltip"], function(){

})