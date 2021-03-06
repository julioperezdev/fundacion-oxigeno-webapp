import React, {useContext, useEffect, useState} from "react"

import EmailListComponent from "../../../components/privates/emailList/EmailListComponent"
import ProfileAdminComponent from "../../../components/privates/profileAdmin/ProfileAdminComponent"
import EventComponent from "../../../components/privates/updateEvent/UpdateEventComponent"
//import UpdateEventComponent from "../../../components/privates/updateSponsor/UpdateSponsorComponent"
//import UpdateSocialMediaComponent from "../../../components/privates/updateSocialMedia/UpdateSocialMediaComponent"


import UserAuthContext from "../../../context/userAuth/UserAuthContext"

import "./AdminPage.css"

const AdminPage = () =>{

    const {isAuthenticated} = useContext(UserAuthContext)
    

    useEffect(() =>{

    }, [isAuthenticated])

    return (
        <div >
            <div className="cuadro0">
                <div className="cuadro1">
                    <EmailListComponent/>
                </div>
                <div className="cuadro2">
                    <ProfileAdminComponent/>
                </div>
            </div>
            <div>
                <div className="cuadro3">
                    <EventComponent/>
                </div>
            </div>
        </div>
    )
}


export default AdminPage;