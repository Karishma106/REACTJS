const array=[10,20,"karishma",23.0,Date()]
console.log("before change:")
for (var ele in array){
    console.log(array[ele])
}

// array(0)=Date.UTC()
array.push("kavin")

console.log("after change :")
array.pop()
array.pop()
array.pop()
array.pop()

console.log(array)
for (var ele in array){
    console.log(array[ele])
}
if(array.length > 0){
    console.log("elements are present")

    for (var ele in array){
        console.log(array[ele])
    }
}    
else{
        console.log(ele)
}

//object
a=  {
    car:"audi",
    model:"ab",
    airbag:"0",
    wheels:"5",
    color:"blue"
}
console.log(a['color'])
console.log(a.airbag)
var some= 'model'
console.log(a[some])
console.log(a)
a.car="bmw"
console.log(a)
a.sunroof= {ispresent:"yes", shape:"rectangle"}
console.log(a.sunroof.ispresent)
//console.log(len)
for (var ele in a){
    console.log(ele +":"+a[ele])
    if(typeof a[ele]==="object"){
        for (var val in a[ele]){
            console.log(val + ":"+ a[ele][val])
        }
    }
}
//functions
function fun_name(){
    console.log(5 + "5")
}
 fun_name()
 
function fun_name(){
    console.log(5 + 5 + "karish" + 5)
    
}
 fun_name()

