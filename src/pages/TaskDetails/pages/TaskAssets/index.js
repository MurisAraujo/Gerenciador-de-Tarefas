import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Container, FileContainer, InputContainer, Image } from './styles';
import file from '../../../../assets/file.svg';

function TaskAssets({ id }) {

  const apii = axios.create({
    baseURL: 'http://192.168.10.43:3000'
  })

  const [file, setFile] = useState();

  let baseURL = "http://192.168.10.43:3000/imagens/";

  const [images, setImages] = useState([]);

  const loadImage = async () => {
    const response = await apii.get(`/getImages/${id}`);
    setImages(response.data)
    console.log(response.data)
  }

  function handleOpen(url) {
    window.open(url, "_blank")
  }

  // const sendImage = async () => {
	// 	setOpen(false)
	// 	setDisabled(true)
		
	// 	const imagesData = new FormData();
		
	// 	imagesData.append('image', {
	// 		uri: result.uri,
	// 		type: 'image/jpeg',
	// 		name: `${task_id}.jpeg`
	// 	});

	// 	try {
	// 		const response = await apii.post(`/post`, imagesData, { params: { task_id } });
	// 		if (response.status != 200) {
	// 			alert('Verifique sua internet e tente novamente')
	// 		}
	// 		alert('Foto', 'Imagem enviada com sucesso!!');
	// 		navigation.navigate('TaskActions')
	// 	} catch (error) {
	// 		alert(erro)
	// 	}
  // }
  
  async function sendFile(event){
    //http://192.168.10.43:3000/post
    event.preventDefault();
    console.log(event)
    console.log(file)
  }

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
                <h3>{}{image.name}</h3>
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
        <form onSubmit={e => sendFile(e)} encType="multipart/form-data">
          <input type="file" name= "image" onChange ={e => setFile(e.target.value)}/>
          <button type="submit" name="upload">Enviar</button>
        </form>
      </InputContainer>

    </Container>
  );
}

export default TaskAssets;