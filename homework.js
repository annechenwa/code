function coolModule(){
    var something="cool";
    function change(){
        API.identify=doAnother;
    }
    function doSomething(){
        console.log(something);
    }
    function doAnother(){
        console.log(something.toUpperCase());
    }
    var API={
        change:change,
        identify:doSomething
    };
    return API;
}
var foo=coolModule();
foo.identify();
foo.change();
foo.identify();

 var This={
    a:2,
    b:function c(){
        console.log(this.a);
    }   
}
This.b();


