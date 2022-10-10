import { LoadingButton } from "@mui/lab";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

import SaveIcon from "@mui/icons-material/Save";
import { useFormik } from "formik";
import { createScheduleValidation } from "../../validators/eventScheduleValidation";

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

const CreateEvent = (props) => {
  //   console.log(props);

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
        resetForm();
      } catch (error) {}
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
      <Dialog open={props.show} onClose={props.close()} fullWidth maxWidth="sm">
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
          <DialogContent>
            <TextField
              fullWidth
              required
              placeholder="Zoom Meating"
              size="small"
              label="Product Title"
              name="title"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.title && Boolean(errors.title)}
              helperText={touched.title && errors.title}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={props.close()}>Disagree</Button>
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
