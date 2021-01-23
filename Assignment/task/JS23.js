let object={
    name: 'JsStartup',
    value: 20,
    add(val){
        console.log(this.value);
        function number(val){
            return val* this.value;
        };
        return number(val);
    }
}
console.log(object.add(10));
