const deleteBtn = document.querySelector('i.delete')
console.log(deleteBtn)

deleteBtn.addEventListener('click', () => {
    const endPoint = `/inventory/comics/${deleteBtn.dataset.id}`
    fetch(endPoint, {
        method: "DELETE"
    })
        .then(res => res.json())
        .then(data => window.location.href = data.redirect)
        .catch(err => console.log(err))
})