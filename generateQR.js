import QRCode from "qrcode";

// List of Zodiac signs
const zodiacSigns = [
  "mesham",
  "vrishabham",
  "mithunam",
  "karkatakam",
  "simham",
  "kanya",
  "tula",
  "vrischikam",
  "dhanus",
  "makaram",
  "kumbham",
  "meenam",
];

// Generate QR codes for each sign
zodiacSigns.forEach((sign) => {
  const url = `http://localhost:5173/zodiac/${sign}`;
  QRCode.toFile(`qr_${sign}.png`, url, function (err) {
    if (err) throw err;
    console.log(`✅ QR Code generated: qr_${sign}.png`);
  });
});
