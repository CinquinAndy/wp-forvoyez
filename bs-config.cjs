module.exports = {
    proxy: "127.0.0.1:8000", // Remplacez par le port utilisé par votre serveur PHP
    files: ["public/**/*.php", "resources/**/*.php", "public/**/*.css", "public/**/*.js"],
    notify: false
};