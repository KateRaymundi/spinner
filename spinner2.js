const spinner2 = (spinner) => {
waitTime = 0
for (let spin of spinner){
  setTimeout(() => {
    process.stdout.write(`\r ${spin}`);
  }, waitTime)
  waitTime += 1000
}
}
spinner2(["|","/","-","\\","|","/","-","\\","|"])
