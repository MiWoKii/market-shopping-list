import { DeleteForeverRounded } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { useState } from "react";

export default function DeleteItem({ id, deleteItem }) {
  const [dialog, setDialog] = useState(false);

  const openDialog = () => {
    setDialog(true);
  };

  const closeDialog = () => {
    setDialog(false);
  };

  return (
    <>
      <IconButton onClick={openDialog} color="error">
        <DeleteForeverRounded />
      </IconButton>
      <Dialog
        open={dialog}
        onClose={closeDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Você tem certeza que deseja deletar este item?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Você não poderá mais recuperar o item com id {id}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={closeDialog}
            variant="outlined"
            color="info"
            autoFocus
          >
            Cancelar
          </Button>
          <Button
            onClick={async () => {
              await deleteItem(id);
              closeDialog();
            }}
            variant="contained"
            color="error"
          >
            Deletar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
