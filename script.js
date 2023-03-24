const linkedList = () => {
    let head = null
    let size = 0

    const prepend = (value) => {
        head = node(value, head)
        size ++
    }

    const append = (value) => {
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

    const tail = () => {
        let pointer = head
        while(pointer.nextNode !== null){
            pointer = pointer.nextNode
        }
        return pointer
    }

    const at = (index) => {
        let x = 0
        let pointer = head
        while(x < index){
            pointer = pointer.nextNode
            x++
        }
        return pointer
    }

    const pop = () => {
        let pointer = head
        let previousPointer
        while(pointer.nextNode !== null){
            previousPointer = pointer
            pointer = pointer.nextNode
        }
        previousPointer.nextNode = null
    }

    const contains = (value) => {
        for(x = 0; x < size; x++){
            let currentNode = at(x)
            if(currentNode.value === value){
                return true
            }
        }
        return false
    }

    const find = (value) => {
        if(contains(value)){
            for(x = 0; x < size; x++){
                let currentNode = at(x)
                if(currentNode.value === value){
                    return x
                }
            }
        } else {
            return null
        }
    }

    const toString = () => {
        let outputString = ""
        let pointer = head
        while(pointer.nextNode !== null){
            outputString += `(${pointer.value}) -> `
            pointer = pointer.nextNode
        }
        outputString += `(${pointer.value}) -> null`
        return outputString
    }

    const insertAt = (value, index) => {
        let x = 0
        let pointer = head
        let previousPointer
        while(x < index){
            previousPointer = pointer
            pointer = pointer.nextNode
            x++
        }
        let newNode = node(value, pointer)
        previousPointer.nextNode = newNode
    }

    return{prepend, append, get head(){return head}, get size(){return size}, tail, at, pop, contains, find, toString, insertAt}
}

const node = (value = null, nextNode = null) => {
    return{value, nextNode}
}

let list = linkedList()
list.prepend(8)
list.prepend(6)
list.prepend(4)
list.prepend(2)

console.log(list.toString())
list.insertAt(10, 4)
console.log(list.toString())
list.insertAt(12, 2)
console.log(list.toString())