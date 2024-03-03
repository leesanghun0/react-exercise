
const handleScroll = () => {
    const contentsText = document.querySelectorAll('.contents-box-text');
    contentsText.forEach((textElement) => {
        const currentPosition = window.scrollY;
        const eventTargetElement = textElement.getBoundingClientRect().top;

        if (currentPosition >= eventTargetElement) {
            textElement.style.transform = 'translateY(0px)';
            textElement.style.transition = 'all 1s';
            textElement.style.opacity = '1';
        }
    });
};

window.addEventListener('scroll', handleScroll);

export default handleScroll;
