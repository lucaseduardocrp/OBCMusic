const umSegundo = 1000
const umMinuto = 60 * umSegundo 
const umaHora = 60 * umMinuto 
const umDia = 24 * umaHora 

export function calcTimer(FinalDate: Date) {
  const currentDate = new Date()
  const finalDate = new Date(FinalDate)

  let diference = finalDate.getTime() - currentDate.getTime()

  if (diference <= 0) {
    return {
      dias: 0,
      horas: 0,
      minutos: 0,
      segundos: 0
    }
  }

  const dias = Math.floor(diference / umDia)
  const horas = Math.floor((diference % umDia) / umaHora)
  const minutos = Math.floor((diference % umaHora) / umMinuto)
  const segundos = Math.floor((diference % umMinuto) / umSegundo)

  return {
    dias: dias,
    horas: horas,
    minutos: minutos,
    segundos: segundos
  }
}