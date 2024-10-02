<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zedrick Salupito Portfolio</title>
    <link rel="stylesheet" href="styles.css">
    <script defer src="script.js"></script>
<style>
    /* Basic Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: indianred
}
/* Header and Logo */
#logo {
    height: 120px;
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
}

#zedrick {
    font-size: 2rem;
    animation: colorChange 2s infinite;
}

#salupito {
    font-size: 2rem;
    animation: rotateColors 3s infinite linear;
}

/* Keyframes for animations */
@keyframes colorChange {
    0% { color: red; }
    33% { color: green; }
    66% { color: yellow; }
    100% { color: red; }
}

@keyframes rotateColors {
    0% { transform: rotate(0); color: #ca1; }
    33% { transform: rotate(120deg); color: #1cd; }
    66% { transform: rotate(240deg); color: maroon; }
    100% { transform: rotate(360deg); color: blue; }
}

/* Navigation Bar */
nav ul {
    background-color: navajowhite;
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style: none;
}

nav ul li {
    display: flex;
    flex-direction: column;
    margin: 0 15px;
}

nav ul li a {
    text-decoration: none;
    color: black;
    font-size: 1.2rem;
}
a {
    text-decoration: none;
}
/* About Section */
#about {
    padding: 50px;
    text-align: center;
}

#about img {
    height: 150px;
    width: 150px;
    margin-bottom: 20px;
}

#about p {
    font-size: 1rem;
    margin: 10px 0;
}

/* Services Section */
#services {
    background-color: #f4f4f4;
    padding: 50px;
    text-align: center;
}

#services .service {
    margin-bottom: 30px;
}

#services h3 {
    margin-bottom: 10px;
}

#services ul {
    list-style: none;
}

/* Skills Section */
#skills {
    padding: 50px;
    text-align: center;
}

.skill-category {
    margin-bottom: 30px;
}

.skill-category ul {
    list-style: none;
}

/* Projects Section */
#projects {
    background-color: #f4f4f4;
    padding: 0;
    margin: 0;
    text-align: center;
}

.project {
    margin-bottom: 30px;
}
/* Sky Background */
.sky {
    height: 200px;
    background: linear-gradient(to top, #87CEEB, #fff);
    overflow: hidden;
    position: relative;
}

/* Dove Structure */
.dove {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 50%;
    left: -50px;
    transform: translateY(-50%);
    animation: fly 10s linear infinite;
}

.body {
    width: 20px;
    height: 40px;
    background: white;
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.wing {
    width: 30px;
    height: 40px;
    background: white;
    position: absolute;
    top: 50%;
    transform-origin: top center;
    animation: flap 0.5s ease-in-out infinite alternate;
}

.left-wing {
    border-radius: 30% 70% 50% 50%;
    left: -15px;
}

.right-wing {
    border-radius: 70% 30% 50% 50%;
    right: -15px;
}

.beak {
    width: 10px;
    height: 10px;
    background: orange;
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    clip-path: polygon(0% 50%, 100% 50%, 50% 0%);
}

.eye {
    width: 5px;
    height: 5px;
    background: black;
    border-radius: 50%;
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    margin-left: -8px;
}

.tail {
    width: 30px;
    height: 10px;
    background: white;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) rotate(15deg);
    clip-path: polygon(0 100%, 50% 0%, 100% 100%);
}
/* Sky2 Background */
.sky2 {
    width: 100vw;
    height: 300px;
    background: linear-gradient(to top, #001f3f, #000000);
    position: relative;
    overflow: hidden;
}

/* Lightning Effect */
.lightning {
    position: absolute;
    top: -150px;
    left: 50%;
    width: 2px;
    height: 500px;
    background: white;
    transform: translateX(-50%);
    animation: lightningStrike 3s infinite;
    opacity: 0;
}

/* Lightning Animation */
@keyframes lightningStrike {
    0%, 90% {
        opacity: 0;
    }
    92%, 94% {
        opacity: 1;
        height: 500px;
        background: white;
        box-shadow: 0 0 20px white;
    }
    95% {
        opacity: 1;
        height: 700px;
        background: yellow;
        box-shadow: 0 0 40px yellow;
    }
    96%, 100% {
        opacity: 0;
    }
}

/* Optional: Ground Effect */
.ground {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
    background: #333;
    box-shadow: 0 0 10px 5px #000;
}

/* Container */
.container {
    width: 100vw;
    height: 230px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
    overflow: hidden;
    position: relative;
}

/* Ball Styling */
.ball {
    width: 50px;
    height: 50px;
    background-color: #ff5722;
    border-radius: 50%;
    position: absolute;
    bottom: 0;
    animation: bounce 2s infinite ease-in-out;
}

/* Bouncing Animation */
@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-150px);
    }
    60% {
        transform: translateY(-75px);
    }
}

/* Keyframe Animations */
@keyframes flap {
    0% { transform: rotate(0); }
    100% { transform: rotate(20deg); }
}

@keyframes fly {
    0% { left: -50px; top: 50%; }
    25% { top: 30%; }
    50% { top: 50%; }
    75% { top: 70%; }
    100% { left: 100vw; top: 50%; }
}


/* Contact Section */
#contact {
    padding: 50px;
    text-align: center;
}

.contact-info {
    margin-bottom: 20px;
}

.contact-info p {
    margin-bottom: 10px;
}

