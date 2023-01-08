import React, { FC } from 'react'
import { SortButtonProps, SortOrder } from '../types'
import { Button } from './components'

const SortButton: FC<SortButtonProps> = ({ column, order, onSelect }) => {
  let img =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADYElEQVRoQ+2aS2/TQBDHZ9apAPFI7Gwq8RAUEHAvcCktoBTRooKKhAqIzwIn+CrACYGAFolHeFTiIdEjcOHNpTTrRw4FgewdtO6miiKntRMHiGTfNl7vzG9mdmPvfxG6dHHO90sprxMRGoZxXggx1w1T2I1BQ+eJ7gOApcevIcCYbduv0raXOoB2/gEAmE3O1oDohOM4L9KESBXAsqwhQryHAJuinCSiRYOxk0KIJ2lBpAZgmuYwIM4g4saVnNMQp4QQj9OASAWAc340kPIuIq4PnSJaIKLnyNjpsCnlLUQcAsT+pdu0SIxNeEI87RSiY4BCqXQYg2AaETc0OD+KjJ0DgIvawSsIcFUSPULELRriB0OctG37YScQHQEUOD+CUirnw8hLou8MYNRxnDdWsXi5EcCx7Uuc832BlJUGiJ8IMOk4jpr0bV1tA1iWNUYANxFxnY7oPC45/1a1owDU75zzvQFRBQG2qjYC/JKIU64Qd9ohaAvAsqxx7fxabfSbwVi5Wq2+rzvRCkDdLxQKA8ww1CQe0P1/M8QpIcTtpBCJAUzOJxjRDQJYo419DQyjXFtY+NBofCUA1S/f37/bCIIKAGxvyMQZV4jpJBCJAaxiUQBAURv5HPh+uVarfWo2uhpACJHP7zRyOQURZgIBqrZthytV3CsxgGmac8jYIBB9lFKWPc/7EmUsDoAupx2MsQog7gKi147jHIzrvIZO0j2s3wLmcsMQBLOu69ZaPR0XQEPEGjPKVuIMxMVNAhB3zAwgSaSyDMSMVjYH0liFYgY7sluWgSwDndTP0utHd65sGY0Z1ywD2SSOWSqtumUllJVQVkIdRiAroQ4DmHgV0h/1I+T7s57neWlkIJ/Pm319fSO+7z9bacxUvom7ua1CUs65rnsgSVISZ8DivApEXBvpwY2tXt9aVJFv3twlonmGWLZt+109/Su9TpdKpT2+2mYH2Kb7/73N3WUHLes4ASjlpfe21+sQWuBQ0lKozvSUwLEMES0xHUPGzkZITEqd2ayeJaJ/LzE1ZWJZaooj8qUltyZeRlut0aZpHgLGZlppxPXn/kuZtWFi967QXYeIOCdRv6WOGow7jvMyyT/tan1TK6FGQ5zzQX3Yoy5F9c5hj8ZM+FJeU+0cYxe6ddzmDwYMZE958LD/AAAAAElFTkSuQmCC'
  if (order === SortOrder.asc) {
    img =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABs0lEQVRoQ+2ZS0rEQBRFT+MCFFREBEeKCIIuQAQn4nekm9GJOtH9qAP/H9Q9OHCmS1BHDuRCNcQmlU7q0xB4bxZCqu6579YjJB1aXp2W68cAKjo4A1y6++vAe45u5+zAPnDiRB8Ap20DOAIOnehjQNfJK2cHDKBOu6wDFS5ZhCxCdRywCEW6ZFPIImQRinTAIhRpoE0hi5BFKNIBi1CkgTaFLEIWoUgHLEKRBoZOoRFgD3gB3jwa6n5WmQQ2gSvgsylPKMA5sA18A1vAU8nGdQDmgDtgyhkxPyiAe2DVbeaD6AcgsRKvDqg+gOlBAejb/6NzTnuWQVQBLAC3wIQT/AVsuEg2YgiNkDaZBR4KED/ADqDuqHwAi8ANMF7ooOIoQxpXDEA/iDKAJSd+zCkVtM5QkHitEQtQBbHS84PjDLgGRgvi5by6GFwpAMogdCZegTWn7AJYBjR+Vcq8RudzsHL3YCqAMgifNsUm2vnu4ikB6kAkFZ/qDPQ63TuduveTi88F4DvYyWJTdCx1hIprqxP60T0M7HpeN2LPcJIxWiVCBg0Bv9FKPQvk7EAuzf/WbT3AH5W9gjEdH9XZAAAAAElFTkSuQmCC'
  } else if (order === SortOrder.desc) {
    img =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABmUlEQVRoQ+2ZPUoEQRCFv72CfwgaGBiY6QUMBBVDAzE008jrmGjkEURQEEEDjRR/7qFibCQFNTC0023PVPfCQm2y7DI7/b5Xr2qb6RET/hpNuH4cIFHBBeACmAL2gJca1a5VgUXgDlhW0d/ANvBUGqIGQCi+0VwFojRATHw1iJIA/4mvAlEKQBr2vpX5H+AK2FXVj8AKMK2fv4BN4NXaEyUAQudF/D4wB5yqwDPgBLgFZlqNvQU8WyCsADHxMj4PA4AjYLU0hAUgJV5M7QKQ74tCDAXoyrz8WV224hADkEvWtBJNT3xqT7z1jdNQgGtgRxeTzIfiUxVoNIYQ7wrWi2EowA0gDRgTnwMQVuIBWO+lHgZv5uaBA90uxLYHqQi1dS4BGxq/j3EB5KyTC5Bzr+g1QyOUs6gD5LjkFUi45BHyCOU44BEyuuRTyCPkETI64BEyGuhTyCPkETI64BEyGuhTyCPkETI64BEyGlhzCsmz03PVJ6czx0atnT+vCTALyFNseZezMtNRUgy+JkANw//c0wHGYnNikV+TUoEx8ceAFgAAAABJRU5ErkJggg=='
  }

  const handleSelect = () => {
    onSelect(column)
  }

  return (
    <Button
      onClick={handleSelect}
      className={order !== null ? 'active' : ''}
      title={
        order !== null
          ? order === SortOrder.asc
            ? 'Ascending'
            : 'Descending'
          : ''
      }
    >
      <img
        src={img}
        alt={
          order !== null
            ? order === SortOrder.asc
              ? 'Ascending'
              : 'Descending'
            : 'Sort'
        }
      />
    </Button>
  )
}

export default SortButton
