function vulnerable()
{
  console.log('VULNERABLE CODE EXECUTED!!!');
}
module.exports = {
    vulnerable,
    identity: function(s1){
        return s1;
    },
    helloStr: function(s1){
        return "Hello " + s1 + "!";
    },
    concat: function(s1,s2){
        if(typeof(s1) != "string" || typeof(s2) != "string"){
            return null
        }
        else
        {
            return s1 + s2;
        }
    }
}