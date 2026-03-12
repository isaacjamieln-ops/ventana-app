// src/components/Photos.jsx

import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

import { database, auth } from "../firebase";
import { ref, push } from "firebase/database";

function Photos() {

  const { id } = useParams();

  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleUpload = async () => {

    if (!file) return;

    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", "nysl_photos");

    try {

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dyzasize6/image/upload",
        {
          method: "POST",
          body: formData
        }
      );

      const data = await res.json();

      const imageUrl = data.secure_url;

      setImageUrl(imageUrl);

      setMessage("✅ Foto subida correctamente. Ve al chat para verla.");

      // enviar imagen al chat del partido

      const messagesRef = ref(database, `games/${id}/messages`);

      await push(messagesRef, {
        text: imageUrl,
        user: auth.currentUser?.displayName || auth.currentUser?.email || "Usuario",
        userId: auth.currentUser?.uid || "foto",
        timestamp: Date.now()
      });

    } catch (error) {

      console.error("Error al subir foto:", error);
      setMessage("❌ Error al subir la imagen.");

    }

  };

  return (

    <Container className="mt-4">

      <h2>📷 Subir Foto del Partido {id}</h2>

      <input
        type="file"
        className="form-control mb-3"
        onChange={(e)=>setFile(e.target.files[0])}
      />

      <Button
        onClick={handleUpload}
        disabled={!file}
      >
        Subir Foto
      </Button>

      {message && (
        <p className="text-success mt-3">{message}</p>
      )}

      {imageUrl && (

        <div className="mt-3">

          <p>Imagen subida:</p>

          <img
            src={imageUrl}
            width="300"
            alt="foto subida"
          />

          <p className="text-muted">{imageUrl}</p>

        </div>

      )}

    </Container>

  );
}

export default Photos;