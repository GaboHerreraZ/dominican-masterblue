import { Contact } from "./contact";

export interface Email {
  from: string;
  to: string[];
  subject: string;
  html: string;
}

export const createContactEmail = (contact: Contact) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contacto</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f4f4;
            text-align: center;
            padding: 20px;
        }

        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h2 {
            color: #333;
        }

        p {
            color: #666;
        }

        .contact-info {
            text-align: left;
            margin-top: 20px;
        }

        .contact-info div {
            margin-bottom: 10px;
        }

        .message {
            margin-top: 30px;
            text-align: left;
        }

        .message p {
            line-height: 1.6;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>¡Hola!</h2>
        <p>Hemos recibido un nuevo mensaje de contacto. Aquí están los detalles:</p>

        <div class="contact-info">
            <div><strong>Nombre:</strong> ${contact.name}</div>
            <div><strong>Email:</strong> ${contact.email}</div>
            <div><strong>Teléfono:</strong> ${contact.phone}</div>
            <div><strong>Servicio:</strong> ${
              contact.service ? contact.service : "----"
            }</div>
        </div>

        <div class="message">
            <h3>Mensaje:</h3>
            <p>${contact.message}</p>
        </div>

        <p>¡Gracias por ponerte en contacto!</p>
    </div>
</body>
</html>
`;
