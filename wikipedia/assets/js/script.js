
document.addEventListener('DOMContentLoaded', function() {
    var checkbox = document.getElementById('modoEscuro');

    checkbox.addEventListener('change', function() {
        if (this.checked) {
            alert('Checkbox marcado');
        } else {
            alert('Checkbox desmarcado');
        }
    });
});

