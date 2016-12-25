myApp.service('LoggedUserService', function() {
    var user = {};
    var id = null;
    return {
        getUser : function(){
            return user;
        },
        getId : function(){
            return id;
        },
        setUser : function(value){
            user = value;
            id = value.id;
        }
    }
});