process.stdout.write('hello from spinner2.js... \rheyyy\n');

setTimeout(() => { process.stdout.write('\r|   ');}, 300);

setTimeout(() => { process.stdout.write('\r/   ');}, 600);

setTimeout(() => {process.stdout.write('\r-   ');}, 900);

setTimeout(() => {process.stdout.write('\r\\   ');}, 1200);

setTimeout(() => { process.stdout.write('\r|   ');}, 1500);

setTimeout(() => { process.stdout.write('\r/   ');}, 1800);

setTimeout(() => {process.stdout.write('\r-   ');}, 2100);

setTimeout(() => {process.stdout.write('\r\\   ');}, 2400);


