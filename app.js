presentationArea = document.getElementById('presentation-area');
presentationArea.addEventListener('dblclick', (event) => {
    console.log('hi');

    const textBox = document.createElement("input");
    textBox.type = 'text';
    textBox.value = 'TypeYourText';
    textBox.className = 'draggable-text';

    // Positioning
    const rect = presentationArea.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    textBox.style.left = `${x}px`;
    textBox.style.top = `${y}px`;

    // Draggability
    let offsetX, offsetY;

    textBox.addEventListener('mousedown', (e) => {
        offsetX = e.offsetX;
        offsetY = e.offsetY;

        const onMouseMove = (moveEvent) => {
            const newX = moveEvent.clientX - rect.left - offsetX;
            const newY = moveEvent.clientY - rect.top - offsetY;
            textBox.style.left = `${newX}px`;
            textBox.style.top = `${newY}px`;
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', onMouseMove);
        }, {once: true});
    });

    // Add the text box to the presentation area
    presentationArea.appendChild(textBox);

    // Focus on the text box for immediate editing
    textBox.focus();
});


