/** @jsx jsx */
import { jsx, Grid } from "theme-ui";

const Chocolate = ({ children }) => (
  <Grid
    gap={3}
    columns={[
      `minmax(100px, 1fr)`,
      `minmax(100px, 1fr) minmax(100px, 1fr)`,
      `minmax(100px, 1fr) minmax(100px, 1fr) minmax(100px, 1fr)`,
    ]}
    sx={{
      "& > * > * > img": {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center",
      },
      mb: 4,
    }}
  >
    {children}
  </Grid>
);

export default Chocolate;
