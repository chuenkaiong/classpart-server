export const generatePIN = ():string => {
  let output = "";
  for (let i=0; i<4; i++) {
    output = output.concat((Math.floor(Math.random()*10)).toString())
  }
  return output
}