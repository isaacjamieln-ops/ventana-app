const express = require("express");
const multer = require("multer");
const cors = require("cors");

const {
  S3Client,
  PutObjectCommand
} = require("@aws-sdk/client-s3");

const app = express();
app.use(cors());

const upload = multer({ storage: multer.memoryStorage() });

const s3 = new S3Client({
  region: "auto",
  endpoint: "https://TU_ACCOUNT_ID.r2.cloudflarestorage.com",
  credentials: {
    accessKeyId: "TU_ACCESS_KEY",
    secretAccessKey: "TU_SECRET_KEY",
  },
});

const BUCKET = "imagenes";

app.post("/upload/:gameId", upload.single("file"), async (req, res) => {

  const gameId = req.params.gameId;
  const file = req.file;

  const key = `imagenes/${gameId}/${Date.now()}_${file.originalname}`;

  try {

    await s3.send(
      new PutObjectCommand({
        Bucket: BUCKET,
        Key: key,
        Body: file.buffer,
        ContentType: file.mimetype,
      })
    );

    res.json({
      message: "Imagen subida",
      key: key
    });

  } catch (error) {

    console.error(error);
    res.status(500).json({ error: "Error al subir imagen" });

  }
});

app.listen(3001, () => {
  console.log("Servidor corriendo en puerto 3001");
});