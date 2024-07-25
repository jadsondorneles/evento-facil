import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import calendar from 'dayjs/plugin/calendar'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import relativeTime from 'dayjs/plugin/relativeTime'
import timezone from 'dayjs/plugin/timezone'
import updateLocale from 'dayjs/plugin/updateLocale'
import utc from 'dayjs/plugin/utc'

export type { Dayjs } from 'dayjs'

dayjs.extend(localizedFormat)
dayjs.extend(customParseFormat)
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(isSameOrBefore)
dayjs.extend(relativeTime)
dayjs.extend(updateLocale)
dayjs.extend(calendar)

// Define a localização para pt-br
dayjs.locale('pt-br')

// Define o fuso horário padrão
dayjs.tz.setDefault('America/Sao_Paulo')

export default dayjs
