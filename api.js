function fetchTasks(){
    return new Promise((resolve) => {
        const rawTasks = [
            {id: 1, title: "Complate Web Lab Assignment", completed: false},
            {id: 2, title: "Review Data Structures Notes", completed: true},
            {id: 3, title: "Prepare Computer Architecture Presentation", completed: false}  
        ];
        setTimeout(() => {
            resolve(rawTasks);
        }, 1500);
    })
}
export { fetchTasks };