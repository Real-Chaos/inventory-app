const deleteBtn = document.querySelector('i.delete');

deleteBtn.addEventListener('click', () => {
    const endpoint = `/inventory/manga/${deleteBtn.dataset.id}`

    fetch(endpoint, {
        method: "DELETE"
    })
        .then(res => res.json())
        .then(data => window.location.href = "/inventory/manga")
        .catch(err => console.log(err))

})