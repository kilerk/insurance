document.addEventListener('DOMContentLoaded', () => {
    loadText('base_file/hero.txt', 'Hero');
    loadText('base_file/cta.txt', 'CTA');
    loadText('base_file/seller.txt', 'Seller');
});

function loadText(path, type) {
    fetch(path)
        .then(response => response.text())
        .then(data => {
            if (type === 'Hero') {
                const lines = data.split('\n');
                document.getElementById('hero-title').textContent = lines[0];
                document.getElementById('hero-description').textContent = lines[1];
            } else if (type === 'CTA') {
                document.getElementById('cta-button').textContent = data.trim();
            } else if (type === 'Seller') {
                document.getElementById('seller-details').textContent = data.trim();
            } else {
                alert(data.trim());
            }
        })
        .catch(err => console.error(err));
}
