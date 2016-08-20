angular.module('starter.services', [])

// setting up a factory for food
.factory('Food', function() {
        var data = {
        tasks: [{date:new Date(),
        name: "",
        calories: 0}],
        total : 0    
    }
   // }
    
    
    // food function to gather data
    function addFood(m, n){
        data.tasks.push({date: new Date(), name: m, calories: n});
        data.total += Number(n);
    }
    
    
    // return method to return values
    return {
        data: data,
        addFood : addFood,
        deleteTask: function (del){    
        data.tasks.splice(data.tasks.indexOf(del), 1);
        data.total = 0;
        for (var i = 0; i < data.tasks.length; i++)
            {
                data.total += Number(data.tasks[i].calories);
            }
      }
    }
});
