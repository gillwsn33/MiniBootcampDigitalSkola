function bikinPiramid(rows) {
  for (let i = 1; i <= rows; i++) {
    let bintang = "";
    for (let j = 1; j <= i; j++) {
      bintang += "*";
    }
    console.log(bintang);
  }
}

bikinPiramid(5);
