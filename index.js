const myLeads = [];
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
        
const inputBtn = document.getElementById("input-btn");
        
function renderLeads() {
    ulEl.innerHTML = "";
                        
    for (let i = 0; i < myLeads.length; i++) {
        const li = document.createElement("li");
                            
        li.innerHTML = `
            <a href="${myLeads[i]}" target="_blank">
                ${myLeads[i]}
            </a>
            `;
            ulEl.appendChild(li);
        }
    }
        
    inputBtn.addEventListener("click", function() {
    if (inputEl.value === "") { return; }
                        
    myLeads.push(inputEl.value);
    console.log(myLeads);
        
    renderLeads();
                        
    inputEl.value = "";
});
