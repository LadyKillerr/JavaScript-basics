console.log('Hello World from HTML');

//key: value (được khai báo theo nguyên tắc này, ngăn cách bằng " : ")

let obj = { 
    name: 'Lady Killerr', // khai bao trong ngoặc đơn, đôi cũng đc 
    "address": 'Ha Noi',  
    email:`pornnhub`, 
    gender:`` ,
    // thậm chí có thể khai báo cả functions trong obj
    /*a: function () {
        console.log(`Hello world inside function`)
        return '' // k co keyword return thi may k hieu
    }*/
// convention: k duoc co dau cach trong ten key


};

let b = 'address';

// Muốn truy cập đến giá trị của một thuộc tính hoặc lấy key
//obj[b] = 'Lady chaser'
obj.name = 'Dung dep trai'


console.log(`what is your name? `, `My name is: `, obj.name)
console.log(`Where r u from? `, `I'm from: `, obj.address)


/*hoac la access obj bang array
console.log(`what is your name? `, `My name is: `, obj['name'])
console.log(`what is your name? `, `My name is: `, obj['address'])
*/
