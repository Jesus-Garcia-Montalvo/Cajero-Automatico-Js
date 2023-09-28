const usuarios = [
  {
    id: 1,
    nombre: "jesus",
    cedula: "1234567",
    contrasena: "123",
    tipo: 1,
  },
  {
    id: 2,
    nombre: "antonio",
    cedula: "1234567",
    contrasena: "321",
    tipo: 2,
  },
  {
    id: 2,
    nombre: "maria",
    cedula: "1234567",
    contrasena: "321",
    tipo: 2,
  },
];

const billetes = [
  {
    name: "5,000 COP",
    denominacion: 5000,
    cantidad: 0,
    suma: 0,
  },
  {
    name: "10,000 COP",
    denominacion: 10000,
    cantidad: 0,
    suma: 0,
  },
  {
    name: "20,000 COP",
    denominacion: 20000,
    cantidad: 0,
    suma: 0,
  },
  {
    name: "50,000 COP",
    denominacion: 50000,
    cantidad: 0,
    suma: 0,
  },
  {
    name: "100,000 COP",
    denominacion: 100000,
    cantidad: 0,
    suma: 0,
  },
];

do {
  let user = prompt("Por favor ingrese su usuario: 👤");
  let contrasena = prompt("Por favor ingresa tu contraseña: 🔒");

  const findedUser = usuarios.find(
    (item) => item.nombre == user && item.contrasena == contrasena
  );

  let isAdmin = false;

  //Si user y contraseña son correctos haz esto
  //      ↓
  if (findedUser) {
    findedUser.tipo == 1 ? (isAdmin = true) : (isAdmin = false); // ⇽ ternaria si es admin o no

    //Si es administrador haz esto
    //      ↓
    if (isAdmin) {
      console.log("☆☆☆  👨‍💼 ADMINISTRADOR 👨‍💼 ☆☆☆");
      console.log("DINERO EN EL CAJERO");
      console.log("-----------------------------------");
      for (let i = 0; i < billetes.length; i++) {
        let nb = Number(
          prompt(
            `💵ingesa la cantidad de  billetes de : ${billetes[i].name} 💵`
          )
        );
        billetes[i].cantidad += nb;
        billetes[i].suma = billetes[i].cantidad * billetes[i].denominacion;
      }

      billetes.map((b) => {
        return console.log(
          `Denominador :  ${b.name} Cantidad : ${b.cantidad} valor ${b.suma}`
        );
      });
      console.log("-----------------------------------");

      const total = billetes.reduce((t, b) => t + b.suma, 0);
      console.log(`Total general : ${total}`);
    }
    console.log("-------------------------------------");
    //Fin por parte del administrador

    //Si eres Cliente haz esto
    //      ↓
    if (!isAdmin) {
      let t = billetes.reduce((t, b) => t + b.suma, 0);

      //Si el cajero no tiene dinero haz esto
      //    ↓
      if (t == 0) {
        alert("⚠️ Cajero en mantenimineto vuelva pronto ⚠️");

        //Si el cajero tiene dinero haz esto
        //  ↓
      } else {
        let retiro = Number(prompt(`💲Ingrese la cantidad a retirar💲`));

        //Si el retiro es mayor a lo que tiene el cajero haz esto
        //      ↓
        if (retiro > t) {
          alert("💸la cantidad exede al valor del cajero💸");

          //Si el retiro es menor a lo que tiene el cajero haz esto
          //↓
        } else {
          console.log("☆☆☆🙍‍♂️ CLIENTE 🙍‍♂️ ☆☆☆");
          console.log("RETIRO");
          console.log("-------------------------------------");

          let billetes_entregados = [];
          //si la cantidad de billetes 100 en el array es mayor o igual b100
          //Haz esto
          //               ↓
          // Cálculo de billetes de 100
          let cb100 = Math.floor(retiro / billetes[4].denominacion);

          if (billetes[4].cantidad >= cb100) {
            billetes_entregados.push({
              denominacion: billetes[4].denominacion,
              cantidad: cb100,
              suma: billetes[4].denominacion * cb100,
            });
            billetes[4].cantidad -= cb100;
            retiro %= billetes[4].denominacion; //<--- residuo
            console.log(
              `Billetes de ${billetes[4].name} cantida: ${cb100} | valor : ${billetes_entregados[0].suma}`
            );
          }

          // Cálculo de billetes de 50
          let b50 = Math.floor(retiro / billetes[3].denominacion);
          if (billetes[3].cantidad >= b50) {
            billetes_entregados.push({
              denominacion: billetes[3].denominacion,
              cantidad: b50,
              suma: billetes[3].denominacion * b50,
            });
            billetes[3].cantidad -= b50;
            retiro %= billetes[3].denominacion;
            console.log(
              `Billetes de ${billetes[3].name}  cantida: ${b50} | valor : ${billetes_entregados[1].suma}`
            );
          }

          // Cálculo de billetes de 20
          let b20 = Math.floor(retiro / billetes[2].denominacion);
          if (billetes[2].cantidad >= b20) {
            billetes_entregados.push({
              denominacion: billetes[2].denominacion,
              cantidad: b20,
              suma: billetes[2].denominacion * b20,
            });
            billetes[2].cantidad -= b20;
            retiro %= billetes[2].denominacion;
            console.log(
              `Billetes de ${billetes[2].name} cantida: ${b20} | valor : ${billetes_entregados[2].suma}`
            );
          }

          // Cálculo de billetes de 10
          let b10 = Math.floor(retiro / billetes[1].denominacion);
          if (billetes[1].cantidad >= b10) {
            billetes_entregados.push({
              denominacion: billetes[1].denominacion,
              cantidad: b10,
              suma: billetes[1].denominacion * b10,
            });
            billetes[1].cantidad -= b10;
            retiro %= billetes[1].denominacion;
            console.log(
              `Billetes de ${billetes[1].name}  cantida: ${b10} | valor : ${billetes_entregados[3].suma}`
            );
          }

          // Cálculo de billetes de 5
          let b5 = Math.floor(retiro / billetes[0].denominacion);
          if (billetes[0].cantidad >= b5) {
            billetes_entregados.push({
              denominacion: billetes[0].denominacion,
              cantidad: b5,
              suma: billetes[0].denominacion * b5,
            });
            billetes[0].cantidad -= b5;
            retiro %= billetes[0].denominacion;
            console.log(
              `Billetes de ${billetes[0].name}  cantida: ${b5} | valor : ${billetes_entregados[4].suma}`
            );
          }

          const tc = billetes_entregados.reduce((t, e) => t + e.cantidad, 0);
          const tb = billetes_entregados.reduce((t, s) => t + s.suma, 0);
          console.log("-------------------------------------");
          console.log(
            `TOTAL CANTIDAD DE BILLETES : ${tc} | TOTAL VALOR: ${tb}COP `
          );

          //CAJERO AUTOMATICO
          console.log("-------------------------------------");
          console.log("☆☆☆ 🏦 CAJERO AUTOMATICO 🏦 ☆☆☆");
          billetes.map((b) => {
            console.log(
              `Denominador :  ${b.name} Cantidad : ${b.cantidad} valor ${b.suma}`
            );
          });

          console.log("-----------------------------------");

          const tg = billetes.reduce((t, b) => t + b.suma, 0);
          let t = tg - tb;
          console.log(`Total dinero en el cajero: ${t}`);
        }
      }
    }
    //Si user y contraseña  no son correctos haz esto
    //    ↓
  } else {
    alert("❌usuario o contaseña incorrecto❌");
  }
} while (confirm("🔄Desea seguir detro del cajero🔄"));
