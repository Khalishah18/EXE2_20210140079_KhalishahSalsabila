function kirimData() {
    var name = document.getElementById("nama").value
    var email = document.getElementById("email").value
    var nohp = document.getElementById("nohp").value
    var tanggal = document.getElementById("tanggal").value;
    var dropdown = document.getElementById("zona");
    var selectedZona = dropdown.options[dropdown.selectedIndex].text;
    var day =
        document.querySelector("input[name=day]:checked").value
    var jumlah = document.getElementById("jumlah").value
    var Alamat = document.getElementById("alamat").value

    alert(
        "Nama Pembeli : " + name +
        "\nEmail : " + email +
        "\nNomor Handphone : " + nohp +
        "\nTanggal : " + tanggal +
        "\nPilihan Zona : " + selectedZona +
        "\nDay : " + day +
        "\nJumlah Tiket : " + jumlah +
        "\nAlamat : " + Alamat 
        
    )
}
