import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";

const DeleteMenuItem = (props) => {
  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <DialogContent>
        Are you sure you want to delete {props.menuItem.title}?
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose}>No</Button>
        <Button
          onClick={() => {
            props.onDelete();
            props.onClose();
          }}
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteMenuItem;
