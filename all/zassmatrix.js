// Credits By Zass Onee 
const matrixKuroko = () => {
  const chars = '▒▓█';
  const columns = process.stdout.columns || 80;

  const darkPurple = (text) => `\x1b[35m${text}\x1b[0m`;
  const gray = (text) => `\x1b[90m${text}\x1b[0m`;

  const draw = () => {
    let output = '';
    for (let i = 0; i < columns; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      output += Math.random() > 0.975 ? darkPurple(char) : gray('.');
    }
    console.log(output);
  };

  return new Promise(resolve => {
    const interval = setInterval(draw, 40);
    setTimeout(() => {
      clearInterval(interval);
      console.clear();

      console.log('\x1b[35m');
      console.log(' __  __     __  __     ______     ______     __  __     ______    ');
      console.log('/\\ \\/ /    /\\ \\/\\ \\   /\\  == \\   /\\  __ \\   /\\ \\/ /    /\\  __ \\   ');
      console.log('\\ \\  _"-.  \\ \\ \\_\\ \\  \\ \\  __<   \\ \\ \\/\\ \\  \\ \\  _"-.  \\ \\ \\/\\ \\  ');
      console.log(' \\ \\_\\ \\_\\  \\ \\_____\\  \\ \\_\\ \\_\\  \\ \\_____\\  \\ \\_\\ \\_\\  \\ \\_____\\ ');
      console.log('  \\/_/\\/_/   \\/_____/   \\/_/ /_/   \\/_____/   \\/_/\\/_/   \\/_____/ ');
      console.log('\x1b[0m');

      console.log('\x1b[90m                 ╔═════════════════════════════════════╗');
      console.log('                       © 2025  Credits By Ｓㄚ 么 m  ');
      console.log('                 ╚═════════════════════════════════════╝\x1b[0m');

      console.log('\n\x1b[35m┏━━ THANKS TO ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓\x1b[0m');
      console.log('\x1b[32m┃\x1b[0m ✔ enik thanee!');
      console.log('\x1b[32m┃\x1b[0m ✔ enik thanee!');
      console.log('\x1b[32m┃\x1b[0m ✔ enik thanee!');
      console.log('\x1b[32m┃\x1b[0m ✔ enik thanee!');
      console.log('\x1b[32m┃\x1b[0m ✔ enik thanee!');
      console.log('\x1b[32m┃\x1b[0m ✔ enik thanee!');
      console.log('\x1b[32m┃\x1b[0m ✔ enik thanee!');
      console.log('\x1b[32m┃\x1b[0m ✔ enik thanee!');
      console.log('\x1b[32m┃\x1b[0m ✔ enik thanee!');
      console.log('\x1b[35m┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛\x1b[0m');

      console.log('\n\x1b[36m┏━━ KONTAK DEVELOPER ━━━━━━━━━━━━━━━━━━━━━━━━━━┓\x1b[0m');
      console.log('\x1b[33m┃ YouTube :\x1b[0m ╰🇸 🇾 🇦 🇲╯');
      console.log('\x1b[33m┃ WhatsApp:\x1b[0m wa.me/919947121619');
      console.log('\x1b[33m┃ Channel :\x1b[0m https://www.instagram.com/_mr.fro_ud_/');
      console.log('\x1b[33m┃ Website :\x1b[0m https://www.instagram.com/_mr.fro_ud_/');
      console.log('\x1b[36m┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛\x1b[0m');

      console.log('\n\x1b[35m[ 🕊🦋⃝♥⃝ѕиєнα🍁♥⃝🦋⃝🕊 ]\x1b[0m\n');

      resolve();
    }, 2000); // durasi animasi matrix 2 detik
  });
};

module.exports = matrixKuroko;