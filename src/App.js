import './App.css';
import * as React from "react";
import {Button, Checkbox, Select, Switch, TextField} from "@mui/material";
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
                    <TTextField id="one" label='qwerty' variant='outlined' size="normal" margin='none'
                                disabled={false} name='textfield1' required={false} autoFocus={false}/>
                </div>
                <div>
                    <div>
                        <Button type='button' disabled={false} variant="text" autoFocus={true} size='small'>small</Button>
                        <Button type='button' disabled={false} variant="text" autoFocus={false} size='medium'>medium</Button>
                        <Button type='button' disabled={false} variant="text" autoFocus={false} size='large'>large</Button>
                    </div>
                    <div>
                        <Button type='button' disabled={false} variant="outlined" autoFocus={false} size='small'>small</Button>
                        <Button type='button' disabled={false} variant="outlined" autoFocus={false} size='medium'>medium</Button>
                        <Button type='button' disabled={false} variant="outlined" autoFocus={false} size='large'>large</Button>
                    </div>
                    <div>
                        <Button type='button' disabled={false} variant="contained" autoFocus={false} size='small'>small</Button>
                        <Button type='button' disabled={false} variant="contained" autoFocus={false} size='medium'>medium</Button>
                        <Button type='button' disabled={false} variant="contained" autoFocus={false} size='large'>large</Button>
                    </div>


                    <div>
                        <BButton type='button' disabled={false} variant="text" autoFocus={false} size='small'>small</BButton>
                        <BButton type='button' disabled={false} variant="text" autoFocus={false} size='medium'>MEDIUM</BButton>
                        <BButton type='button' disabled={false} variant="text" autoFocus={false} size='large'>LARGE</BButton>
                    </div>
                    <div>
                        <BButton type='button' disabled={false} variant="outlined" autoFocus={false} size='small'>SMALL</BButton>
                        <BButton type='button' disabled={false} variant="outlined" autoFocus={false} size='medium'>MEDIUM</BButton>
                        <BButton type='button' disabled={false} variant="outlined" autoFocus={false} size='large'>LARGE</BButton>
                    </div>
                    <div>
                        <BButton type='button' disabled={false} variant="contained" autoFocus={false} size='small'>SMALL</BButton>
                        <BButton type='button' disabled={false} variant="contained" autoFocus={false} size='medium'>MEDIUM</BButton>
                        <BButton type='button' disabled={false} variant="contained" autoFocus={false} size='large'>LARGE</BButton>
                    </div>

                </div>
                <div>
                    <Checkbox/>
                    <CCheckbox checked={false} disabled={false} name='' required={false} value='' id=''/>
                </div>
                <div>
                    <SSwitch checked={false} disabled={false} name='' required={false} value='' id=''/>
                    <Switch/>
                </div>
                <div>
                    <Select/>
                    <SSelect/>
                </div>



</>
</div>
)
    ;
}

export default App;
