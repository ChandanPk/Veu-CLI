new Vue({
    //The element to be tracked by the Vue cli where 'el' stands for element name
    el: "#app",
    //All the dynamic values are initiated from here
    data: {
        name: "Vijay maaliya",
        greet: ""
    },
    //object of functions or methods 
    methods: {
        greeting(time){
            return "Welcome " + this.name + ", happy " + time;
        }
    }

})