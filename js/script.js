document.addEventListener('DOMContentLoaded', () => {
    if (window.matchMedia("(pointer: fine)").matches) {
        const cursor = document.createElement('div');
        cursor.classList.add('cursor-arrow');
        document.body.appendChild(cursor);

        let isMoving = false;

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';

            if (!isMoving) {
                isMoving = true;
                createStar(e.clientX, e.clientY);
                setTimeout(() => { isMoving = false; }, 40);
            }
        });

        function createStar(x, y) {
            const star = document.createElement('div');
            star.classList.add('star-trail');
            const offset = (Math.random() - 0.5) * 15;
            star.style.left = (x - 5 + offset) + 'px';
            star.style.top = (y - 5 + offset) + 'px';
            document.body.appendChild(star);

            setTimeout(() => { star.remove(); }, 800);
        }
    }
});