form input, form textarea {
    display: block;
    width: 100%;
    margin: 10px 0;
    padding: 10px;
}
form textarea {
    height: 200px;
}
form button {
    padding: 10px 20px;
    background-color: #333;
    color: white;
    border: none;
    cursor: pointer;
}

/* Footer Section */
footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 20px;
}
footer h1 {
    color: #aa1;
    margin: 10px;
    font-weight: 2000;
}
.socials a {
    margin: 0 10px;
    color: white;
    text-decoration: none;
}

.socials a:hover {
    color: #1cd;
}
</style>
</head>
<body>
    <!-- Logo Animation -->
    <header>
        <div id="logo">
            <span id="zedrick">Zedrick</span>
            <span id="salupito">Salupito</span>
        </div>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <!-- Home Section -->
    <section id="home">
        <h1>Welcome to Zedrick Salupito's Portfolio</h1>
    </section>

    <!-- About Section -->
    <section id="about">
        <h2>About Me</h2>
        <img src="https://i.postimg.cc/g0jF67cw/AICE-essentials.png" alt="Zedrick Salupito">
        <p>
            I am a certified web developer by FreeCodeCamp, where I honed my skills in HTML, CSS, JavaScript, and responsive web design. Through rigorous practice and hands-on projects, I've developed a solid foundation in building dynamic and user-friendly websites that cater to modern web standards. You can view my FreeCodeCamp certification <a href="https://www.freecodecamp.org/certification/fcc45d782c9-89e9-4ee2-8c70-f47ef523d7e9/responsive-web-design">here</a>. </p>
        <p>
            Additionally, I am an AI Career Essentials graduate, having completed the program in April 2024 through ALX Academy. This intensive program equipped me with a deep understanding of machine learning, data analysis, and AI-driven solutions. My training included working with advanced algorithms, data visualization techniques, and real-world AI applications, which have prepared me to tackle complex challenges in the AI domain. You can view my ALX-Academy certification <a href="https://intranet.alxswe.com/certificates/h96rCXnBT3">here</a>.</p>
    </section>

    <!-- Services Section -->
    <section id="services">
        <h2>Services Offered</h2>
        <div class="service">
            <h3>Web Development</h3>
            <ul>
                <li>Responsive Website Design</li>
                <li>Frontend Development</li>
                <li>Backend Development</li>
            </ul>
        </div>
        <div class="service">
            <h3>AI Engineering</h3>
            <ul>
                <li>Machine Learning Model Development</li>
                <li>Data Analysis and Visualization</li>
                <li>AI-Powered Applications</li>
            </ul>
        </div>
    </section>

    <!-- Skills Section -->
    <section id="skills">
        <h2>My Skills</h2>
        <div class="skill-category">
            <h3>Web Development</h3>
            <ul>
                <li>HTML/CSS</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>Responsive Design</li>
            </ul>
        </div>
        <div class="skill-category">
            <h3>AI Career Essentials</h3>
            <ul>
                <li>Machine Learning</li>
                <li>Data Analysis</li>
                <li>Python Programming</li>
                <li>Algorithm Development</li>
                <li>Data Visualization</li>
            </ul>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects">
        <h2>My Projects</h2>
        <div class="project">
            <h3>Project 1</h3>
            <p>Shows an animated bird flying in the sky.</p>
             <div class="sky">
        <div class="dove">
            <div class="wing left-wing"></div>
            <div class="body"></div>
            <div class="wing right-wing"></div>
            <div class="beak"></div>
            <div class="eye"></div>
            <div class="tail"></div>
        </div>
    </div>
        </div>
        <div class="project">
            <h3>Project 2</h3>
            <p>Shows lightening striking the surface</p>
            <div class="animated-lightning">
             <div class="sky2">
        <div class="lightning"></div>
    </div>

            </div>
        </div>
        <div class="project">
            <h3>Project 3</h3>
            <p>Shows a ball bouncing repeatedly</p>
            <div class="animated-ball">
             <div class="container">
        <div class="ball"></div>
    </div>

            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact">
        <h2>Contact Me</h2>
        <div class="contact-info">
            <p><i class="phone-icon">Phone:</i> +264812924221</p>
            <p><i class="email-icon">Email:</i> zedricksalupito@gmail.com</p>
            <p><i class="home-icon">Home address:</i> Baumgartsbrunn C28 road</p>
        </div>
        <form action="https://api.web3forms.com/submit" method="POST">

    <input type="hidden" name="access_key" value="3b7fc82d-8e92-41fb-90a4-69898431deb2">

    <input  name="name" required>
    <input name="email" required>
            <input type="subject" name="subject" placeholder="Subject" required>
    <textarea name="message" placeholder="Please type your message here..!" required></textarea>
    <button type="submit">Submit Form</button>

</form>
    </section>

    <!-- Footer Section -->
    <footer>
        <h1>
            Let's DoHardThings Together..!
        </h1>
        <div class="socials">
            <a href="#"><i class="instagram-icon">Instagram</i></a>
            <a href="#"><i class="linkedin-icon">LinkedIn</i></a>
            <a href="#"><i class="facebook-icon">Facebook</i></a>
            <a href="#"><i class="twitter-icon">Twitter</i></a>
            <a href="#"><i class="github-icon">GitHub</i></a>
        </div>
        <p>&copy; 2024 Zedrick Salupito. All rights reserved.</p>
    </footer>
</body>
</html>
