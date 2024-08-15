function calculateBMI() {
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const weight = parseFloat(document.getElementById("weight").value);
    const age = parseInt(document.getElementById("age").value);
    const height = parseFloat(document.getElementById("height").value) / 100; // Convert cm to meters

    if (!weight || !age || !height) {
        alert("Harap isi semua field!");
        return;
    }

    const bmi = weight / (height * height);
    let category = '';

    if (bmi < 18.5) {
        category = 'Kekurangan Berat Badan';
        desc = "BMI anda kurang dari 18.5. anda berada dalam kategori kekurangan berat badan."
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = 'Normal (Ideal)';
        desc = "BMI Anda antara 18.5 - 24.9. Berat badan anda berada dalam kategori normal."
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        category = 'Berat Badan Lebih';
        desc = "BMI anda antara 25.0 - 29.9. Anda berada dalam kategori kelebihan berat badan."
    } else {
        category = 'Kegemukan (Obesitas)';
        desc = "BMI anda lebih dari 30.0. Anda berada dalam kategori kegemukan."
    }

    document.getElementById("result").innerHTML = `
        <h3>${category}</h3>
        <p>${bmi.toFixed(1)}</p>
        <p>Anda memiliki ${category.toLowerCase()}.</p>
        <p>${desc}.</p>
    `;
}

document.getElementById('reset').addEventListener('click', function() {
        // Menghapus nilai input
        document.getElementById('weight').value = '';
        document.getElementById('height').value = '';
        document.getElementById('age').value = '';
    
        // Menghapus hasil yang ditampilkan
        document.getElementById('result').innerHTML = '';
    });
    
document.getElementById("downloadBtn").addEventListener("click", function() {
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const weight = document.getElementById("weight").value;
    const age = document.getElementById("age").value;
    const height = document.getElementById("height").value;
    const result = document.getElementById("result").innerText;


    const textToSave = `
    Hasil Kalkulator BMI

    Jenis Kelamin: ${gender}
    Berat Badan: ${weight} kg
    Usia: ${age} tahun
    Tinggi Badan: ${height} cm

    ${result}
    `;

    const blob = new Blob([textToSave], { type: "text/plain" });
    const link = document.createElement("a");
    link.download = "Hasil_BMI.txt";
    link.href = window.URL.createObjectURL(blob);
    link.click();
});

