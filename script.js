function cekArea() {
  const input = document.getElementById("kodeArea").value.trim();
  const hasil = document.getElementById("hasil");

  if (!input) {
    hasil.innerHTML = "⚠️ Masukkan kode area atau nomor XL!";
    return;
  }

  // Contoh data dummy area
  const dataArea = {
    "0817": "Jakarta",
    "0818": "Bandung",
    "0819": "Surabaya",
    "0821": "Medan",
    "0822": "Yogyakarta"
  };

  const prefix = input.substring(0, 4);
  if (dataArea[prefix]) {
    hasil.innerHTML = `✅ Nomor dengan kode <b>${prefix}</b> terdeteksi dari area <b>${dataArea[prefix]}</b>.`;
  } else {
    hasil.innerHTML = "❌ Kode area tidak ditemukan dalam database.";
  }
}