import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import React from 'react';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const CreateEvent = (props) => {
    console.log(props)
    return (
        <div>

            <Modal
                open={props.show}
                onClose={props.close()}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Create Event
                    </Typography>
                    <TextField style={{ margin: '10px' }} fullWidth id="filled-basic" label="Event Title" variant="filled" />
                    <TextField fullWidth id="filled-basic" label="Description" variant="filled" className='' />

                    <Button className='' sx={{ mx: "auto" }} variant="contained">Submit</Button>

                </Box>
            </Modal>

        </div>
    );
};

export default CreateEvent;