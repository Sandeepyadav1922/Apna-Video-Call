import RestoreIcon from '@mui/icons-material/Restore';
import { Button, IconButton, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { AuthContext } from "../contexts/authContext";
import withAuth from '../utils/withAuth';

function HomeComponent() {
    let navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");
    const {addToUserHistory} = useContext(AuthContext);
    let handleJoinVideoCall = async () => {
        await addToUserHistory(meetingCode)
        navigate(`/${meetingCode}`);
    }



    return (
        <>
        
        <div className="navBar">

            <div style={{display: "flex", alignItems: "center"}}>

                <h2>Apna Video Call</h2>

            </div>

            <div style={{display: "flex", alignItems: "center",}}>
                <IconButton onClick={
                    () => {
                        navigate("/history");
                    }
                }>
                    <RestoreIcon/>
                </IconButton>
                <p>History</p>

                <Button style={{marginLeft: "20px"}}  onClick={() => {
                    const token = localStorage.getItem("token");
                    localStorage.removeItem("token")
                    navigate("/auth");
                    if(!token) {
                        return <navigate to="/auth"/>
                    }
                }}>
                    LogOut
                </Button>
            </div>

        </div>

        <div className="meetContainer">
            <div className="leftPanel">
                <div>
                    <h2 style={{marginBottom: "10px"}}>Providing Quality Video Call Just Like Quality Education</h2>

                    <div style={{display: "flex", gap: "20px"}}>
                        <TextField onChange={e => setMeetingCode(e.target.value)} id="outlined-basic" label="Meeting Code" variant="outlined" required></TextField>
                        <Button onClick={handleJoinVideoCall} variant="contained">Join</Button>

                    </div>
                </div>
            </div>
            <div className="rightPanel">
                <img srcSet="/logo3.png" alt=""/>
            </div>

        </div>
        </>
    )

}

// export default HomeComponent;
export default withAuth(HomeComponent);