document.addEventListener("DOMContentLoaded", function() {
    const paragraph = document.getElementById("text");
    const text = paragraph.innerText;
    
    // Task 1: Highlight words longer than 8 characters.
    const highlightedText = text.split(' ').map(word => {
        return word.length > 8 ? `<span style="background-color: yellow">${word}</span>` : word;
    }).join(' ');

     // Task 2: Add a link back to the source.
     const sourceLink = document.createElement("a");
     sourceLink.href = "https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-jobinterview-questions-and-how-great-job-candidates-answer-them.html";
     sourceLink.innerText = "Read the source";
     paragraph.insertAdjacentElement("afterend", sourceLink);

    // Task 3: Split each new sentence onto a new line.
    const splitSentences = highlightedText.replace(/([.?!])\s*(?=[A-Z])/g, "$1<br><br>");
    paragraph.innerHTML = splitSentences;

    // Task 4: Count the number of words.
    const wordCount = text.split(/\s+/).length;
    document.getElementById("word-count").innerText = `Word count: ${wordCount}`;

    // Task 5: Replace question marks and exclamation marks with respective emoji.
    paragraph.innerHTML = paragraph.innerHTML
        .replace(/\?/g, '🤔')
        .replace(/!/g, '😲');
});
