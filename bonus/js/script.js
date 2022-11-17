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
        for(let i=0; i<n*n; i++){
            const newElement = createBox(n);            
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
                            for(let k=0; k<n*n; k++){
                                table[k].classList.add("selected")
                            }
                            result.classList.remove("hide");
                            result.innerHTML=`Hai perso! Hai fatto ${score} punti`
                        }

                        else{
                            this.classList.add("safe");
                            score++;
                            let m=0

                            if(((i+1)<=n && i!=0 && i!=(n-1))){
                                if(table[i-1].classList.contains("bomb")){
                                    m++;
                                }
                                if(table[i+1].classList.contains("bomb")){
                                    m++;
                                }
                                if(table[i+n-1].classList.contains("bomb")){
                                    m++;
                                }
                                if(table[i+n].classList.contains("bomb")){
                                    m++;
                                }
                                if(table[i+n+1].classList.contains("bomb")){
                                    m++;
                                }
                            }
            
                            else if((i+1)>(n*(n-1)) && i%n!=0 && (i+1)!=(n*n)){
                                if(table[i-n-1].classList.contains("bomb")){
                                    m++;
                                }
                                if(table[i-n].classList.contains("bomb")){
                                    m++;
                                }
                                if(table[i-n+1].classList.contains("bomb")){
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
                                if(table[i+n].classList.contains("bomb")){
                                    m++;
                                }
                                if(table[i+n+1].classList.contains("bomb")){
                                    m++;
                                }
                            }
            
                            else if((i+1)==n){
                                if(table[i-1].classList.contains("bomb")){
                                    m++;
                                }
                                if(table[i+n-1].classList.contains("bomb")){
                                    m++;
                                }
                                if(table[i+n].classList.contains("bomb")){
                                    m++;
                                }
                            }
            
                            else if((i+1)==(n*(n-1)+1)){
                                if(table[i-n].classList.contains("bomb")){
                                    m++;
                                }
                                if(table[i-n+1].classList.contains("bomb")){
                                    m++;
                                }
                                if(table[i+1].classList.contains("bomb")){
                                    m++;
                                }
                            }
            
                            else if((i+1)==(n*n)){
                                if(table[i-n-1].classList.contains("bomb")){
                                    m++;
                                }
                                if(table[i-n].classList.contains("bomb")){
                                    m++;
                                }
                                if(table[i-1].classList.contains("bomb")){
                                    m++;
                                }
                            }
            
                            else if(i%n==0){
                                if(table[i-n].classList.contains("bomb")){
                                    m++;
                                }
                                if(table[i-n+1].classList.contains("bomb")){
                                    m++;
                                }
                                if(table[i+1].classList.contains("bomb")){
                                    m++;
                                }
                                if(table[i+n].classList.contains("bomb")){
                                    m++;
                                }
                                if(table[i+n+1].classList.contains("bomb")){
                                    m++;
                                }
                            }
            
                            else if((i+1)%n==0){
                                if(table[i-n-1].classList.contains("bomb")){
                                    m++;
                                }
                                if(table[i-n].classList.contains("bomb")){
                                    m++;
                                }
                                if(table[i-1].classList.contains("bomb")){
                                    m++;
                                }
                                if(table[i+n-1].classList.contains("bomb")){
                                    m++;
                                }
                                if(table[i+n].classList.contains("bomb")){
                                    m++;
                                }
                            }
            
                            else{
                                if(table[i-n-1].classList.contains("bomb")){
                                    m++;
                                }
                                if(table[i-n].classList.contains("bomb")){
                                    m++;
                                }
                                if(table[i-n+1].classList.contains("bomb")){
                                    m++;
                                }
                                if(table[i-1].classList.contains("bomb")){
                                    m++;
                                }
                                if(table[i+1].classList.contains("bomb")){
                                    m++;
                                }
                                if(table[i+n-1].classList.contains("bomb")){
                                    m++;
                                }
                                if(table[i+n].classList.contains("bomb")){
                                    m++;
                                }
                                if(table[i+n+1].classList.contains("bomb")){
                                    m++;
                                }
                            }

                            if(m===0){
                                this.classList.add("empty")
                            }
                            else{
                                this.innerHTML=m;
                            }

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

function createBox(row){
    const element=document.createElement("div");
    element.classList="box";
    element.style.width = 100/row + "%";
    element.style.height = 100/row + "%";
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