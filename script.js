function resolver() {
    const base = parseFloat(document.querySelector("#base").value);
    const expoente = parseFloat(document.querySelector("#expoente").value);
  
    const resultado = base ** expoente;
  
    document.querySelector("#resultado").textContent = resultado;
}
 document.querySelector("#resolver").addEventListener("click", resolver);

 function limpar() {
    document.querySelector("#base").value = "";
    document.querySelector("#expoente").value = "";
    document.querySelector("#resultado").textContent = "";
}
  document.querySelector("#limpar").addEventListener("click", limpar);
  