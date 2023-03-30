import React from "react";

export default function (){
    /*source from where to fetch data */
    const dataSource="http://localhost:3000/userlist"


    /*-------------useState uses DUMMY DATA unless a valid fetch request has been made ---------------*/
    const [userList, setUserList] = React.useState ([
        {
            img: "https://i.discogs.com/OQ_2SCwN6TZt0Z4pbX5gHFjY6c8wLRmAPIldwQvjX5A/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyNjkx/NjU2LTE1NDAxMzg1/NDEtNDkyOS5qcGVn.jpeg",
            firstName:"daniel",
            lastName:"dummy",
            email:"daniel.dummy@email.de"
        },
        {
            img: "https://i.discogs.com/pjCg49BN03QAiv4qWnCKHvtl0rcS7E0lI1LuH0Ml6do/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyNTEy/NTgyLTE1MzY3NDE3/MDEtODc0MC5qcGVn.jpeg",
            firstName:"donald",
            lastName:"dummy",
            email:"donald.dummy@email.de"
        },
        {
            img: "https://i.discogs.com/ssiLiSAL6Ttbpf1UIjUOxzA7475OeXvgt11wK77z9p0/rs:fit/g:sm/q:90/h:592/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0MDc5/OTYxLTE1Njc4Njcx/MTUtNTMxNy5qcGVn.jpeg",
            firstName:"derrick",
            lastName:"dummy",
            email:"derrock.dummy@email.de"
        }
    ]);
    const [sortOrder, setSortOrder] = React.useState(true)

    
    /*----------function to fetch data and respective call---------------- */
    async function getUserList(){
        try{
            var response = await fetch()
            const data = await response.json();
            setUserList(data)
            }
        catch(error){
            console.error(`the fetch request has no input right now. this is a placeholder function. a proper input would be:
              ${dataSource}`)
            }
        }
    getUserList()
    /* sort function. setSortOrder is a workaround. changing the order of the userlist directly doesn't trigger a re-render  */
    function sortList(){
        setUserList(userList.sort((a,b)=>{
            if (sortOrder===true){
                return a.firstName < b.firstName? -1:0
            }
            else{
                return a.firstName > b.firstName? -1:0
            }
            
        }))
        setSortOrder(!sortOrder)
    }
    
    
    /*mapping the userlist to html-elements */
    let mappedUserList = userList.map(obj=>
        <div className="ListItem" key={obj.firstName}>
            <div className="ListItemImage"><img src={obj.img} alt="user image" /></div>
            <div className="ListItemInfo">
                <div className="ListItemName">{obj.firstName + " "+ obj.lastName}</div>
                <div className="ListItemEmail">{obj.email}</div>
            </div>
        </div> )

    return(
        <div>
            <div className="UserListButton">
            <button onClick={sortList}>{sortOrder? "Sort: A-Z":"Sort: Z-A"}</button>    
            </div>
            <div className="UserList">
                {mappedUserList}
            </div>
        </div>
    )
}