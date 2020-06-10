import { MenuItem } from '@blueprintjs/core'
import { ItemRenderer } from '@blueprintjs/select'
import React from 'react'

export interface ITrack {
  track: string
  country: string
}

export const Races: ITrack[] = [
  { track: 'Albert Park Circuit', country: 'Australia' },
  { track: 'Autodromo Enzo e Dino Ferrari', country: 'Italy' },
  { track: 'Autódromo Fernanda Pires da Silva', country: 'Portugal' },
  { track: 'Autódromo Hermanos Rodríguez', country: 'Mexico' },
  { track: 'Algarve International Circuit', country: 'Portugal' },
  { track: 'Autódromo José Carlos Pace', country: 'Brazil' },
  { track: 'Autodromo Nazionale Monza', country: 'Italy' },
  { track: 'Bahrain International Circuit', country: 'Bahrain' },
  { track: 'Baku City Circuit', country: 'Azerbaijan' },
  { track: 'Buddh International Circuit', country: 'India' },
  { track: 'Buriram International Circuit', country: 'Thailand' },
  { track: 'Circuit de Barcelona-Catalunya', country: 'Spain' },
  { track: 'Circuit de Monaco', country: 'Monaco' },
  { track: 'Circuit de Spa-Francorchamps', country: 'Belgium' },
  { track: 'Circuit de Nevers Magny-Cours', country: 'France' },
  { track: 'Circuit Gilles Villeneuve', country: 'Canada' },
  { track: 'Circuit of the Americas', country: 'United States' },
  { track: 'Circuit Paul Ricard', country: 'France' },
  { track: 'Circuit Ricardo Tormo', country: 'Spain' },
  { track: 'Circuit Zandvoort', country: 'Netherlands' },
  { track: 'Circuito de Jerez', country: 'Spain' },
  { track: 'Ciudad del Motor de Aragón', country: 'Spain' },
  { track: 'Dubai Autodrome', country: 'United Arab Emirates' },
  { track: 'Fiorano Circuit', country: 'Italy' },
  { track: 'Fuji Speedway', country: 'Japan' },
  { track: 'Hanoi Street Circuit', country: 'Vietnam' },
  { track: 'Hockenheimring', country: 'Germany' },
  { track: 'Hungaroring', country: 'Hungary' },
  { track: 'Indianapolis Motor Speedway', country: 'United States' },
  { track: 'Istanbul Park', country: 'Turkey' },
  { track: 'Korea International Circuit', country: 'South Korea' },
  { track: 'Kuwait Motor Town', country: 'Kuwait' },
  { track: 'Kymi Ring', country: 'Finland' },
  { track: 'Losail International Circuit', country: 'Qatar' },
  { track: 'Marina Bay Street Circuit', country: 'Singapore' },
  { track: 'Moscow Raceway', country: 'Russia' },
  { track: 'Mugello Circuit', country: 'Italy' },
  { track: 'Nürburgring', country: 'Germany' },
  { track: 'Red Bull Ring', country: 'Austria' },
  { track: 'Sepang International Circuit', country: 'Malaysia' },
  { track: 'Shanghai International Circuit', country: 'China' },
  { track: 'Silverstone Circuit', country: 'United Kingdom' },
  { track: 'Sochi Autodrom', country: 'Russia' },
  { track: 'Suzuka Circuit', country: 'Japan' },
  { track: 'Yas Marina Circuit', country: 'United Arab Emirates' },
]

export const renderTrack: ItemRenderer<ITrack> = (
  race,
  { handleClick, index }
) => {
  return (
    <MenuItem
      label={race.country}
      key={index}
      onClick={handleClick}
      text={race.track}
    />
  )
}
