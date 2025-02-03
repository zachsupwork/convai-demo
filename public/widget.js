(function() {
    let widgetButton = document.createElement("button");
    widgetButton.innerText = "Chat with AI";
    widgetButton.style.position = "fixed";
    widgetButton.style.bottom = "20px";
    widgetButton.style.right = "20px";
    widgetButton.style.padding = "10px 15px";
    widgetButton.style.background = "#007bff";
    widgetButton.style.color = "white";
    widgetButton.style.border = "none";
    widgetButton.style.borderRadius = "5px";
    widgetButton.style.cursor = "pointer";
    widgetButton.style.zIndex = "1000";

    let widgetContainer = document.createElement("div");
    widgetContainer.style.position = "fixed";
    widgetContainer.style.bottom = "70px";
    widgetContainer.style.right = "20px";
    widgetContainer.style.width = "400px";
    widgetContainer.style.height = "600px";
    widgetContainer.style.background = "white";
    widgetContainer.style.border = "1px solid #ccc";
    widgetContainer.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    widgetContainer.style.display = "none";
    widgetContainer.style.zIndex = "1000";

    let iframe = document.createElement("iframe");
    iframe.src = "https://convai-demo.vercel.app/";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";

    widgetButton.onclick = function() {
        if (widgetContainer.style.display === "none") {
            widgetContainer.style.display = "block";
        } else {
            widgetContainer.style.display = "none";
        }
    };

    widgetContainer.appendChild(iframe);
    document.body.appendChild(widgetContainer);
    document.body.appendChild(widgetButton);
})();
