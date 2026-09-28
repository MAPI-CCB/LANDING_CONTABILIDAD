import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// Endpoint para el formulario de contacto y solicitud de demostración
app.post('/api/contact', async (req, res) => {
  try {
    const {
      fullName,
      role,
      entityType,
      entityName,
      province,
      email,
      phone,
      modulesOfInterest,
      comments,
      source = 'Formulario Web'
    } = req.body;

    if (!fullName || !email || !phone || !entityName) {
      return res.status(400).json({
        success: false,
        error: 'Faltan campos obligatorios (nombre, entidad, email o teléfono).'
      });
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 465;
    const smtpSecure = process.env.SMTP_SECURE === 'true' || smtpPort === 465;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const recipientEmail = process.env.CONTACT_EMAIL_TO || 'info@ccbosco.com';

    // Si aún no se han configurado los datos SMTP en las variables de entorno
    if (!smtpHost || !smtpUser || !smtpPass) {
      console.log('--- [SOLICITUD RECIBIDA (MODO PREPARACIÓN / SIMULACIÓN)] ---');
      console.log(`Origen: ${source}`);
      console.log(`Solicitante: ${fullName} (${role || 'No especificado'})`);
      console.log(`Entidad: ${entityType || 'Entidad Local'} - ${entityName} (${province || 'N/A'})`);
      console.log(`Contacto: ${email} | Tel: ${phone}`);
      console.log(`Módulos de interés:`, modulesOfInterest);
      console.log(`Comentarios: ${comments || 'Sin comentarios adicionales'}`);
      console.log('NOTA: Configure SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER y SMTP_PASS para el envío directo a bandeja de entrada.');
      console.log('------------------------------------------------------------');

      return res.status(200).json({
        success: true,
        simulated: true,
        message: 'Solicitud procesada correctamente (simulación activa a la espera de credenciales SMTP).'
      });
    }

    // Configuración del transporte Nodemailer con SSL/TLS
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      tls: {
        // Permite compatibilidad con certificados de servidores locales o corporativos si aplica
        rejectUnauthorized: process.env.SMTP_REJECT_UNAUTHORIZED !== 'false'
      }
    });

    const modulesListHtml = Array.isArray(modulesOfInterest) && modulesOfInterest.length > 0
      ? `<ul>${modulesOfInterest.map((m: string) => `<li style="margin-bottom: 4px;"><strong>${m}</strong></li>`).join('')}</ul>`
      : '<p style="color: #64748b; font-style: italic;">No especificado o consulta general</p>';

    const mailOptions = {
      from: `"GMI Contabilidad Web - Web" <${smtpUser}>`,
      replyTo: email,
      to: recipientEmail,
      subject: `Nueva Solicitud / Demostración: ${entityName} (${fullName})`,
      text: `Nueva Solicitud recibida desde la web de GMI Contabilidad:
- Nombre: ${fullName}
- Cargo: ${role || 'No especificado'}
- Entidad: ${entityType || 'Entidad Local'} ${entityName}
- Provincia: ${province || 'No especificada'}
- Teléfono: ${phone}
- Email: ${email}
- Módulos de interés: ${Array.isArray(modulesOfInterest) ? modulesOfInterest.join(', ') : 'N/A'}
- Comentarios: ${comments || 'Ninguno'}
- Origen: ${source}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; background: #ffffff;">
          <div style="background: #025B80; color: #ffffff; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 20px; font-weight: bold;">Centro Cálculo Bosco - GMI Contabilidad</h1>
            <p style="margin: 6px 0 0 0; font-size: 13px; opacity: 0.9;">Nueva Solicitud de Información / Demostración Web</p>
          </div>
          
          <div style="padding: 24px; color: #1e293b; font-size: 14px; line-height: 1.6;">
            <div style="background: #f8fafc; border-left: 4px solid #025B80; padding: 12px 16px; margin-bottom: 20px; border-radius: 0 4px 4px 0;">
              <strong style="color: #0f172a; font-size: 15px;">${entityType || 'Entidad'}: ${entityName}</strong>
              <div style="color: #64748b; font-size: 12px; margin-top: 2px;">Provincia: ${province || 'No especificada'} · Origen: ${source}</div>
            </div>

            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; width: 38%;"><strong>Contacto:</strong></td>
                <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: bold;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; color: #64748b;"><strong>Cargo / Función:</strong></td>
                <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;">${role || 'No especificado'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; color: #64748b;"><strong>Teléfono directo:</strong></td>
                <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; color: #025B80; font-weight: bold;"><a href="tel:${phone}" style="color: #025B80; text-decoration: none;">${phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; color: #64748b;"><strong>Correo electrónico:</strong></td>
                <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; color: #025B80;"><a href="mailto:${email}" style="color: #025B80;">${email}</a></td>
              </tr>
            </table>

            <div style="margin-bottom: 20px;">
              <strong style="display: block; color: #0f172a; margin-bottom: 6px;">Módulos o áreas de interés:</strong>
              ${modulesListHtml}
            </div>

            ${comments ? `
            <div style="margin-bottom: 20px; background: #fffbeb; border: 1px solid #fef3c7; border-radius: 6px; padding: 12px;">
              <strong style="display: block; color: #92400e; margin-bottom: 4px;">Comentarios del usuario:</strong>
              <p style="margin: 0; color: #78350f; white-space: pre-wrap;">${comments}</p>
            </div>
            ` : ''}

            <p style="font-size: 11px; color: #94a3b8; margin-top: 24px; border-top: 1px solid #e2e8f0; padding-top: 12px; text-align: center;">
              Mensaje generado automáticamente desde el formulario web de Centro Cálculo Bosco. El usuario aceptó la política de protección de datos.
            </p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: 'Solicitud enviada correctamente a Centro Cálculo Bosco.'
    });
  } catch (error: any) {
    console.error('Error al procesar o enviar el correo:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Error interno al enviar la solicitud.'
    });
  }
});

// Configuración de archivos estáticos y Vite
app.use(express.static(path.resolve(__dirname, 'public')));

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor iniciado en http://0.0.0.0:${PORT}`);
  });
}

startServer();
