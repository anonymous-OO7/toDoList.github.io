//<a href='https://www.freepik.com/photos/background'>Background photo created by Racool_studio - www.freepik.com</a>
//<a href='https://www.freepik.com/photos/background'>Background photo created by freepik - www.freepik.com</a>
//<a href='https://www.freepik.com/photos/coffee'>Coffee photo created by master1305 - www.freepik.com</a>



var elements =[];

function addElement(){
    if(document.querySelector(".addTxt").value.trim()!="")
    {
        elements.push(document.querySelector(".addTxt").value.trim());
       //alert(elements);
       
        display();
    }
}

function display()
{

    document.querySelector(".list").innerHTML="";
    const render = document.getElementById("lst");
    console.log(render);

    for(let i=0;i<elements.length;i++)
    {
        const newTask = document.createElement("li");

        newTask.innerHTML=
        `
         
            <h4>${elements[i]}</h4>

           <button  onclick="strike(${i})"> <i class="fas fa-check-circle"></i></buttton>
           <button onclick = "del(${i})"> <i class="fas fa-trash-alt"></i></button>

            
         
        `
        
        render.append(newTask);

    }



   // for(var i=0;i<elements.length;i++)
 //   {
    //    document.querySelector(".list").innerHTML += "<center><div >" + elements[i] + <i class="fas fa-check-circle"></i> +  <i class="fas fa-check-circle"></i> +"</div></center>";
   // }
}



function del(index)
{
    elements.splice(index,1);
    display();
}

function strike(index)
{
    if(elements[index].includes("<strike>")){
    elements[index] = elements[index].replace("<strike>","");
    elements[index] = elements[index].replace("</strike>","");
    }else{
        elements[index] = "<strike>" + elements[index]+"</strike>"
    }

    display();

}




