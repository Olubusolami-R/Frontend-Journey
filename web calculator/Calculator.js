const input=document.getElementById("textinput");
var buttons=document.querySelectorAll(".numops > button");
var sign="";
var val=0.0;

for(var i=0; i<buttons.length; i++){
    console.log(buttons[i]);

    buttons[i].onclick=function(){
        if(this.innerHTML==="C"){
            input.value="";
        }

        else if((this.innerHTML==="+" )|| (this.innerHTML==="-" )|| (this.innerHTML==="/" )||(this.innerHTML==="x" )){
            val=parseFloat(input.value);
            sign=this.innerHTML;
            input.value="";
        }

        else if(this.innerHTML==="="){

            var temp=0.0;
            if(sign==="+"){
                temp = val + parseFloat(input.value);
                input.value=temp.toFixed(7);
            }
            else if(sign==="-"){
                temp = val - parseFloat(input.value);
                input.value=temp.toFixed(7);
            }
            else if(sign==="x"){
                temp = val * parseFloat(input.value);
                input.value=temp.toFixed(7);
            }
            else{
                temp = val / parseFloat(input.value);
                input.value=temp.toFixed(7);
            }

        }
        else{
                input.value=input.value + this.innerHTML;
            }
    }
}
