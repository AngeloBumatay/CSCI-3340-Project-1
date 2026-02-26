const tweetInput = document.getElementById("tweetInput");
const tweetButton = document.getElementById("tweetButton");
const charLabel = document.getElementById("charLabel");

const MAX_CHAR = 160;

tweetInput.addEventListener("input", updateCharacterCount);

function updateCharacterCount() {
    const currentLength = tweetInput.value.length;
    const remaining = MAX_CHAR - currentLength;

    // Update the character count label
    if (remaining >= 0) {
        charLabel.textContent = `${remaining} characters remaining`;
        charLabel.style.color = "black"; 
        tweetButton.disabled = false; 
        tweetButton.style.opacity = "1";
        tweetButton.style.cursor = "pointer";
    } else {
        charLabel.textContent = `${-remaining} characters over limit`;
        charLabel.style.color = "red"; 
        tweetButton.disabled = true; 
        tweetButton.style.opacity = "0.5";
        tweetButton.style.cursor = "not-allowed";
    }
}   