console.log("CF Notes Loaded");

const problemId = location.pathname;

const box = document.createElement("div");

box.className = "cf-notes-box";

box.innerHTML = `
<div class="cf-header">

<h3 id="cf-collapse">
▼ Personal Notes
</h3>

<span id="save-status">
✓ Saved
</span>

</div>

<div id="cf-body">

<div class="cf-status-row">

<button class="cf-tag">🟢 Solved</button>

<button class="cf-tag">🟡 Revise</button>

<button class="cf-tag">🔴 Hard</button>

<button class="cf-tag">⭐ Favourite</button>

</div>

<textarea
id="cf-note"
placeholder="Write observations, mistakes, ideas..."
></textarea>

<div class="cf-footer">

<button id="template-btn">
Insert Template
</button>

<span id="char-count">
0 characters
</span>

</div>

</div>
`;

const statement = document.querySelector(".problem-statement");

if (statement)
    statement.appendChild(box);

const noteBox = document.getElementById("cf-note");
const status = document.getElementById("save-status");
const counter = document.getElementById("char-count");

chrome.storage.local.get([problemId], (data) => {

    noteBox.value = data[problemId] || "";
    counter.textContent = `${noteBox.value.length} characters`;

});

noteBox.addEventListener("input", () => {

    counter.textContent =
        `${noteBox.value.length} characters`;

    chrome.storage.local.set({
        [problemId]: noteBox.value
    });

    status.textContent = "✓ Saved";

setTimeout(() => {

    status.textContent = "";

}, 1000);

});

document
.getElementById("template-btn")
.addEventListener("click", () => {

    if (noteBox.value.length === 0) {

        noteBox.value =
`Idea:


Complexity:


Mistakes:


Revision Notes:
`;

        noteBox.dispatchEvent(
            new Event("input")
        );

    }

});
const tags = document.querySelectorAll(".cf-tag");

chrome.storage.local.get([problemId + "_status"], data => {

    const savedStatus = data[problemId + "_status"];

    if (savedStatus) {

        tags.forEach(tag => {

            if (tag.innerText === savedStatus) {

                tag.classList.add("cf-tag-active");

            }

        });

    }

});

tags.forEach(tag => {

    tag.addEventListener("click", () => {

        tags.forEach(t =>
            t.classList.remove("cf-tag-active")
        );

        tag.classList.add("cf-tag-active");

        chrome.storage.local.set({
            [problemId + "_status"]: tag.innerText
        });

    });

});
const collapse =
document.getElementById("cf-collapse");

const body =
document.getElementById("cf-body");

collapse.addEventListener("click", () => {

    const hidden =
        body.style.display === "none";

    body.style.display =
        hidden ? "" : "none";

    collapse.textContent =
        `${hidden ? "▼" : "▶"} Personal Notes`;

});
