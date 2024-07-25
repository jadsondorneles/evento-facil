import eventoFacilClientApi from '@/app/_data/clients/eventoFacilClientApi'
import { API_ENDPOINTS } from '@/app/_domain/constantes/apiEndpoints'
import { EventoType } from '@/app/_domain/types/api/EventoType'

export const getEventos = async (): Promise<EventoType[]> => {
  const response = await eventoFacilClientApi({
    method: 'get',
    url: API_ENDPOINTS.eventos,
  })
  return response.data
}

export const salvaEvento = async (evento: EventoType): Promise<EventoType> => {
  const response = await eventoFacilClientApi({
    method: 'post',
    url: API_ENDPOINTS.eventos,
    data: evento,
  })
  return response.data
}

export const atualizaEvento = async (id: number, evento: Partial<EventoType>): Promise<EventoType> => {
  const response = await eventoFacilClientApi({
    method: 'put',
    url: API_ENDPOINTS.evento(id),
    data: evento,
  })
  return response.data
}

export const deletaEvento = async (id: number): Promise<void> => {
  await eventoFacilClientApi({
    method: 'delete',
    url: API_ENDPOINTS.evento(id),
  })
}
