const linkedList = () => {
    let head = null

    const prepend = (value) =>{
        head = node(value, head)
        console.log(head)
    }

    const append = (value) =>{
        if(head === null){
            head = node(value)
        }
        let pointer = head
        while(pointer.nextNode !== null){
            pointer = pointer.nextNode
        }
        pointer.nextNode = node(value)
    }

    return{prepend, append, get head(){return head}}
}

const node = (value = null, nextNode = null) => {
    return{value, nextNode}
}

let list = linkedList()
list.prepend(2)
list.prepend(4)
list.append(6)