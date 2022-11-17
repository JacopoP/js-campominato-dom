const container=document.getElementById("container");
const result=document.querySelector("h2");

document.getElementById("generate").addEventListener("click",
    function(){
        result.classList.add("hide")
        container.classList.remove("hide");
        container.innerHTML="";
        console.clear();
        const n=parseInt(document.getElementById("difficulty").value);
        const bombArr=ArrRandNumGen(16, 1, n*n);
        console.log(bombArr);
        let score=0;
        for(let i=1; i<=n*n; i++){
            const newElement = createBox(n, i);            
            if(bombArr.includes(i)){
                newElement.classList.add("bomb");
            }
            newElement.addEventListener("click",
                function(){
                    const table=document.getElementsByClassName("box");
                    if(!this.classList.contains("selected")){
                        this.classList.add("selected");
                        if(this.classList.contains("bomb")){                            
                            for(let k=0; k<n*n; k++){
                                table[k].classList.add("selected")
                            }
                            result.classList.remove("hide");
                            result.innerHTML=`Hai perso! Hai fatto ${score} punti`
                        }
                        else{
                            this.classList.add("safe");
                            score++;
                            if(score==(n*n-16)){
                                result.classList.remove("hide");
                                result.innerHTML=`Hai vinto!`
                                for(let k=0; k<n*n; k++){
                                    table[k].classList.add("selected")
                                }
                            }
                        }
                    }
                }
            );
            container.appendChild(newElement);
        }
    }
);

function createBox(row, index){
    const element=document.createElement("div");
    element.classList="box";
    element.style.width = 100/row + "%";
    element.style.height = 100/row + "%";
    element.innerHTML=index;
    return element;
}

function RandIntGen(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

function ArrRandNumGen(nElements, min, max){
    const arr = [];
    while(arr.length<nElements){
        const n=RandIntGen(min, max);
        if(!arr.includes(n)){
            arr.push(n);
        }
    }
    return arr;
}