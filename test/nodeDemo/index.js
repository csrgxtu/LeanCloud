var AV = require('avoscloud-sdk').AV;
AV.initialize("akcp77b0gbig6gs9ee8zayjmj2dcoaj0wjwxrwj056jytkqa", "s8bxfhbyiv2y87h65fe8buf2tn8izjmba3ice9478tgk2apa");
var TestObject = AV.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}, {
  success: function(object) {
    console.log("LeanCloud Works!");
  }
});
testObject.save({name: 'archer'}, {
  success: function(obejct) {
    console.log("save name to LeanCloud");
  }
});
