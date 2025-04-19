//1
var username='Inji';
 console.log(username);    //Inji


//2
let isLoggedIn= true;
console.log(isLoggedIn);  //true

//3
const max_Users=100;

//4
let email;
if (email==undefined)  
{
    console.log(email);
}                      //undefined

//5
let score= 100;
console.log(score);    //100

function scoreAdd(score, a){
    return score -a
}

score=scoreAdd(score,10)
console.log(score);        //90
score=scoreAdd(score,15)
console.log(score);        //75


//6
function sayHello(){
    console.log("Hello world");
}
sayHello();               //Hello world

//7
function showMessage(message){
    console.log(message)
}
showMessage("Hello world!")        //Hello world!

//8
const doubleNumber=(number)=>number*2
console.log(doubleNumber(100));          //200

//9
function logInfo(title = "Info", item1="test1", item2="test2",item3="test3") {
    console.log(title,item1,item2,item3);                      

}
logInfo();           // Info test1 test2 test3

//10
const book = {
    title: "The big four",
    author: "Agatha Christie",
    year: 1927
};

//11
console.log(book.title);        //The big four
console.log(book["year"]);      //1927

//12
book.genre="Detective";
console.log(book.genre);        //Detective

//13
book.year=1928
console.log(book);             
 //{  title: 'The big four', author: 'Agatha Christie',year: 1928, genre: 'Detective'}


//14
book.getSummary= function(){
    return  `${this.title} by ${this.author} published in ${this.year}`
}
console.log(book.getSummary());               //The big four by Agatha Christie published in 1928

//15
const colors = ["blue", "green","red"];
console.log(colors[1]);                //green

//16
colors.push("yellow");
console.log(colors);           //[ 'blue', 'green', 'red', 'yellow' ]

//17
const numbers = [10, 20, 30, 40];
const tripled = numbers.map(n => n * 3);
console.log("Tripled:", tripled);                 //Tripled: [ 30, 60, 90, 120 ]

//18
const numbers2 = [1, 2, 18, 20, 13, 5, 4, 55];
const greaterThanTen = numbers2.filter(b => b > 10);
console.log("Numbers greater than ten:", greaterThanTen);          //Numbers greater than ten: [ 18, 20, 13, 55 ]

//19
const numbers3 = [1, 2, 18, 20, 13, 5, 4, 55];
const total = numbers3.reduce((sum, c) => sum + c, 0);
console.log("Sum:", total);           //Sum: 118

//20
var temperature= 15;
if(temperature>30){
   console.log("It's hot");
}
else{
    console.log("It's cool");
}                                         //It's cool

//21
const day = "Thursday";
switch (day) {
  case "Monday":
    console.log("beginning of the week");
    break;
  case "Friday":
    console.log("last of the week");
    break;
  default:
    console.log("midweek");
}                                         //midweek

//22
for (let i = 1; i <=5; i=i+1) {
    console.log( i);
  }                                    //1     2      3      4      5


  //23
  let count =0;
  while (count <= 3) {
    console.log(count);
    count++;
  }                                   // 0   1  2   3

  //24
  const animals=['dog','cat','snake','sheep']
  for(const animal of animals ){
    console.log(animal);
  }
   //dog
   //cat
   //snake
   //sheep
  
  
