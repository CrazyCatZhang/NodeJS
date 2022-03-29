let str = "Cat Zhang";
let buf = Buffer.from(str);
console.log(buf);

let buf2 = Buffer.alloc(10);

buf2[0] = 88;
buf2[1] = 255;
buf2[2] = 0xaa;
buf2[3] = 255;
console.log(buf2[2].toString());

let buf3 = Buffer.from('CrazyCatZhang');

console.log(buf3.toString());