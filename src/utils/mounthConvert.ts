
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

export function mounthToNumber(mounth: string) {
  switch (mounth) {
    case 'Janeiro': return '01'
    case 'Fevereiro': return '02'
    case 'Março': return '03'
    case 'Abril': return '04'
    case 'Maio': return '05'
    case 'Junho': return '06'
    case 'Julho': return '07'
    case 'Agosto': return '08'
    case 'Setembro': return '09'
    case 'Outubro': return "10"
    case 'Novembro': return "11"
    case 'Dezembro': return "12"
  }
}