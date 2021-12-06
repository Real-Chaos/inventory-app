const deleteBtn = document.querySelector('i.delete')

deleteBtn.addEventListener('click', () => {
    const endpoint = `/inventory/anime/${deleteBtn.dataset.id}`

    fetch(endpoint, {
        method: "DELETE"
    })
        .then(response => response.json())
        .then(data => window.location.href = data.redirect)
        .catch(err => console.log(err))
})