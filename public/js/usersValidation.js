const expressions = {
  user: /^[a-zA-Z0-9\_\-]{4,20}$/, // Letras, numeros, guion y guion_bajo
  name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  password: /^.{8,50}$/, // 8 a 50 digitos.
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  phone: /^\d{7,14}$/, // 7 a 14 numeros.
  document: /^\d{7,18}$/, // 7 a 20 numeros.
  number: /^[0-9]+$/,
  date: /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/,
};

const fields = {
  nameNewUser: false,
  lastNameNewUser: false,
  identificationNewUser: false,
  phoneNewUser: false,
  emailNewUser: false,
  passwordNewUser: false,
  passwordConfirmNewUser: false,
  epsNewCostumer: false,
  addressNewCostumer: false,
  birthDateNewcostumer: false,
};

const inputs = document.querySelectorAll("#form input");

const validateForm = (e) => {
  switch (e.target.id) {
    case "nameNewUser":
      validateField(expressions.name, e.target, "nameNewUser");
      break;
    case "lastNameNewUser":
      validateField(expressions.name, e.target, "lastNameNewUser");
      break;
    case "identificationNewUser":
      validateField(expressions.document, e.target, "identificationNewUser");
      break;
    case "phoneNewUser":
      validateField(expressions.number, e.target, "phoneNewUser");
      break;
    case "epsNewCostumer":
      validateField(expressions.name, e.target, "epsNewCostumer");
      break;
    case "addressNewCostumer":
      validateField(expressions.user, e.target, "addressNewCostumer");
      break;
    case "birthDateNewcostumer":
      validateField(expressions.date, e.target, "birthDateNewcostumer");
      break;
    case "emailNewUser":
      validateField(expressions.email, e.target, "emailNewUser");
      break;
    case "passwordNewUser":
      validateField(expressions.password, e.target, "passwordNewUser");
      validatePasswordNewUser();
      break;
    case "passwordConfirmNewUser":
      validatePasswordNewUser();
      break;
    default:
      break;
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validateForm);
  input.addEventListener("blur", validateForm);
});

const validateField = (expression, input, field) => {
  if (expression.test(input.value)) {
    document.getElementById(`${field}`).classList.remove(`is-invalid`);
    document.getElementById(`${field}`).classList.add(`is-valid`);
    fields[field] = true;
  }
  if (!expression.test(input.value)) {
    document.getElementById(`${field}`).classList.add(`is-invalid`);
    fields[field] = false;
  }
};

const validatePasswordNewUser = () => {
  const password = document.getElementById("passwordNewUser");
  const passwordConfirm = document.getElementById("passwordConfirmNewUser");

  if (password.value !== passwordConfirm.value) {
    document
      .getElementById(`passwordConfirmNewUser`)
      .classList.remove("is-valid");
    document
      .getElementById(`passwordConfirmNewUser`)
      .classList.add("is-invalid");
    fields["passwordConfirmNewUser"] = false;
  } else {
    document
      .getElementById(`passwordConfirmNewUser`)
      .classList.remove("is-invalid");
    document.getElementById(`passwordConfirmNewUser`).classList.add("is-valid");
    fields["passwordConfirmNewUser"] = true;
  }
};



$("#saveButton").click(async () => {
  if (
    fields.nameNewUser &&
    fields.lastNameNewUser &&
    fields.identificationNewUser &&
    fields.phoneNewUser &&
    fields.emailNewUser &&
    fields.passwordNewUser &&
    fields.passwordConfirmNewUser
  ) {
    await Swal.fire(
      {
        icon: "success",
        title: "Guardado correctamente",
        showConfirmButton: false,
        timer: 5000,
      },

      (window.location = "/users")
    );
  } else if (
    fields.nameNewUser &&
    fields.lastNameNewUser &&
    fields.identificationNewUser &&
    fields.phoneNewUser &&
    fields.epsNewCostumer &&
    fields.addressNewCostumer &&
    fields.birthDateNewcostumer &&
    fields.emailNewUser &&
    fields.passwordNewUser &&
    fields.passwordConfirmNewUser
  ) {
    await Swal.fire(
      {
        icon: "success",
        title: "Guardado correctamente",
        showConfirmButton: false,
        timer: 5000,
      },

      (window.location = "/users")
    );
  } else {
    event.preventDefault();
    Swal.fire({
      title: "Error!",
      text: "Todos los campos son obligatorios.",
      icon: "error",
      showConfirmButton: false,
      timerProgressBar: true,
      timer: 1500,
    });
    console.log(fields);
  }
});

$("#cancelButton").click(() => {
  Swal.fire({
    title: "Cancelado!",
    text: "Has cancelado el proceso.",
    icon: "error",
    showConfirmButton: false,
    timerProgressBar: true,
    timer: 1500,
  }).then(() => {
    window.location = "/costumers";
  });
});

function mostrarPassword() {
  var cambio = document.getElementById("passwordNewUser");
  if (cambio.type == "password") {
    cambio.type = "text";
    $(".icon").removeClass("fa fa-eye-slash").addClass("fa fa-eye");
  } else {
    cambio.type = "password";
    $(".icon").removeClass("fa fa-eye").addClass("fa fa-eye-slash");
  }
}

$(document).ready(function () {
  //CheckBox mostrar contraseña
  $("#ShowPassword").click(function () {
    $("#passwordNewUser").attr(
      "type",
      $(this).is(":checked") ? "text" : "password"
    );
  });
});

function mostrarPasswordConfirm() {
  var cambio = document.getElementById("passwordConfirmNewUser");
  if (cambio.type == "password") {
    cambio.type = "text";
    $(".icon2").removeClass("fa fa-eye-slash").addClass("fa fa-eye");
  } else {
    cambio.type = "password";
    $(".icon2").removeClass("fa fa-eye").addClass("fa fa-eye-slash");
  }
}

$(document).ready(function () {
  //CheckBox mostrar contraseña
  $("#ShowPasswordConfirm").click(function () {
    $("#passwordConfirmNewUser").attr(
      "type",
      $(this).is(":checked") ? "text" : "password"
    );
  });
});
