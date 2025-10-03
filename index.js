function submitForm() {
    const nim = document.getElementById("nim").value;
    const nama = document.getElementById("nama").value;
    const gender = document.getElementById("jenis_kelamin").value;
    const religion = document.getElementById("agama").value;
    const status = document.getElementById("status").value;
    const major = document.getElementById("jurusan").value;
    const comment = document.getElementById("komentar").value;

    document.getElementById("outputNIM").innerText = nim;
    document.getElementById("outputNama").innerText = nama;
    document.getElementById("outputGender").innerText = gender;
    document.getElementById("outputReligion").innerText = religion;
    document.getElementById("outputStatus").innerText = status;
    document.getElementById("outputMajor").innerText = major;
    document.getElementById("outputComment").innerText = comment;
}
