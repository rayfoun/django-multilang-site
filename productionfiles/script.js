document.addEventListener('DOMContentLoaded', function() {
    var articleTitles = document.querySelectorAll('.article-title');

    articleTitles.forEach(function(title) {
        title.addEventListener('click', function() {
            var content = title.parentElement;

            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
            } else {
                content.classList.add('hidden');
            }
        });
    });

    var languageDropdown = document.getElementById('language-dropdown');
    languageDropdown.addEventListener('change', function() {
        var selectedLanguage = languageDropdown.value;
        changeLanguage(selectedLanguage);
    });

    function changeLanguage(language) {
        // Exemple de changement de langue
        // En pratique, tu devrais charger les textes traduits pour chaque langue
        var texts = {
            'fr': {
                'title': 'Articles',
                'publication_date': 'Date de publication'
            },
            'en': {
                'title': 'Articles',
                'publication_date': 'Publication Date'
            },
            'de': {
                'title': 'Artikel',
                'publication_date': 'Veröffentlichungsdatum'
            }
        };

        document.querySelector('.header h1').textContent = texts[language]['title'];
        document.querySelectorAll('.article-date strong').forEach(function(dateLabel) {
            dateLabel.textContent = texts[language]['publication_date'];
        });
    }
});