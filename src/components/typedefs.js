/**
 * @typedef {{id: number, name: string, value: number, unit: ('un'|'kg'), quantity: number}} ShopItem
 */

/**
 * @callback FormSetterCallback
 * @param {ShopItem} prevForm previous value of form
 */

/**
 * @callback FormSetter
 * @param {ShopItem|FormSetterCallback} form new object to save on form
 */

/**@typedef {('error'|'warning'|'info'|'success')} SnackbarSeverities */

/**@typedef {{show: boolean, message: string, severity: SnackbarSeverities}} SnackBar */

/**
 * @callback SnackBarSetter
 * @param {Partial<SnackBar>} snack
 * @returns {void}
 */
