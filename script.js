let a=87, b=65;
console.log(a+b)
let student ={
    firstName:"david",
    lastName:"wagner",
    age:20,
    email:"dWagner5@yahoo.de",
    marks:35
   
}
console.log(student.firstName)

let m=45, n=23;
if (m>n){
    console.log(m+n);}
else {console.log(n)};

let studentName="marita";
console.log("Rise and shine," +  studentName + "!")

//გამოაცხადეთ ცვლადი bonus და salary ცვლადები, salary -ს მიანიჭეთ სასურველი 
//რიცხვითი მნიშვნელობა, დაწერეთ თუ ხელფასი არის 2000 ლარი ან მეტი მაშინ ბონუსი არის 0,
 //თუ ხელფასი 2000 ze ნაკლებია მაშინ ბონუსი არის ხელფასის 10%. დაბეჭდეთ ბონუსი 
 //(ჯერ bonus ცვლადს უნდა მიანიჭოთ შესაბამისი მნიშვნელობა და შემდეგ დაბეჭდოთ bonus)// 

let bonys; let salary =1200;
if (salary>=2000){
    bonus=0}
else (salary<2000)
{bonus=salary*10/100}
console.log(bonus)

//გამოაცხადეთ ცვლადი a, b და c. სადაც a = 23, b=a-ნახევარი, c= a-ს და b-ს ჯამი. დაბეჭდეთ c.

let s=23, d=s/2, c=s+d;
console.log(c)

//გამოაცხადეთ მასივი phones ელემენტებით : Iphone, Samsung, Pixel, Huawei, Xiaomi და დაბეჭდეთ.

 let phones = ["iphone", "samsung", "pixel", "huawei", "xiaomi"]
 console.log (phones)
 console.log (phones[2])
 phones.push("motorola")
 console.log(phones)

//Დაბეჭდეთ რიცხვები 1 დან ( 1 შედის) 12-ის ჩათვლით.
//NOTE: შეამოწმო რიცხვი ლუწია თუ არა - n % 2 == 0 ( ანუ თუ რიცხვის 2 ზე გაყოფით ნაშთი არის 0 მაშინ რიცხვი ლუწია. Გამოიყენეთ სასურველი ციკლი

let i = 1;
for (i; i<=12; i++){
    console.log(i)
}
 
