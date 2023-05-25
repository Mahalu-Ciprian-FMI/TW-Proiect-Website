window.addEventListener("load",function()
{
    let elems=document.getElementsByClassName("stylechange")
    for(let i=0;i<elems.length;i++)
    {
        if(i%3==0)
            {elems[i].style.color='red';}
        if(i%3==1)
            {elems[i].style.color='yellow';}
        if(i%3==2)
            {elems[i].style.color='blue';}
    }
})

window.addEventListener("load",function()
{
    let arr=document.querySelectorAll("div li");
    arr.forEach(e=>
        {
            let a=document.createElement("li");
            a.innerText="I am a created li,delete me by clicking on me!";
            e.appendChild(a);
            a.addEventListener('click',()=>
            {
                a.remove();
            })
        })
})

function Prime()
{
    let ok=1;
    prim=document.getElementById("nr_prim").value;
    console.log(prim);
    if(prim==1)
        {ok=0;alert(`Numarul ${prim} nu este un numar prim.`)}
    if(prim%2==0)
        {ok=0;alert(`Numarul ${prim} nu este un numar prim.`)}
    for(let i=3;i*i<prim;i=i+2)
    {
        if(prim%i==0)
            {ok=0;alert(`Numarul ${prim} nu este un numar prim.`)}
    }
    if(ok)
    {
        alert(`Ati introdus numarul ${prim}, un numar prim!`);
    }
}

window.addEventListener("load",function()
{
    setTimeout(()=>
{
    document.getElementsByTagName("h2")[0].innerText="Am umplut un h2 dupa 5 secunde de la deschiderea paginii"
},5000)
})


function generateDivBox(i)
{
    const w=window.innerWidth;
    const h=window.innerHeight;
    function randomPosition(limit)
    {
        return Math.random()*(limit+50);
    }
    const div=document.createElement("div");
    div.style.width="50px";
    div.style.height="50px";
    div.style.position="absolute";
    div.style.top=randomPosition(h)+"px";
    div.style.left=randomPosition(w)+"px";
    div.style.border="1px solid black";
    div.innerText=i;
    document.body.append(div);
}
window.addEventListener("load",function M_interval()
{
    let i=0;
    let intervalID=setInterval(()=>{
        [3*i+1,3*i+2,3*i+3].forEach(generateDivBox);
        i++;
        if(i==3)
        {
            clearInterval(intervalID);
        }
    },3000)
})

function localstoragefunction()
{
    let x=prompt("Intorudecti data curenta")
    details={x};
    localStorage.setItem("details",x)
}
function aflalocalstorage()
{
    alert(localStorage.getItem("details"));
}
