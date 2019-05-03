const initState = {
    projects : [
        {id : 1 , title : 'Title-1',content : 'This is some content'},
        {id : 2 , title : 'Title-2',content : 'This is some content'},
        {id : 3 , title : 'Title-3',content : 'This is some content'},
        {id : 4 , title : 'Title-4',content : 'This is some content'},
        {id : 5 , title : 'Title-1',content : 'This is some content'},
        {id : 6 , title : 'Title-2',content : 'This is some content'},
        {id : 7 , title : 'Title-3',content : 'This is some content'},
        {id : 8 , title : 'Title-4',content : 'This is some content'}           
    ]
}

const projectReducer = (state = initState,action) => {
    switch(action.type){
        case 'CREATE_PROJECT' : 
            console.log("project created",action.project)
            return state
        case 'CREATE_PROJECT_ERR' :
            console.log("Create projec error ", action.err)
            return state
        default:
            return state
    }
   
}

export default  projectReducer