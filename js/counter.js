//inizializo il contatore
let count = 0;

//otteniamo i valori dei pulsanti
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

//ricorro per i valori dei pulsanti
btns.forEach((btn) =>{
    btn.addEventListener("click", (e) => {
        const styles = e.currentTarget.classList;

        //modifico il contatore
        if(styles.contains("decrase")) count --;

        if(styles.contains("reset")) count =0;

        if(styles.contains("incrase"))count ++;

        //assegno colori 
        if(count >0) value.style.color = "green";

        if(count <0) value.style.color = "red";

        if(count ===0)value.style.color = "black";

        //assegno il valore
        value.textContent = count;
    });
});
