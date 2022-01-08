import styled from 'styled-components';

import {
  colStartName,
  colEndName,
  columnsCount,
} from 'components/styled/vars/grid';

import { gridColumns } from 'components/styled/mixins/grid';
import { devices } from 'components/styled/mixins/devices';

export const Container = styled.div`
  display: grid;
  grid-auto-rows: minmax(min-content, max-content);

  ${gridColumns('15px')}

  ${devices.mobile} {
    ${gridColumns('25px')}
  }

  ${devices.tablet} {
    ${gridColumns('calc(50vw - 480px)')}
  }

  ${devices.desktopSm} {
    ${gridColumns('calc(50vw - 590px)')}
  }

  ${devices.desktopMd} {
    ${gridColumns('calc(50vw - 700px)')}
  }
`;

export const FluidContainer = styled.div`
  grid-template-columns: repeat(
    ${columnsCount},
    ${colStartName} 1fr ${colEndName}
  );
`;
