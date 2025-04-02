import { useState } from "react";

function AgeValidation(){
    const age=21;


const [boxStyle, setBoxStyle]=useState({
                                           backgroundColor:"black",
                                           color:"red"
                                       })



function changeStyle(myStyle){
    setBoxStyle(myStyle)
}


    return<>
    <h1 style={{
        color:(age>=18)?"green":"red"
    }}>User Age:{age}</h1>
    <div style={boxStyle}>
{
    (age>=18)?
    <h1>User age is Valid to apply driving license</h1>:
    <h1>User age is inValid to apply driving license</h1>

}

</div>

<button  onClick={()=>{
    changeStyle({backgroundColor:"gray",
                 color:"orange"
    })
}}>Gray</button>
<button  onClick={()=>{
    changeStyle({backgroundColor:"purple",
        color:"red"
    })
}}>Purple</button>

    </>
}


export default AgeValidation;

