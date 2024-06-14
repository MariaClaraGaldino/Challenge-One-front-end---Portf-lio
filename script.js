const form = document.getElementById('form');
const campos = document.querySelectorAll('.inputs');
const span = document.querySelectorAll('.span');
const checkEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

const nome = document.getElementById("name");
const email = document.getElementById("email");
const celular = document.getElementById("number");
const assunto = document.getElementById("assunto");
const mensagem = document.getElementById("mensagem");


function sendEmail(){
  const bodyMenssage = `Nome: ${nome.value}<br> Email: ${email.value}<br> Telefone : ${celular.value}<br> Mensagem: ${mensagem.value}`;

  Email.send({
    SecureToken : "fdfb7ba1-c6ca-4adf-9edf-2809373c4f84",
    To : 'mariaclaragaldinof@gmail.com',
    From : "mariaclaragaldinof@gmail.com",
    Subject : assunto.value,
    Body : bodyMenssage
}).then(
    mensagem => {
      if(mensagem == "OK") {
        Swal.fire({
          title: "Sucesso!",
          text: "Sua mensagem foi enviada com sucesso!",
          icon: "success"
        });
      }
    }
  );
}


form.addEventListener("submit", (event) => {
    event.preventDefault();
    nameValidate();
    emailValidate();
    telValidate();
    assuntoValidate()
    sendEmail();
  });



function setError(index){
  campos[index].style.border = '1px solid #e63636';
  span[index].style.display = 'block';
};

function removeError(index){
  campos[index].style.border = '';
  span[index].style.display = 'none';
}


function nameValidate(){
    if(campos[0].value.length < 3)
        {
        setError(0);
    }
    else{
        removeError(0);
    }
}

function emailValidate(){
  if(!checkEmail.test(campos[1].value))
  {
    setError(1);
  }
  else
  {
    removeError(1);
  }
}


function telValidate(){
  if(campos[2].value.length < 9){
    setError(2);
  }
  else{
    removeError(2);
  }
}

function assuntoValidate(){
  if(campos[3].value.length < 4)
      {
      setError(3);
  }
  else{
      removeError(3);
  }
}



