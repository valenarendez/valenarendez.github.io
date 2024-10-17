let currentOrder = 0; // Mantiene el índice del video actual
    const videos = document.querySelectorAll('.blockvideo__item');
    const totalVideos = videos.length;

    function updateVideoOrder() {
        videos.forEach((video, index) => {
            // Calcula el nuevo orden basado en el índice actual
            const newIndex = (index + currentOrder + totalVideos) % totalVideos;
            video.style.order = newIndex; // Actualiza el orden del video
        });
    }

    document.querySelector('.blockvideo__button:last-child').addEventListener('click', () => {
        currentOrder = (currentOrder + 1) % totalVideos; // Incrementa el índice
        updateVideoOrder(); // Actualiza el orden de los videos
    });

    document.querySelector('.blockvideo__button:first-child').addEventListener('click', () => {
        currentOrder = (currentOrder - 1 + totalVideos) % totalVideos; // Decrementa el índice
        updateVideoOrder(); // Actualiza el orden de los videos
    });

    // Inicializa el orden
    updateVideoOrder();