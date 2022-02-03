
function superbowlWin(record) {
    const recordWin = record.find(thisFunction)
    return recordWin ? recordWin.year : undefined 
}

function thisFunction(record) {
    return (record.result === "W")
}



