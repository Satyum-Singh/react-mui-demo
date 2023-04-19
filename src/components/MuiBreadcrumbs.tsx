import {Box,Breadcrumbs,Link,Typography} from '@mui/material';
import { Stack } from '@mui/system';
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

export const MuiBreadcrumbs = () => {
  return (
    <Stack>
    <Breadcrumbs aria-label="breadcrumbs" separator={<NavigateNextIcon fontSize='small' />}
        maxItems={3}
        itemsAfterCollapse={2}
    >
      <Link underline="none" href="#">

        Home
      </Link>
      <Link underline="none" href="#">
        Catalog
      </Link>
      <Link underline="none" href="#">
        Accessories
      </Link>
      <Typography color='text.primary'>Shoes</Typography>
    </Breadcrumbs>
    </Stack>
  );
}
