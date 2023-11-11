export const shuffled=(nameList:string[])=>{
    const solList=nameList.map(value=>({value:value,sort:(Math.random()*nameList.length)})).sort((a,b)=>(a.sort-b.sort)).map((value)=>value.value)
                         
    
    return solList
}
