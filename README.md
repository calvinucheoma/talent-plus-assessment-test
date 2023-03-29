# TalentPlus Assessment Task

<a name="readme-top"></a>

---

## 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
- [💻 Getting Started With Docker](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
  - [Build the docker image](#build-docker-image)
  - [Run the docker container](#run-docker-container)
  - [Stop the docker container](#stop-docker-container)
- [👥 Author](#author)

## <!-- PROJECT DESCRIPTION -->

### 📖 [TechTime] <a name="about-project"></a>

> This is a project assessment task for TalentPlus. It contains codes written for a template educational website where registered users can be able to enroll in courses of their choice and access them through the website and also have access to other features of the website.

#### 🛠 Built With <a name="built-with"></a>

##### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Technologies Used</summary>
  <ul>
    <li><a href="https://reactjs.org/">React.js</a></li>
    <li><a href="https://reactjs.org/">vite</a></li>
    <li><a href="https://reactjs.org/">SCSS</a></li>
    <li><a href="https://reactjs.org/">MaterialUI</a></li>
    <li><a href="https://reactjs.org/">Docker</a></li>
  </ul>
</details>

---

<!-- GETTING STARTED -->

### 💻 Getting Started <a name="getting-started"></a>

#### Prerequisites

In order to run this project you need:

- Docker installed on your desktop device.

#### Setup

Clone this repository to your desired folder:

```sh
  cd my-folder
  git clone https://github.com/calvinucheoma/talent-plus-assessment-test.git
```

#### Build the docker image

To build the Docker image, run the following command in the root folder of the application:

```sh
  docker build -t my-react-app .
```

#### Run the docker container

To run the Docker container, run the following command in the root folder of the application:

```sh
  docker run -p 3000:3000 my-react-app
```

This will start the container and expose the application on port 3000.

#### Stop the docker container

To stop the Docker container, use the `docker stop` command followed by the container ID or name.

```sh
    docker stop <container_id_or_name>
```

The container id or name can be gotten from your docker desktop application and is normally a string of alphanumeric characters which you can find below your docker image name. You copy it and then paste it where you have '<container_id_or_name>' (remove the angle <> brackets while doing so).

---

> That's it! You can now view the react application on http://localhost:3000/

---

### 👤 Author <a name="author"></a>

- GitHub: [@calvinucheoma](https://github.com/calvinucheoma)
- Portfolio: [Chukwuma](https://chukwuma-ucheoma-portfolio.netlify.app)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/chukwumaucheoma)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
