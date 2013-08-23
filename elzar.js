/*
      _               
     | |              
  ___| |______ _ _ __ 
 / _ \ |_  / _` | '__|
|  __/ |/ / (_| | |   
 \___|_/___\__,_|_|   

Elzar
Alfresco JavaScript tools
https://github.com/JonasHeylen/elzar

(c) 2013 Jonas Heylen
https://raw.github.com/JonasHeylen/elzar/master/LICENSE
*/

var $ = (function(search) {
  var undefinded, $,
      wrapper, emptyArray = [],
      nodeRefRE = /^\w+:\/\/\w+\/[a-zA-Z0-9-]+$/,
      ctx = Packages.org.springframework.web.context.ContextLoader.getCurrentWebApplicationContext();
 
  wrapper = function(nodes) {
    nodes = nodes || [];
    nodes.__proto__ = $.fn;
    return nodes;
  }
 
  $ = function(query) {
    if (nodeRefRE.test(query)) {
      return wrapper([search.findNode(query)]);
    } else {
      return wrapper(search.query({
        "query": query,
        "language": "fts-alfresco"
      }));
    }
  };
 
  $.fn = {
    forEach: emptyArray.forEach,
    reduce: emptyArray.reduce,
    push: emptyArray.push,
    sort: emptyArray.sort,
    indexOf: emptyArray.indexOf,
    concat: emptyArray.concat,
   
    each: function(fn) {
      var i;
      for(i = 0; i < this.length; i++) {
        fn.call(this[i], i, this[i]);
      }
      return this;
    }
  };

  $.dir = function(obj) {
    var props = [];
    for (var i in obj) {
        props.push(i);
    }
    logger.log(props.join(", "));
  }

  $.bean = function(name) {
    return ctx.getBean(name);
  }
 
  return $;
})(search);


var console = console || {
  log: function(msg) {
    logger.log(msg);
  }
};

var JSON = JSON || {
  stringify: function(obj) {
    return jsonUtils.toJSONString(obj);
  }
};

