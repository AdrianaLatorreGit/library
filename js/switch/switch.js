let dia = 'sexta-feira'

let fimDeSemana = dia =>{
    switch(dia){
        case 'sexta-feira':
            return ('Bom fim de semana!')
            break
            case 'segunda-feira':
                return ('Boa semana!')
                break
                default:
                    return('Bom dia!')
                   
    }return

}
console.log(fimDeSemana(dia))