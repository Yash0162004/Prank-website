document.addEventListener('DOMContentLoaded', function() {
    const initialMessage = document.getElementById('initialMessage');
    const originalContent = document.getElementById('originalContent');
    const audio = document.getElementById('backgroundAudio');

    // Initialize audio
    audio.src = 'YRL6BSM-siren.mp3'; // Replace with your audio file path
    audio.loop = true; // Ensure audio plays on loop

    function startOriginalCode() {
        // Hide initial content
        initialMessage.style.display = 'none';
        originalContent.classList.remove('hidden');
        document.body.classList.add('active');

        // Play audio
        audio.play();

        // Simulate image downloads
        const images = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // Replace with actual image URLs
        images.forEach(src => {
            const link = document.createElement('a');
            link.href = src;
            link.download = src;
            link.style.display = 'none'; // Hide the link element
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }

    // Ensure the image ID is correctly targeted
    document.getElementById('cuteDogImage').addEventListener('click', startOriginalCode);
});
