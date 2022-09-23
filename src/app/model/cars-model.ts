export interface CarsModel {
  id: number | string
  placa: string
  chassi: number
  renavam: number
  modelo: string
  marca: string
  ano: number
  urlImg: string
  detalhes?:CarsDetail
}

export interface CarsDetail {
  motorizacao: number
  cambio: string
  potência: number
  direção: number
}
