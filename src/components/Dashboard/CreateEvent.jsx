import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker, LoadingButton, LocalizationProvider } from "@mui/lab";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  OutlinedInput,
  TextField,
} from "@mui/material";

import SaveIcon from "@mui/icons-material/Save";
import { useFormik } from "formik";
import { createScheduleValidation } from "../../validators/eventScheduleValidation";
import dayjs from "dayjs";
import { useState } from "react";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

const CreateEvent = ({ open, setOpen }) => {
  //   console.log(props);
  const [value, setValue] = useState(dayjs('2014-08-18T21:11:54'))
  /** form submision */
  const {
    handleChange,
    handleBlur,
    values,
    touched,
    errors,
    isSubmitting,
    handleSubmit,
    // setFieldValue,
    resetForm,
  } = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema: createScheduleValidation,
    onSubmit: async (data, action) => {
      try {
        console.log(data);
        setOpen(!open)
        resetForm();
      } catch (error) { }
    },
  });

  return (
    <div>
      {/* <Modal
                open={props.show}
                onClose={props.close()}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal> */}
      {/* use dialog it's have better designm than modal */}
      <Dialog open={open} onClose={() => setOpen(!open)} fullWidth maxWidth="sm">
        <DialogTitle>
          {"Create Event"}
        </DialogTitle>
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
          <DialogContent>
            <TextField
              fullWidth
              required
              placeholder="Zoom Meating"
              size="small"
              label="Event Title"
              name="title"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.title && Boolean(errors.title)}
              helperText={touched.title && errors.title}
            />

            <TextField
              sx={{ margin: '5px 0' }}
              fullWidth
              name="decription"
              label="Description"
              multiline
              rows={3}
              required
              placeholder="Description"
              variant="outlined"
            />

            <input style={{ width: '100%', border: '1px solid gray' }} type="datetime-local" id="meeting-time"
              name="meeting-time" />

          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(!open)}>Disagree</Button>
            {/* <Button onClick={props.close()}>Save</Button> */}
            <LoadingButton
              // fullWidth
              variant="outlined"
              type="submit"
              loading={isSubmitting}
              loadingPosition="start"
              startIcon={<SaveIcon />}
            >
              Save
            </LoadingButton>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default CreateEvent;
