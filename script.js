

document.querySelector(".mark-all-as-read-btn").addEventListener("click", () => {
    document.querySelectorAll(".message-unread").forEach(message => { 
        message.classList.remove("message-unread");
        message.classList.add("message");
    });
    document.querySelector(".unread-count").textContent = '0';
});
