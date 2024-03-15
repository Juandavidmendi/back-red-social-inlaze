exports.generarStringAleatorio = ({ longitud = 8 } = {}) => {
  const caracteres =
    "ABCDEFGHJKMNOPQRSTUVWXYZabcdefghjklmnopqrstuvwxyz023456789";
  let resultado = "";
  for (let c = 0; c < longitud; c++) {
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    resultado += caracteres.charAt(indiceAleatorio);
  }
  return resultado;
};
