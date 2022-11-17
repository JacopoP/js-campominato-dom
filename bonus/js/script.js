const container=document.getElementById("container");
const result=document.querySelector("h2");

document.getElementById("generate").addEventListener("click",
    function(){
        result.classList.add("hide")
        container.classList.remove("hide");
        container.innerHTML="";
        console.clear();
        const x=parseInt(document.getElementById("col").value);
        const y=parseInt(document.getElementById("row").value);
        container.style.aspectRatio=x/y;
        const mines=parseInt(document.getElementById("mines").value);

        for(let i=0; i<x*y; i++){
            const fakeElement = createBox(x, y);
            fakeElement.addEventListener("dblclick",
                function(){
                    const safe=i+1;
                    const safeZone=[];
                    safeZone.push(safe);
                    safeZone.push(safe - 1);
                    safeZone.push(safe + 1);
                    safeZone.push(safe + x - 1);
                    safeZone.push(safe + x + 1);
                    safeZone.push(safe + x);
                    safeZone.push(safe - x + 1);
                    safeZone.push(safe - x - 1);
                    safeZone.push(safe - x);
                    container.innerHTML="";
                    const bombArr=ArrRandNumGen(mines, 1, x*y, safeZone);
                    let score=0;
                    for(let i=0; i<x*y; i++){
                        const newElement = createBox(x, y);
                        if(i==safe-1){
                            newElement.classList.add("selected")
                            newElement.classList.add("empty")
                            score++;
                        }            
                        if(bombArr.includes(i+1)){
                            newElement.classList.add("bomb");
                        }
                        newElement.addEventListener("dblclick",
                            function(){
                                const table=document.getElementsByClassName("box");
                                this.classList.remove("flag");
                                if(!this.classList.contains("selected")){
                                    this.classList.add("selected");
                                    if(this.classList.contains("bomb")){                            
                                        for(let k=0; k<x*y; k++){
                                            table[k].classList.add("selected")
                                        }
                                        result.classList.remove("hide");
                                        result.innerHTML=`Hai perso! Hai fatto ${score} punti`
                                    }
            
                                    else{
                                        this.classList.add("safe");
                                        score++;
                                        let m=0
            
                                        if(((i+1)<=x && i!=0 && i!=(x-1))){
                                            if(table[i-1].classList.contains("bomb")){
                                                m++;
                                            }
                                            if(table[i+1].classList.contains("bomb")){
                                                m++;
                                            }
                                            if(table[i+x-1].classList.contains("bomb")){
                                                m++;
                                            }
                                            if(table[i+x].classList.contains("bomb")){
                                                m++;
                                            }
                                            if(table[i+x+1].classList.contains("bomb")){
                                                m++;
                                            }
                                        }
                        
                                        else if((i+1)>(x*(y-1)) && i%x!=0 && (i+1)!=(x*y)){
                                            if(table[i-x-1].classList.contains("bomb")){
                                                m++;
                                            }
                                            if(table[i-x].classList.contains("bomb")){
                                                m++;
                                            }
                                            if(table[i-x+1].classList.contains("bomb")){
                                                m++;
                                            }
                                            if(table[i-1].classList.contains("bomb")){
                                                m++;
                                            }
                                            if(table[i+1].classList.contains("bomb")){
                                                m++;
                                            }
                                        }
                        
                                        else if(i==0){
                                            if(table[i+1].classList.contains("bomb")){
                                                m++;
                                            }
                                            if(table[i+x].classList.contains("bomb")){
                                                m++;
                                            }
                                            if(table[i+x+1].classList.contains("bomb")){
                                                m++;
                                            }
                                        }
                        
                                        else if((i+1)==x){
                                            if(table[i-1].classList.contains("bomb")){
                                                m++;
                                            }
                                            if(table[i+x-1].classList.contains("bomb")){
                                                m++;
                                            }
                                            if(table[i+x].classList.contains("bomb")){
                                                m++;
                                            }
                                        }
                        
                                        else if((i)==(x*(y-1))){
                                            if(table[i-x].classList.contains("bomb")){
                                                m++;
                                            }
                                            if(table[i-x+1].classList.contains("bomb")){
                                                m++;
                                            }
                                            if(table[i+1].classList.contains("bomb")){
                                                m++;
                                            }
                                        }
                        
                                        else if((i+1)==(x*y)){
                                            if(table[i-x-1].classList.contains("bomb")){
                                                m++;
                                            }
                                            if(table[i-x].classList.contains("bomb")){
                                                m++;
                                            }
                                            if(table[i-1].classList.contains("bomb")){
                                                m++;
                                            }
                                        }
                        
                                        else if(i%x==0){
                                            if(table[i-x].classList.contains("bomb")){
                                                m++;
                                            }
                                            if(table[i-x+1].classList.contains("bomb")){
                                                m++;
                                            }
                                            if(table[i+1].classList.contains("bomb")){
                                                m++;
                                            }
                                            if(table[i+x].classList.contains("bomb")){
                                                m++;
                                            }
                                            if(table[i+x+1].classList.contains("bomb")){
                                                m++;
                                            }
                                        }
                        
                                        else if((i+1)%x==0){
                                            if(table[i-x-1].classList.contains("bomb")){
                                                m++;
                                            }
                                            if(table[i-x].classList.contains("bomb")){
                                                m++;
                                            }
                                            if(table[i-1].classList.contains("bomb")){
                                                m++;
                                            }
                                            if(table[i+x-1].classList.contains("bomb")){
                                                m++;
                                            }
                                            if(table[i+x].classList.contains("bomb")){
                                                m++;
                                            }
                                        }
                        
                                        else{
                                            if(table[i-x-1].classList.contains("bomb")){
                                                m++;
                                            }
                                            if(table[i-x].classList.contains("bomb")){
                                                m++;
                                            }
                                            if(table[i-x+1].classList.contains("bomb")){
                                                m++;
                                            }
                                            if(table[i-1].classList.contains("bomb")){
                                                m++;
                                            }
                                            if(table[i+1].classList.contains("bomb")){
                                                m++;
                                            }
                                            if(table[i+x-1].classList.contains("bomb")){
                                                m++;
                                            }
                                            if(table[i+x].classList.contains("bomb")){
                                                m++;
                                            }
                                            if(table[i+x+1].classList.contains("bomb")){
                                                m++;
                                            }
                                        }
            
                                        if(m===0){
                                            this.classList.add("empty")
                                        }
                                        else{
                                            this.innerHTML=m;
                                        }
            
                                        if(score==(x*y-mines)){
                                            result.classList.remove("hide");
                                            result.innerHTML=`Hai vinto!`
                                            for(let k=0; k<x*y; k++){
                                                table[k].classList.add("selected")
                                            }
                                        }
                                    }
                                }
                            }
                        );
            
                        newElement.addEventListener("click",
                            function(){
                                if(!this.classList.contains("selected")){
                                    this.classList.toggle("flag");
                                }
                            }
                        );
            
                        container.appendChild(newElement);
                    }
                }
            );
            container.appendChild(fakeElement);
        }
    }
);

function createBox(row, col){
    const element=document.createElement("div");
    element.classList="box";
    element.style.width = 100/row + "%";
    element.style.height = 100/col + "%";
    return element;
}

function RandIntGen(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

function ArrRandNumGen(nElements, min, max, noArr){
    const arr = [];
    console.log(noArr);
    while(arr.length<nElements){
        const n=RandIntGen(min, max);
        if(!arr.includes(n) && !noArr.includes(n)){
            arr.push(n);
        }
    }
    return arr;
}