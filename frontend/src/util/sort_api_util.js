
//sort by date 
export const sortByDate = (date1, date2) => {
    let d1 = new Date(date1.dateOfSurgery)
    let d2 = new Date(date2.dateOfSurgery)

    if (d1 < d2) return 1;
    if (d2 < d1) return -1;
    return 0;
}

export const sortByAge= (age1, age2) => {
    let a1 = age1.demographics.age
    let a2 = age2.demographics.age
    if (a1 < a2) return 1;
    if (a2 < a1) return -1;
    return 0;
}

export const sortByResearchID = (id1, id2) => {
    let r1 = id1.researchId.slice(2)
    let r2 = id2.researchId.slice(2)
    r1 = parseInt(r1)
    r2 = parseInt(r2)

    if (r1 < r2) return 1;
    if (r2 < r1) return -1;
    return 0;
}