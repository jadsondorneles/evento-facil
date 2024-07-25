import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'
import { ptBR } from '@mui/x-date-pickers/locales'

import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import { Control, Controller, FieldValues } from 'react-hook-form'

dayjs.extend(utc)
dayjs.extend(timezone)

interface ControlledDateTimePickerProps {
  control: unknown
  disabled?: boolean
  label: string
  name: string
  type: 'date' | 'time'
}

const DateTimePicker: React.FC<ControlledDateTimePickerProps> = ({ control, name, label, type, disabled }) => {
  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      adapterLocale='pt-br'
      localeText={ptBR.components.MuiLocalizationProvider.defaultProps.localeText}
    >
      <Controller
        defaultValue={null}
        name={name}
        control={control as Control<FieldValues, unknown>}
        rules={{ required: `${label} é obrigatório` }}
        render={({ field: { onChange, value }, fieldState: { error } }) =>
          type === 'date' ? (
            <DatePicker
              value={value}
              onChange={(newValue) => onChange(newValue)}
              label={label}
              disabled={disabled}
              slotProps={{
                textField: {
                  error: !!error,
                  helperText: error ? error.message : null,
                  fullWidth: true,
                  disabled,
                },
              }}
            />
          ) : (
            <TimePicker
              value={value}
              onChange={(newValue) => onChange(newValue)}
              ampm={false}
              label={label}
              disabled={disabled}
              slotProps={{
                textField: {
                  error: !!error,
                  helperText: error ? error.message : null,
                  fullWidth: true,
                  disabled,
                },
              }}
            />
          )
        }
      />
    </LocalizationProvider>
  )
}

export default DateTimePicker
