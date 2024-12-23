// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_middleware from "./routes/_middleware.tsx";
import * as $api_joke from "./routes/api/joke.ts";
import * as $blog_postname_ from "./routes/blog/[postname].tsx";
import * as $cube from "./routes/cube.tsx";
import * as $index from "./routes/index.tsx";
import * as $BackButton3D from "./islands/BackButton3D.tsx";
import * as $CopyableCodeBlock from "./islands/CopyableCodeBlock.tsx";
import * as $DynamicLayout from "./islands/DynamicLayout.tsx";
import * as $DynamicMarkdownItem from "./islands/DynamicMarkdownItem.tsx";
import * as $ResizeDetector from "./islands/ResizeDetector.tsx";
import * as $SiteNav from "./islands/SiteNav.tsx";
import * as $SiteNavNarrow from "./islands/SiteNavNarrow.tsx";
import * as $SpinningCube from "./islands/SpinningCube.tsx";
import type { Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/_middleware.tsx": $_middleware,
    "./routes/api/joke.ts": $api_joke,
    "./routes/blog/[postname].tsx": $blog_postname_,
    "./routes/cube.tsx": $cube,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/BackButton3D.tsx": $BackButton3D,
    "./islands/CopyableCodeBlock.tsx": $CopyableCodeBlock,
    "./islands/DynamicLayout.tsx": $DynamicLayout,
    "./islands/DynamicMarkdownItem.tsx": $DynamicMarkdownItem,
    "./islands/ResizeDetector.tsx": $ResizeDetector,
    "./islands/SiteNav.tsx": $SiteNav,
    "./islands/SiteNavNarrow.tsx": $SiteNavNarrow,
    "./islands/SpinningCube.tsx": $SpinningCube,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
