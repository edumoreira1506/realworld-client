import Swal from 'sweetalert2';

export const error = errorMessage => Swal.fire({
  title: 'Error!',
  text: errorMessage,
  icon: 'error',
});

export const confirm = (confirmMessage, callback) => Swal.fire({
  title: 'Are you sure?',
  text: confirmMessage,
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
}).then(result => {
  if (result.value) {
    return callback.onConfirmed();
  };
});

export const success = successMessage => Swal.fire({
  title: 'Nice!',
  text: successMessage,
  icon: 'success'
});
