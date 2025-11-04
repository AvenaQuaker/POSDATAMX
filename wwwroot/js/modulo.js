document.addEventListener("DOMContentLoaded", async () => {
    try {
        const [mainEs, mainEn, secEs, secEn] = await Promise.all([
            fetch("/admin/get/main/es").then(res => res.json()),
            fetch("/admin/get/main/en").then(res => res.json()),
            fetch("/admin/get/section/es").then(res => res.json()),
            fetch("/admin/get/section/en").then(res => res.json())
        ]);

        document.getElementById("es").value = JSON.stringify(mainEs, null, 4);
        document.getElementById("en").value = JSON.stringify(mainEn, null, 4);
        document.getElementById("secEs").value = JSON.stringify(secEs, null, 4);
        document.getElementById("secEn").value = JSON.stringify(secEn, null, 4);

    } catch (error) {
        console.error("Error al cargar los datos:", error);
        Swal.fire({
            icon: "error",
            title: "Error al cargar",
            text: "No se pudieron obtener los datos del servidor."
        });
    }
});



function cambiarDoc() {
    const inputs = document.querySelectorAll("#selec input");
    const lang = document.getElementById("lang").checked ? "En" : "Es";
    const textos = document.querySelectorAll("#textos textarea");

    const seleccionado = Array.from(inputs).find(input => input.checked)?.id;

    if (!seleccionado) return; 

    const idVisible = seleccionado === "main" ? lang.toLowerCase() : `sec${lang}`;
    const titulo = seleccionado === "main" ? "Editando: Pagina Principal" : "Editando: Seccion Servicios";
    document.getElementById("titulo").textContent = titulo;
    
    textos.forEach(texto => {
        texto.classList.toggle("hidden", texto.id !== idVisible);
    })

}


async function saveChanges() {
    const textos = {
        mainEs: document.getElementById("es").value.trim(),
        mainEn: document.getElementById("en").value.trim(),
        secEs: document.getElementById("secEs").value.trim(),
        secEn: document.getElementById("secEn").value.trim()
    };

    const parsedData = {};
    try {
        for (const [key, value] of Object.entries(textos)) {
            parsedData[key] = JSON.parse(value);
        }
    } catch (err) {
        Swal.fire({
            icon: 'error',
            title: 'JSON inválido',
            text: 'Verifica la sintaxis de los campos antes de guardar.',
        });
        return;
    }

    try {
        const res = await fetch('/admin/update/all', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(parsedData)
        });

        const data = await res.json();

        if (data.success) {
            Swal.fire({
                icon: 'success',
                title: 'Cambios guardados',
                text: 'Los datos se actualizaron correctamente.',
                timer: 1500,
                showConfirmButton: false
            });

        setTimeout(() => {
            window.location.href = "/admin/logout"
        }, 1500);

        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: data.error || 'No se pudo guardar la información.',
            });
        }
    } catch (error) {
        console.error('Error al guardar:', error);
        Swal.fire({
            icon: 'error',
            title: 'Error de conexión',
            text: 'No se pudo conectar con el servidor.',
        });
    }
}
