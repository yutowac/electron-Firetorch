document.getElementById('fireSizeRange').addEventListener('input', (event) => {
    const size = event.target.value;
    const scaleValue = size / 5;

    document.querySelectorAll('.flame').forEach(flame => {
        flame.style.transform = `scale(${scaleValue}) translateY(${-(size * 5)}px)`;
    });
});
