import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { Container, FileContainer, InputContainer, Image } from './styles';
import file from '../../../../assets/file.svg';

function TaskAssets({ id }) {

  const apii = axios.create({
    baseURL: 'http://192.168.0.99:3000'
  })

  let baseURL = "http://192.168.0.99:3000/imagens/";

  const [images, setImages] = useState([]);
  const history = useHistory();

  const loadImage = async () => {
    const response = await apii.get(`/getImages/${id}`);
    setImages(response.data)
    console.log(response.data)
  }

  function handleOpen(url) {
    window.open(url, "_blank")
  }
  
  // eslint-disable-next-line
  async function sendFile(event){
    //http://192.168.10.43:3000/post
    event.preventDefault();
    console.log(event)
    console.log(file)
  }

  function isLogged() {
		const teste = localStorage.getItem('Authorization');
		if (teste == null) {
			history.push('/');
		}
  }
  
  useEffect(() => { 
    isLogged();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    loadImage();
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <FileContainer>

        {images.map(image => (
          <React.Fragment key={image.id}>
            {image.type === "application/pdf" ?
              <div style={{ maxWidth: "20%", maxHeight: '400px', margin: '3%', cursor: 'pointer', display: 'flex', flexWrap: 'wrap' }} onClick={() => handleOpen(image.image_url)}>
                <img src={file} alt="" />
                <h3>{image.name}</h3>
              </div>
              :
              <Image
                onClick={() => handleOpen(image.image_url)}
                src={baseURL + image.name}
                alt="anexo da tarefa"
              />
            }
          </React.Fragment>
        ))}
      </FileContainer>
      <InputContainer>
        {/* <form onSubmit={e => sendFile(e)} encType="multipart/form-data">
          <input type="file" name= "image" onChange ={e => setFile(e.target.value)}/>
          <button type="submit" name="upload">Enviar</button>
        </form> */}
      </InputContainer>

    </Container>
  );
}

export default TaskAssets;