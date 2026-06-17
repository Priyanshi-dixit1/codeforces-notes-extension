// // restore saved handle on open
// chrome.storage.local.get(["cf_handle"], ({ cf_handle }) => {
//   if (cf_handle) {
//     document.getElementById("handle-input").value = cf_handle;
//     document.getElementById("status").textContent = `Active: ${cf_handle}`;
//   }
// });

// // save handle on click
// document.getElementById("save-btn")
//   .addEventListener("click", () => {
//     const handle = document.getElementById("handle-input").value.trim();

//     if (!handle) {
//       document.getElementById("status").textContent = "Please enter a handle.";
//       return;
//     }

//     chrome.storage.local.set({ cf_handle: handle }, () => {
//       document.getElementById("status").textContent = `Saved: ${handle}`;
//     });
//   });