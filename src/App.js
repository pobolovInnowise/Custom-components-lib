import './App.css';
import * as React from "react";
import {Checkbox, Select, Switch, TextField} from "@mui/material";
import TTextField from "./Components/TTextField/TTextField";
import SSelect from "./Components/SSelect/SSelect";
import SSwitch from "./Components/Switch/SSwitch";
import CCheckbox from "./Components/Checkbox/CCheckbox";
import BButton from "./Components/Button/BButton";

function App() {
    return (
        <div className="App">
            <>
                <div>
                    <TextField id="one" label='qwerty' variant='outlined' size="normal" margin='none'
                               disabled={false} name='textfield1' required={false} autoFocus={false}/>
                    <TextField id="one" label='qwerty' variant='filled' size="normal" margin='none'
                               disabled={false} name='textfield1' required={false} autoFocus={false}/>
                    <TextField id="one" label='qwerty' variant='standard' size="normal" margin='none'
                               disabled={false} name='textfield1' required={false} autoFocus={false}/>

                    <div>
                        <TTextField id="one" label='qwerty' variant='outlined' size="normal" margin='none'
                                    disabled={false} name='textfield1' required={false} autoFocus={false}/>
                        <TTextField id="one" label='qwerty' variant='filled' size="normal" margin='none'
                                    disabled={false} name='textfield1' required={false} autoFocus={false}/>
                        <TTextField id="one" label='qwerty' variant='standard' size="normal" margin='none'
                                    disabled={false} name='textfield1' required={false} autoFocus={false}/>
                    </div>
                    <BButton variant="text">knopka</BButton>
                    <BButton variant="outlined">knopka</BButton>
                    <BButton variant="contained">knopka</BButton>
                    <div>
                        <Checkbox/>
                        <CCheckbox checked={false} disabled={false} name='' required={false} value='' id=''/>
                    </div>
                    <SSwitch checked={false} disabled={false} name='' required={false} value='' id=''/>
                    <Switch/>
                    <Select/>
                    <SSelect/>
                </div>


            </>
        </div>
    );
}

export default App;
