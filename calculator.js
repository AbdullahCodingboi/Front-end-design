function display(value){
    
        document.querySelector("#OutPut").value+=value;
    }
    

function ClearScreen(){
    document.querySelector("#OutPut").value="";
}



function Solve(){
    let expression = document.querySelector("#OutPut").value;
    console.log(expression)
    try {
        let result = eval(expression);
        document.getElementById("OutPut").value = result;
    } catch (error) {
        document.getElementById("OutPut").value = 'Error';
    }
}

