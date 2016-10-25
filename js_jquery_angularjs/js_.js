		var JSUtil = function(){};
		JSUtil.prototype = {
            getValue: function (id) {
                return document.getElementById(id).value;
            },

            setValue: function (id, value) {
                document.getElementById(id).value = value;
            }
        };
		var js_ = new JSUtil();