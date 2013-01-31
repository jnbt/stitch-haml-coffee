(function(){
  var fs, stitch, coffeescript, hamlc;

  fs     = require("fs");
  stitch = require("stitch");
  coffeescript = require("coffee-script");
  hamlc  = require("haml-coffee/src/haml-coffee");

  stitch.compilers.hamlc = function(module, filename){
    var compiler, content, template;
    compiler = new hamlc({});
    content  = fs.readFileSync(filename, "utf8");
    compiler.parse(content)
    template = compiler.precompile();
    template = coffeescript.compile(template);
    module._compile("module.exports = (function(data){ return (function(){ return "+template+"; }).call(data); })", filename);
  };

})();
