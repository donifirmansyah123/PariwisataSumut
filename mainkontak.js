function showAlert(event) {
    event.preventDefault(); 
    
    let nama = document.getElementById("nama").value.trim(); 

    if (nama === "") {
        alert("Silakan masukkan nama terlebih dahulu!");
    } else {
        alert(`Halo ${nama}, terima kasih atas umpan balik Anda!`);
    }
}
