import { Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle } from 'reactstrap'
import { useState } from "react"
import { Link } from 'react-router-dom';
import logo from '../assets/images/alberto.png'
function RenderSearchEecomponent(props){
    // if(props.EeName!== null && props.EeName == props.staffs.name){
    //     console.log('props.EeName= '+props.EeName)
    //     console.log('props.staffs.name= '+props.staffs.name)
    //     return(
    //         <div key={props.staffs.id} className='col-sm-12 col-md-6 col-lg-3 mt-5'>
    //             <Link className='text-decoration-none text-dark' to={`/${props.staffs.id}`}>
    //                 <Card body className="text-center">
    //                     <CardImg  width='100%' src={logo} alt={props.staffs.name}/>
    //                     <CardTitle >{props.staffs.name}</CardTitle>
    //                 </Card>
    //             </Link>
    //         </div>
    //     )
    // }else{
    //     return(
    //         <div></div>
    //     )
    // }
    if(props.EeName!== null){
        console.log('props.Eepick= '+props.Eepick)
        console.log('props.staffs.name= '+props.staffs.name)
        const RenderSearchItems = props.staff.filter((RenderSearchItems)=>{
        return(
                RenderSearchItems.name === props.Eepick)}).map((RenderSearchItems)=>{
                    return(
                        <div key={RenderSearchItems.id} className='col-sm-12 col-md-6 col-lg-3 mt-5'>
                            <Link className='text-decoration-none text-dark' to={`/${RenderSearchItems. id}`}>
                                <Card body className="text-center">
                                    <CardImg  width='100%' src={logo} alt={RenderSearchItems.name}/>
                                    <CardTitle >{RenderSearchItems.name}</CardTitle>
                                </Card>
                            </Link>
                        </div>
                    )
            })
    }else{
        return(
            <div></div>
        )
    }
    // return(
    //     <div className='container mt-1'>
    //         <div className='row'>
    //             {RenderSearchItems}
    //         </div>
    //     </div>
    //     )
}
export default RenderSearchEecomponent