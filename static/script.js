document.addEventListener("DOMContentLoaded", () => {
    const deleteButtons = document.querySelectorAll(".delete-btn");

    deleteButtons.forEach(button => {
        button.addEventListener("click", event => {
            if (!confirm("Are you sure you want to delete this note?")) {
                event.preventDefault();
            }
        });
    });
});
