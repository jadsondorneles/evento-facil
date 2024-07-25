import { Dayjs } from 'dayjs'

export type EventoFormData = {
  cor?: string
  dataFimEvento: Dayjs | null
  dataInicioEvento: Dayjs | null
  descricao: string | null
  horaFimEvento: Dayjs | null
  horaInicioEvento: Dayjs | null
  titulo: string
}
