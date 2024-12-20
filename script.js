const btnClicked=(e)=>{
    console.log(e.target.innerText)
    //console.log("hi all")
    inp.value+=e.target.innerText
}

const getResult=()=>{
    try
    {
        const result=eval(inp.value)
        inp.value=result

    }
    catch{
    inp.value="invalid expression"
    }
}

const backspace=()=>{
    inp.value=inp.value.slice(0,inp.value.length-1)
}

const clearINP=()=>{
    inp.value=""
}
