let passwords = {}; // Object to store the passwords

        // Charger les mots de passe depuis le fichier JSON externe
        fetch('passwords.json')
            .then(response => response.json())
            .then(data => {
                passwords = data;
            })
            .catch(error => {
                console.error('Erreur de chargement des mots de passe:', error);
            });

        let activeTab = -1;

        function showTab(index, className) {
            // Cacher tous les contenus et les zones de mot de passe
            for (let i = 1; i <= 3; i++) {
                document.getElementById('content-' + i).style.display = 'none';
                document.getElementById('password-box-' + i).style.display = 'none';
                document.getElementById('error-message-' + i).style.display = 'none';
            }

            if (activeTab !== index) {
                activeTab = index;
                document.getElementById('content-' + index).style.display = 'block';
                document.getElementById('password-box-' + index).style.display = 'block';
            }
        }

        function checkPassword(tabIndex, className) {
            const enteredPassword = document.getElementById('password-' + tabIndex).value;
            const correctPassword = passwords[className];
            const errorMessage = document.getElementById('error-message-' + tabIndex);
            const contentDiv = document.getElementById('content-text-' + tabIndex);

            if (enteredPassword === correctPassword) {
                errorMessage.style.display = 'none';
                contentDiv.style.display = 'block';
                document.getElementById('password-box-' + tabIndex).style.display = 'none';
            } else {
                errorMessage.style.display = 'block';
            }
        }