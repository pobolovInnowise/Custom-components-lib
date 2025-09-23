import './App.css';
import * as React from "react";
import {Select, TextField} from "@mui/material";
import TTextField from "./Components/TTextField/TTextField";
import SSelect from "./Components/SSelect/SSelect";

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
                </div>


            </>
        </div>
    );
}

export default App;
