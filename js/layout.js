// Example shared layout injector
document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch('data/site-config.xml');
        const xmlText = await response.text();
        const xmlDoc = new DOMParser().parseFromString(xmlText, "application/xml");
        
        const collegeName = xmlDoc.querySelector('institution name').textContent;
        const accreditation = xmlDoc.querySelector('institution accreditation').textContent;

        // Automatically update all elements tagged with data-college-name across any page
        document.querySelectorAll('[data-bind="college-name"]').forEach(el => {
            el.textContent = collegeName;
        });
        document.querySelectorAll('[data-bind="accreditation"]').forEach(el => {
            el.textContent = accreditation;
        });
    } catch (err) {
        console.error("Global config load error:", err);
    }
});