define(function(require, exports) {
	var uriToObj, getArgs;

	getArgs = function(element) {
    	this.$element = $(element);
    	var args = this.$element.attr('event-args');
    	return uriToObj(args);
    };

    

	/**
	 * 将uri转换为对象格式
	 *
	 * @param uri URI 格式的数据
	 */
	uriToObj = function(uri) {
		if(!uri) {
			return {};
		}
	    var obj = {};
	    var args = uri.split("&");
	    var l;
	    var arg;
	    l = args.length;
	    while(l-- > 0) {
	        arg = args[l];
	        if(!arg) {
	            continue;
	        }
	        arg = arg.split("=");
	        obj[arg[0]] = arg[1];
	    }
	    return obj;
	};

   
	exports.getArgs = getArgs;
});