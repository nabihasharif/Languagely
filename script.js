document.getElementById('checkButton').addEventListener('click', async function() {
    const textInput = document.getElementById('textInput').value;

    const response = await fetch('/check_grammar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: textInput })
    });

    const result = await response.json();
    
    document.getElementById('result').innerHTML = `
        <h3>Corrected Text:</h3>
        <p>${result.corrected_text}</p>
    `;
});
