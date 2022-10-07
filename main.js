const createWoodBlock = () => {
    // Return an object with 4 properties.
    const woodBlock = {
        type: "wood block",
        length: 10,
        material: "pine",
        purpose: "flute"
    }

    return woodBlock;
}

const createBeautifulCarving = (woodObject) => {
    // Return a string representation of the object
    return `The ${woodObject.length}-inch, ${woodObject.material} ${woodObject.type} was carved into a wooden ${woodObject.purpose}.`
}

// The function returns a value, so that value is stored in a variable
const woodBlock = createWoodBlock()

// The function returns a value, so that value is stored in a variable
const carvingString = createBeautifulCarving(woodBlock)  // <-- Missing an argument. Fix it.

console.log(carvingString)