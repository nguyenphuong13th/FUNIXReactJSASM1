const StaffList = (props) =>{
    const Liststaff = props.staffs.map((staffs)=>{
        console.log(staffs);
        return(
            <div key={staffs.id} className='col-12 col-md-5 m-1'>
                <ul>
                    <li className='list-unstyled'>{staffs.name}</li>
                </ul>
            </div>
        )
    })
    return (
        <div className='container'>
            <div className='row'>
                {Liststaff}
            </div>
        </div>
    )
}

export default StaffList