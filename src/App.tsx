// import React from 'react';
// import Button from "./Components/Button/Button";
// import Checkbox from "./Components/Checkbox/Checkbox";
// import Select from "./Components/Select/Select";
// import TextField from "./Components/TextField/TextField";
// import Switch from "./Components/Switch/Switch";
//
// const App = () => {
//     return (
//         <div>
//             <Button type='button' disabled={false} variant="text" autoFocus={true} size='small'>small</Button>
//             <Checkbox checked={false} disabled={false} name='' required={false} value='' id=''/>
//             <Select options={['summer', 'autumn', 'winter', 'spring']}/>
//             <Switch checked={false} disabled={false} name='' required={false} value='' id=''/>
//             <TextField id="one" label='qwerty' variant='outlined' size="normal" margin='none'
//                        disabled={false} name='textfield1' required={false} autoFocus={false}/>
//         </div>
//     );
// }
// export default App;
//
import React from 'react';
import Button from "./Components/Button/Button";
import Checkbox from "./Components/Checkbox/Checkbox";
import Select from "./Components/Select/Select";
import TextField from "./Components/TextField/TextField";
import Switch from "./Components/Switch/Switch";

const App: React.FC = () => {
    return (
        <div>
            <Button disabled={false} variant="text" size="small">
                small
            </Button>

            <Checkbox disabled={false} name="checkbox1" value="value1" id="cb1" />

            <Select options={['summer', 'autumn', 'winter', 'spring']} />

            <Switch disabled={false} name="switch1" value="switchValue" id="sw1" />

            <TextField
                label="qwerty"
                variant="outlined"
                size="normal"
                margin="none"
                disabled={false}
                name="textfield1"
                required={false}
                autoFocus={false}
            />
        </div>
    );
};

export default App;
