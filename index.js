// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
});

// Number counter animation
const stats = document.querySelectorAll('.stat-number');

stats.forEach(stat => {
    const target = parseInt(stat.getAttribute('data-target'));
    const increment = target / 200;

    const updateCount = () => {
        const count = parseInt(stat.innerText);
        if (count < target) {
            stat.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 10);
        } else {
            stat.innerText = target;
        }
    };

    updateCount();
});

// Testimonial Slider (if you want to add one)
// You can use a library like Swiper.js for a more advanced slider