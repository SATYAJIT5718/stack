let product=[
    {p_name:'iphone-12',size:6.5,brand:'apple',price:60000,color:'black'},
    {p_name:'galaxy-S1',size:6.4,brand:'samsung',price:40000,color:'white'},
    {p_name:'realme-XT',size:6.3,brand:'realme',price:20000,color:'grey'},
    {p_name:'5130-xpress music',size:6.2,brand:'nokia',price:6000,color:'red'},
    {p_name:'zuk-z1',size:6.1,brand:'lenevo',price:15000,color:'blue'},
]
// console.log(product.length);  // to find out the length of the array
// console.log(product);
// console.log(product[2]); //to print indivisual object in an array

// by specific condition how to print specific part of the key and value
// for(let i=0;i<=product.length-1;i++){
//     if(product[i].color=='red')
//     console.log('brand:',product[i].brand,'p_name:',product[i].p_name);
// }

// console.log(product.color); // it's a undefined task becoz this array contain multiple object.   

for(let i=0;i<=product.length-1;i++){
        console.log(product[i]);      
    }