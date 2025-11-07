
export function handleErrorResponse(error) {
    let errorMessages = null;
    if (error.name === 'ValidationError') {
        errorMessages= error?.errors?.name?.properties?.message;
    } else {
        errorMessages= error.message;
    }
  return {
    success: false,
    errortype: error.name || 'ServerError',
    message: errorMessages,
  };
}
