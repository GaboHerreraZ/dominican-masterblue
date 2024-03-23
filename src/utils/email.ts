import { Contact } from "@/interfaces/contact";

export const createContactEmail = (contact: Contact) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Contacto Dominican Masterblue</title>
      <style>
          body {
              font-family: 'Arial', sans-serif;
              background-color: #f4f4f4;
              text-align: center;
              padding: 20px;
          }
  
          .container {
              max-width: 800px;
              margin: 0 auto;
              background-color: #fff;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
  
          h2, h3 {
              color: #333;
          }
  
          p {
              color: #666;
          }
  
          .contact-info, .message {
              text-align: left;
              margin-top: 20px;
          }
  
          .contact-info div, .message p {
              margin-bottom: 10px;
              line-height: 1.6;
          }
  
          .logo-img {
              width: 200px;
              margin-bottom: 20px;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <img class="logo-img" src="https://neemxhjfpkzimvlwwlpe.supabase.co/storage/v1/object/public/publicImage/bellarte-icono.png?t=2024-03-13T20%3A05%3A15.227Z" alt="Dominican Masterblue" />
          <h2>¡Hola!</h2>
          <p>Hemos recibido un nuevo mensaje de contacto. Aquí están los detalles:</p>
  
          <div class="contact-info">
              <div><strong>Nombre:</strong> ${contact.name}</div>
              <div><strong>Email:</strong> ${contact.email}</div>
              <div><strong>Teléfono:</strong> ${contact.phone}</div>
              <div><strong>Asunto:</strong> ${contact.subject}</div>
          </div>
  
          <div class="message">
              <h3>Mensaje:</h3>
              <p>${contact.message}</p>
          </div>
  
          <p>¡Gracias por ponerte en contacto con Dominican Masterblue!</p>
      </div>
  </body>
  </html>
    `.trim();
};

