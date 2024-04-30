const diversity = (myInfos) => {
    let numbo = 0
    const foundNames = []
    myInfos.forEach((dif) => {
        if (!foundNames.includes(dif.Nome)) {
            foundNames.push(dif.Nome)
            numbo++
        }
    })
    return numbo
}

const runningOutItens = (myInfos) => {
    let numbo = 0
    myInfos.forEach((item) => {
        if(item.Quantidade <= 10 ){
            numbo++
        }
    })
    return numbo
}

const isRecent = (itemDate) => {
    const currentDate = new Date()
    const itemDateObj = new Date(itemDate)
    const differenceInMs = currentDate - itemDateObj
    const differenceInDays = differenceInMs / (1000 * 60 * 60 * 24)
    return differenceInDays <= 30
}

export {diversity, runningOutItens, isRecent}