import React, { useState, useEffect } from "react";
import { ref, onValue, push } from "firebase/database";
import { database } from "../firebase";
import { useUserState } from "../firebase";

function PhotosGallery() {

  const [photos, setPhotos] = useState([]);
  const [file, setFile] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const { user } = useUserState();

  // cargar fotos guardadas en Firebase
  useEffect(() => {

  const messagesRef = ref(database, "games/gallery/messages");

  onValue(messagesRef, (snapshot) => {

    const data = snapshot.val();

    if (!data) {
      setPhotos([]);
      return;
    }

    const loadedPhotos = Object.values(data).map((msg) => ({
      url: msg.text,
      user: msg.user,
      timestamp: msg.timestamp
    }));

    setPhotos(loadedPhotos);

  });

}, []);


  // subir foto
  const uploadPhoto = async () => {

    if (!file) {
      alert("Selecciona una imagen");
      return;
    }

    try {

      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "nysl_photos");

      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dyzasize6/image/upload",
        {
          method: "POST",
          body: formData
        }
      );

      const data = await response.json();

      const imageUrl = data.secure_url;

      const photoObject = {
        text: imageUrl,
        user: user?.displayName || user?.email || "Usuario",
        timestamp: Date.now()
      };

      // guardar en Firebase
      const messagesRef = ref(database, "games/gallery/messages");

      await push(messagesRef, photoObject);

      // mostrar inmediatamente en pantalla
      setPhotos((prev) => [
        ...prev,
        {
          url: photoObject.text,
          user: photoObject.user,
          timestamp: photoObject.timestamp
        }
      ]);

      alert("Foto subida correctamente");

      setFile(null);

    } catch (error) {

      console.error(error);
      alert("Error subiendo foto");

    }

  };

  return (

    <div className="container mt-4">

      <h2 className="mb-4">📷 Galería de Fotos</h2>

      {/* subir imagen */}

      <div className="row mb-4">

        <div className="col-md-6">

          <input
            type="file"
            className="form-control"
            onChange={(e)=>setFile(e.target.files[0])}
          />

        </div>

        <div className="col-md-3">

          <button
            className="btn btn-primary"
            onClick={uploadPhoto}
          >
            Subir Foto
          </button>

        </div>

      </div>

      {/* galería */}

      <div className="row">

        {photos.map((photo,index)=>(

          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>

            <div className="card shadow-sm">

              <img
                src={photo.url}
                alt="foto"
                className="card-img-top img-fluid"
                onClick={()=>setSelectedPhoto(photo.url)}
                style={{
                  cursor:"pointer",
                  objectFit:"cover",
                  height:"220px"
                }}
              />

              <div className="card-body p-2">

                <p className="mb-1" style={{fontSize:"14px"}}>
                  📸 <strong>{photo.user}</strong>
                </p>

                <p className="text-muted mb-0" style={{fontSize:"12px"}}>
                  {photo.timestamp
                    ? new Date(photo.timestamp).toLocaleString()
                    : "Fecha desconocida"}
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* ampliar imagen */}

      {selectedPhoto && (

        <div
          onClick={()=>setSelectedPhoto(null)}
          style={{
            position:"fixed",
            top:0,
            left:0,
            width:"100%",
            height:"100%",
            background:"rgba(0,0,0,0.8)",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            zIndex:9999
          }}
        >

          <img
            src={selectedPhoto}
            alt="foto grande"
            style={{
              maxWidth:"90%",
              maxHeight:"90%",
              borderRadius:"10px"
            }}
          />

        </div>

      )}

    </div>

  );

}

export default PhotosGallery;