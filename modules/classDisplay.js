class DisplayLi {
    constructor(target, content) {
        this._target = target;
        this._content = content;
    }
   
    
    displayList() {
        console.log(this._target);
        console.log(this._content);
        const nodeEl = this._target;
        this._content.forEach(outPutToList);
        function outPutToList(item){
            const listItem = document.createElement("li");
            listItem.innerHTML = item;
            document.getElementById(nodeEl).appendChild(listItem);
        } 
    }

}

class DisplayParaList{
    constructor(target, content){
        this._target = target;
        this._content = content;
    }

    displayList(){
        console.log(this._target);
        console.log(this._content);
        const nodeEl = this._target;
        this._content.forEach(outPutToList);
        function outPutToList(item){
            console.log(nodeEl);
            const listItem = document.createElement("p");
            listItem.innerHTML = item;
            document.getElementById(nodeEl).appendChild(listItem);
        } 

    }



}

class DisplayStr {
    constructor(target, content){
        this._target = target;
        this._content = content;
    }

    displayString() {
        console.log(this._content);
        const nodeEl = this._target;
        console.log(nodeEl);
        document.getElementById(nodeEl).innerText = this._content;
    }
}


export {DisplayLi, DisplayParaList, DisplayStr};