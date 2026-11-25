function alettt(d) {
    alert(d);
}
function aaaa(){
    alert("connectted")
}
function promett()
{
    const display= document.getElementById('display');
    const valueprom=window.prompt();
    display.value += valueprom;
}
const display = document.getElementById('display');
function appendValue(value) {

    const operators = ['+', '-', '*', '/'];
    if (operators.includes(value)) {
        const isConfirmed = confirm('هل تريد إجراء العملية الحسابية؟');

        if (!isConfirmed) {
            return;
        }
    }
    display.value += value;
}
function clearDisplay() {
    display.value = '';
}
function calculateResult() {
    if (!display.value) return; 
    const confrimalert = confirm('هل تريد حساب النتيجة؟');
    if (confrimalert) {
        try {
            const result = eval(display.value); 
            display.value = result;
        } catch (error) {
          alert('حدث خطأ! المعادلة غير صحيحة.');
            display.value = 'خطأ';
        }
    }
}
function handleKeyPress(event) {
    const key = event.key;
    if (key === 'Enter') {
        calculateResult(); 
        return;
    }
    const allowedControls = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'];
    if (allowedControls.includes(key)) {
        return;
    }
    const operators = ['+', '-', '*', '/'];
    if (operators.includes(key)) {

        const isConfirmed = confirm('هل تريد إجراء العملية الحسابية؟');
        if (isConfirmed) {
            display.value += key;   
        }
        return;
    }
    const allowedNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
    if (!allowedNumbers.includes(key)) {
        event.preventDefault(); 
    }
}