// Espera a que el documento HTML esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Verifica si el usuario prefiere el tema oscuro en su sistema
    var prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Obtiene el elemento raíz (html)
    var rootElement = document.documentElement;
    
    // Actualiza la propiedad data-bs-theme dependiendo del tema del sistema
    rootElement.setAttribute("data-bs-theme", prefersDarkMode ? "dark" : "default");
});
