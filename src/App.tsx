import * as React from "react";
import {
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme
} from "@material-ui/core";

import MobileBar from "./components/MobileBar";

import "./styles.css";

const App = () => {
  const theme = useTheme();
  const matchesMobileDisplay = useMediaQuery(theme.breakpoints.down("xs"));

  // https://stackoverflow.com/questions/22777734/what-is-initial-scale-user-scalable-minimum-scale-maximum-scale-attribute-in
  // https://stackoverflow.com/questions/2568760/is-it-possible-to-use-javascript-to-change-the-meta-tags-of-the-page
  const requestDesktopView = () => {
    const defaultViewport =
      "width=device-width,initial-scale=1,shrink-to-fit=no";

    if (
      document
        .querySelector('meta[name="viewport"]')
        ?.getAttribute("content") === defaultViewport &&
      matchesMobileDisplay
    ) {
      document
        .querySelector('meta[name="viewport"]')
        ?.setAttribute(
          "content",
          `width=${theme.breakpoints.width(
            "lg"
          )}px,initial-scale=0,shrink-to-fit=yes`
        );
    } else {
      document
        .querySelector('meta[name="viewport"]')
        ?.setAttribute("content", defaultViewport);
    }
  };

  // https://dev.to/timhuang/a-simple-way-to-detect-if-browser-is-on-a-mobile-device-with-javascript-44j3
  const isOnMobileBrowser = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

  return (
    <div className="App">
      {matchesMobileDisplay && <MobileBar />}
      <div style={{ marginTop: matchesMobileDisplay ? "4rem" : "inherit" }}>
        {isOnMobileBrowser && (
          <Button
            variant="contained"
            color="primary"
            onClick={requestDesktopView}
          >
            {matchesMobileDisplay
              ? "Switch to Desktop View"
              : "Switch to Mobile View"}
          </Button>
        )}

        <Typography>
          {matchesMobileDisplay
            ? "This is mobile"
            : isOnMobileBrowser
            ? "This is desktop view"
            : "Desktop Browser"}
        </Typography>

        {!matchesMobileDisplay && (
          <Grid container alignItems="center">
            <Typography>Dekstop Menus</Typography>
            <Button>Test 1</Button>
            <Button>Test 2</Button>
            <Button>Test 3</Button>
            <Button>Test 4</Button>
            <Button>Test 1</Button>
            <Button>Test 2</Button>
            <Button>Test 3</Button>
            <Button>Test 4</Button>
          </Grid>
        )}
      </div>
    </div>
  );
};

export default App;
