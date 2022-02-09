
export function mounthConvert(mounth: string) {
  switch (mounth) {
    case 'Janeiro': return 'JAN'
    case 'Fevereiro': return 'FEV'
    case 'Março': return 'MAR'
    case 'Abril': return 'ABR'
    case 'Maio': return 'MAI'
    case 'Junho': return 'JUN'
    case 'Julho': return 'JUL'
    case 'Agosto': return 'AGO'
    case 'Setembro': return 'SET'
    case 'Outubro': return "OUT"
    case 'Novembro': return "NOV"
    case 'Dezembro': return "DEZ"
  }
}