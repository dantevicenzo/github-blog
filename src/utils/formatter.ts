import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function getFormattedDateWithSuffix(dateISOString: string) {
  return formatDistanceToNow(new Date(dateISOString), {
    locale: ptBR,
    addSuffix: true,
  })
}
