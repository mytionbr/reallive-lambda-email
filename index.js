'use strict';

module.exports.handler = async (event, context, callback) => {
  const userId = event.userName;
  const code = event.request.codeParameter
  const link = `http://localhost:4200/verifyEmail/?userId=${userId}&code=${code}`;
  const template = (link, code) => `
 <html>
  <body>
    <h1>Seja bem vindo ao reallive</h1>
    </br>

    <div>
      <h3>O seu código de confirmação é ${code}</h3>
    </div>

    <a href=${link}>Click aqui para validar o seu email</a>
  </body>
 </html>
 `

  if (event.triggerSource === "CustomMessage_SignUp") {
    event.response = {
      emailSubject: "Reallive | confirmação de email",
      emailMessage: template(link, code)
    }
  }

  console.log(event.response);

  callback(null, event);
};
