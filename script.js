const linkedList = () => {
    let head = null
    let size = 0

    const prepend = (value) =>{
        head = node(value, head)
        size ++
    }

    const append = (value) =>{
        if(head === null){
            head = node(value)
            size++
        } else {
            let pointer = head
            while(pointer.nextNode !== null){
                pointer = pointer.nextNode
            }
            pointer.nextNode = node(value)
            size++
        }
    }

    return{prepend, append, get head(){return head}, get size(){return size}}
}

const node = (value = null, nextNode = null) => {
    return{value, nextNode}
}

let list = linkedList()
list.prepend(2)
list.prepend(4)
list.append(6)
console.log(list.size)