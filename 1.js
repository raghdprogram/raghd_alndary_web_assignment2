let password = "raghd";
let password1;
password1 = window.prompt("أدخل كلمة المرور");
if (password1 == password)
{
    alert("اهلا بك");
    let country;
    country = window.prompt("أدخل اسم الدولة لتعرف عاصمتها ");
    
    switch(country)
    {
        case "اليمن": 
            document.writeln("عاصمة دولة اليمن صنعاء ");
            break;
        case "مصر": 
            document.writeln(" عاصمة دولة مصر القاهرة");
            break;
        case "العراق": 
            document.writeln("عاصمة دولة العراق بغداد");
            break;
        case "الأردن": 
            document.writeln("عاصمة دولة الأردن عمان ");
            break;
        case "السودان": 
            document.writeln("عاصمة دولة السودان الخرطوم ");
            break;
        case "سوريا": 
            document.writeln(" عاصمة دولة سوريا دمشق");
            break;
        case "فلسطين": 
            document.writeln("عاصمة دولة فلسطين القدس");
            break;
        default: 
            document.writeln(" الدولة التي أدخلتها ليست من ضمن الخيارات المتاحة ");
    }
    document.write("<br>");
}
else
{
    alert("كلمة المرور غير صحيحة");
}


// طباعة الارقام من 1 الى 5
for(var i=1; i<=5; i++)
{
    document.write(i+" ");
}
document.write("<br>");

let fact = 1;
// ايجاد مضروب عدد يدخله المستخدم
let num = prompt(" أدخل رقم لمعرفة المضروب ");
for (let i=1; i<=num; i++)
{
    fact *= i;
}
alert("مضروب العدد " + num + " هو :" + fact);

//--
// طباعة الارقام من 10 الى 1
var i = 10;
while(i>0)
{
    document.write(i + " ");
    // document.write("\t");
    i--;
}
document.write("<br>");

//--
// طباعة حرف خ  عشر مرات
i = 1;
do {
    document.write("خ  " + "\t");
    i++;
} while(i<=10);
document.write("<br>");