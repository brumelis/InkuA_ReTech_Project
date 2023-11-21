document.addEventListener("DOMContentLoaded", function () {
    const head = document.querySelector("head");

    // Create meta elements
    const metaCharset = document.createElement("meta");
    metaCharset.charset = "UTF-8";

    const metaViewport = document.createElement("meta");
    metaViewport.name = "viewport";
    metaViewport.content = "width=device-width, initial-scale=1.0";

    // Append the meta elements to the head
    head.appendChild(metaCharset);
    head.appendChild(metaViewport);

    // Create link elements for fonts
    const fontLink1 = document.createElement("link");
    fontLink1.rel = "preconnect";
    fontLink1.href = "https://fonts.googleapis.com";

    const fontLink2 = document.createElement("link");
    fontLink2.rel = "preconnect";
    fontLink2.href = "https://fonts.gstatic.com";
    fontLink2.crossorigin = "anonymous";

    const fontCssLink = document.createElement("link");
    fontCssLink.href = "https://fonts.googleapis.com/css2?family=Cutive+Mono&family=IBM+Plex+Sans:wght@400;500;700&family=Open+Sans:wght@400;700&display=swap";
    fontCssLink.rel = "stylesheet";

    // Append the font link elements to the head
    head.appendChild(fontLink1);
    head.appendChild(fontLink2);
    head.appendChild(fontCssLink);

    // Create link elements for Bootstrap CSS
    const bootstrapCssLink = document.createElement("link");
    bootstrapCssLink.rel = "stylesheet";
    bootstrapCssLink.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css";
    bootstrapCssLink.integrity = "sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN";
    bootstrapCssLink.crossorigin = "anonymous";

    // Create link element for your custom stylesheet
    const customCssLink = document.createElement("link");
    customCssLink.rel = "stylesheet";
    customCssLink.href = "./styles.css";

    // Create link element for favicon
    const faviconLink = document.createElement("link");
    faviconLink.rel = "shortcut icon";
    faviconLink.href = "./ReTech - Sitio Web/images-Sprint1/favicon.png";
    faviconLink.type = "image/x-icon";

    // Append the link elements to the head
    head.appendChild(bootstrapCssLink);
    head.appendChild(customCssLink);
    head.appendChild(faviconLink);

    // Update the title
    document.title = "ReTech - Project";
});


