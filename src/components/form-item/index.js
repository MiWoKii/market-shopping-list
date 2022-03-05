import {
  Alert,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Slide,
  Snackbar,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { db } from "../../database/db";

/**@type {ShopItem} */
const formInitialState = {
  name: "",
  value: 0,
  unit: "un",
  quantity: 0,
};

export default function FormItem() {
  /**@type {[ShopItem, FormSetter]} */
  const [form, setForm] = useState(formInitialState);

  /**@type {[SnackBar, SnackBarSetter]} */
  const [snackbar, setSnackbar] = useState({
    show: false,
    message: "",
    severity: "info",
  });

  /**
   * @function updateForm - updates the form state
   * @param {{target:{id:string, value:string}}} event
   */
  const updateForm = ({ target: { id, value } }) => {
    setForm((prevForm) => ({ ...prevForm, [id]: value }));
  };

  /**
   * @function updateUnit - updates unit from the form state
   * @param {{target:{value:string}}} event
   */
  const updateUnit = ({ target: { value } }) => {
    setForm((prevForm) => ({ ...prevForm, unit: value }));
  };

  /**
   * @function clearForm - resets form to unitial state
   */
  const clearForm = () => setForm(formInitialState);

  /**
   * @function handleCloseSnackbar - set `snackbar.show` to `false` closing the snackbar
   */
  const handleCloseSnackbar = () => {
    setSnackbar((prevSnackbar) => ({ ...prevSnackbar, show: false }));
  };

  /**
   * @function updateSnackbar - updates snackbar state
   * - it will allways set `show` as `true`
   * - it will allways try to close snackbar right before update its state
   * @param {string} message message for snackbar
   * @param {SnackbarSeverities} severity severity of snackbar, can only be one of: `success` `info` `warning` `error`
   */
  const updateSnackbar = (message, severity) => {
    handleCloseSnackbar();

    setSnackbar({ show: true, message, severity });
  };

  /**
   * @function dataSender - send data to database
   * @description
   * - it prevents the default behavior of a form submit to prevent page reload
   * - it will try to send data to database
   * - when successful, it clear the form
   */
  const dataSender = async (event) => {
    event.preventDefault();

    try {
      await db.shopItems.add({ ...form, created_at: new Date().toUTCString() });

      updateSnackbar(`Item "${form.name}" adicionado com sucesso!`, "success");

      clearForm();
    } catch (error) {
      updateSnackbar("Não foi possível adicionar o item", "error");
    }
  };

  return (
    <>
      <Snackbar
        open={snackbar.show}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
        sx={{ marginTop: 3 }}
        TransitionComponent={Slide}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          variant="standard"
          sx={{
            width: "100%",
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
      <form onSubmit={dataSender}>
        <Stack gap={3}>
          <FormControl>
            <TextField
              id={"name"}
              variant={"standard"}
              label={"Nome"}
              value={form.name}
              onChange={updateForm}
              autoComplete={"off"}
              required
            />
          </FormControl>
          <FormControl>
            <TextField
              id={"value"}
              variant={"standard"}
              label={"Valor"}
              value={form.value}
              onChange={updateForm}
              type={"number"}
              inputProps={{ step: 0.01 }}
              autoComplete={"off"}
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel>Unidade de medida</FormLabel>
            <RadioGroup id="unity" row onChange={updateUnit} value={form.unit}>
              <FormControlLabel value="kg" control={<Radio />} label="kg" />
              <FormControlLabel value="un" control={<Radio />} label="un" />
            </RadioGroup>
          </FormControl>
          <FormControl>
            <TextField
              id={"quantity"}
              variant={"standard"}
              label={"Quantidade"}
              value={form.quantity}
              onChange={updateForm}
              type={"number"}
              inputProps={{ step: 1 }}
              autoComplete={"off"}
              required
            />
          </FormControl>
          <Button type="submit" variant={"outlined"}>
            Criar item
          </Button>
        </Stack>
      </form>
    </>
  );
}
