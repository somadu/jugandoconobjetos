var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];
    for( var i=0; i < users.length; i++){
        if(users[i].name == "John"){
            console.log(users[i].age);
        }
    }

var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];
    for( var i=0; i < users.length; i++){
        if(users[i].name == "Michael"){
            console.log(users[i].name);
        }
    }

var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];
    for( var i=0; i < users.length; i++){
       console.log(users[i].name+'-'+users[i].age);
    }

var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];
    for( var i=0; i < users.length; i++){
        if(users[i].age > 18){
            console.log(users[i].age)
        }
    }