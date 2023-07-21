// Array de preguntas con sus opciones y respuestas
        var questions = [
            {
                question: "¿Cuál es la capital de Francia?",
                options: ["Londres", "París", "Madrid", "Berlín"],
                answer: 1
            },
            {
                question: "¿Cuál es el río más largo del mundo?",
                options: ["Nilo", "Amazonas", "Yangtsé", "Misisipi"],
                answer: 0
            },
            {
                question: "¿Cuántos huesos tiene el cuerpo humano?",
                options: ["206", "200", "215", "208"],
                answer: 0
            },
            {
                question: "¿Quién pinto la ultima cena?",
                options: ["Leonardo DaVinci", "Pablo Picasso", "Vincent van Gogh", "Miguel Ángel"],
                answer: 0
            },{
                question: "¿En qué año llegó Cristobal Colón a América?",
                options: ["1492", "1397", "1486", "1506"],
                answer: 0
            },
            {
                question: "¿En qué año murió Freddie Mercury?",
                options: ["1991", "1998", "1995", "1993"],
                answer: 0
            },{
                question: "¿Quién protagonizo la pelicula el pianista?",
                options: ["Adrian Brody", "Jhony Deep", "Leonardo Di Caprio", "Jhon Travolta"],
                answer: 0
            },
            {
                question: "¿Cuál es el país más grande del mundo?",
                options: ["China", "Rusia","Estados Unidos","Canadá"],
                answer: 1
            },{
                question: "¿Cuál es el disco más ventido de la historia?",
                options: ["Bohemian Rhapsody  de Freddy Mercury", "Triller de Michael Jackson", "The Beatles 1968", "The Freewheelin' Bob Dylan"],
                answer: 1
            },
            {
                question: "¿Quién es el autor de la frase Pienso, luego existo?",
                options: ["Galileo Galilei", "Platón", "Descartes", "Nietzsche"],
                answer: 2
            },
        ];

        // Variables globales
        var currentQuestionIndex = 0;
        var lineasUsed = false;

        // Obtener elementos del DOM
        var questionContainer = document.getElementById("question-container");
        var questionElement = document.getElementById("question");
        var optionsElement = document.getElementById("options");
        var resultElement = document.getElementById("result");
        var cincuentacincuentaButton = document.getElementById("cincuentacincuenta");

        // Función para mostrar una pregunta en el contenedor
        function showQuestion() {
            var question = questions[currentQuestionIndex];
            questionElement.textContent = question.question;

            optionsElement.innerHTML = "";
            for (var i = 0; i < question.options.length; i++) {
                var option = document.createElement("li");
                option.textContent = question.options[i];
                option.addEventListener("click", checkAnswer);
                optionsElement.appendChild(option);
            }
        }

        // Función para verificar la respuesta seleccionada por el usuario
        function checkAnswer(event) {
            var selectedOption = event.target;
            var question = questions[currentQuestionIndex];

            if (selectedOption.textContent === question.options[question.answer]) {
                resultElement.textContent = "¡Respuesta correcta! Ganaste $1,000,000.";
                currentQuestionIndex++;
                if (currentQuestionIndex < questions.length) {
                    showQuestion();
                } else {
                    questionContainer.style.display = "none";
                    cincuentacincuenta.style.display = "none";
                    phoneFriendButton.style.display = "none";
                }
            } else {
                resultElement.textContent = "Respuesta incorrecta. ¡Perdiste!";
                questionContainer.style.display = "none";
                cincuentacincuenta.style.display = "none";
                phoneFriendButton.style.display = "none";
            }
        }

        // Función para aplicar el comodín "50:50"
        function cincuentacincuenta() {
            if (!lineasUsed) {
                var question = questions[currentQuestionIndex];
                var options = Array.from(optionsElement.children);

                var optionsToRemove = [];
                for (var i = 2; i < options.length; i++) {
                    if (i !== question.answer) {
                        optionsToRemove.push(options[i]);
                    }
                }

                for (var i = 0; i < optionsToRemove.length; i++) {
                    optionsElement.removeChild(optionsToRemove[i]);
                }

                cincuentacincuentaButton.disabled = true;
                lineasUsed = true;
            }
        }

        // Mostrar la primera pregunta al cargar la página
        showQuestion();

        // Agregar eventos a los botones de los comodines
        cincuentacincuentaButton.addEventListener("click", cincuentacincuenta);
        