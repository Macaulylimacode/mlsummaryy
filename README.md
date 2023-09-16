# mlsummaryy

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/Macaulylimacode/mlsummaryy/blob/main/LICENSE) 

# Click para ver na web:
### Click to see on the web:
[![NPM](https://img.shields.io/badge/mlsummaryy-000000?style=for-the-badge&logo=About.me&logoColor=white)](https://grand-kitsune-a7cb3a.netlify.app/)

# Informações do Projeto:
### Project Information:

Projeto com IA para fazer Downloads de Shorts em até 60 segundos, além de baixar, converter em MP4 
print o que foi falado no vídeo.


AI-powered project to download Shorts in up to 60 seconds, in addition to downloading and converting to MP4
print what was said in the video.


https://github.com/Macaulylimacode/mlsummary/assets/139823222/729d33a5-4b18-4b1c-a9e9-48a73156dd99


# Preview do projeto:
### Project preview:

![Captura de tela 2023-09-13 224049](https://github.com/Macaulylimacode/mlsummary/assets/139823222/09d6b7c6-4a49-490e-8e91-3560c4017df2)

![Captura de tela 2023-09-13 224106](https://github.com/Macaulylimacode/mlsummary/assets/139823222/cfdc8993-4a24-4317-b401-747d21332341)




# Tecnologias utilizadas:
### Technologies used:

![java](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

![HTML](https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white)

![CSS](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)

## Trechos do Código:
### code snippets:

```bash
import ytdl from "ytdl-core"
import fs from "fs"

export const download = (videoId) =>
  new Promise((resolve, reject) => {
    const videoURL = "https://www.youtube.com/shorts/" + videoId
    console.log("Realizando o download do vídeo:", videoId)

    ytdl(videoURL, { quality: "lowestaudio", filter: "audioonly" })
      .on("info", (info) => {
        const seconds = info.formats[0].approxDurationMs / 1000

        if (seconds > 60) {
          throw new Error("A duração desse vídeo é maior do que 60 segundos.")
        }
      })
      .on("end", () => {
        console.log("Download do vídeo finalizado.")
```

```bash
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

    <link rel="icon" type="image/svg+xml" href="/mllogo.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
      rel="stylesheet"
    />

    <title>ML Summary</title>
  </head>
  <body>
    <div id="app">
      <img src="/public/mllogo.svg" alt="Logo" />
      <h1>ML Summary</h1>
```

## IDE

![pycharm](https://img.shields.io/badge/PyCharm-000000.svg?&style=for-the-badge&logo=PyCharm&logoColor=white)
![visual](https://img.shields.io/badge/Visual_Studio-5C2D91?style=for-the-badge&logo=visual%20studio&logoColor=white)

# Como executar o projeto

```bash
# clonar repositório
git clone https://github.com/Macaulylimacode/mlsummary

# entrar na pasta do projeto
cd mlsummary

# executar o projeto
./mvnw spring-boot:run
```

# Autor

Macauly lima

[![linkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/macauly-lima-75984a269)
