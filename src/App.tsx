import React, { useState } from 'react';
import Button from './Components/Button/Button';
import Checkbox from './Components/Checkbox/Checkbox';
import Select from './Components/Select/Select';
import TextField from './Components/TextField/TextField';
import Switch from './Components/Switch/Switch';
import Modal from "./Components/Modal/Modal";

const App: React.FC = () => {

    const [open, setOpen] = useState(false);


    return (
        <div>
            <Button disabled={false} variant='text' size='small'>
                small
            </Button>

            <Checkbox disabled={false} name='checkbox1' value='value1' id='cb1' />

            <Select options={['summer', 'autumn', 'winter', 'spring']} />

            <Switch disabled={false} name='switch1' value='switchValue' id='sw1' />

            <TextField
                label='qwerty'
                variant='outlined'
                size='normal'
                margin='none'
                disabled={false}
                name='textfield1'
                required={false}
                autoFocus={false}
            />
            <div>
                <Button
                    variant="text"
                    size="small"
                    onClick={() => setOpen(true)}
                >
                     Open modal
                </Button>

                <Modal open={open} handleClose={() => setOpen(false)}>
                    <h2>hey!</h2>
                    <p>this id modal</p>
                </Modal>
            </div>
        </div>
    );
};

export default App;
