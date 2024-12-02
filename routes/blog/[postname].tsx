import DynamicMarkdownItem from "../../islands/DynamicMardownItem.tsx";
import BlogPostRenderer from "../../components/BlogRendererSS.tsx";
import BackButton3D from "../../islands/BackButton3D.tsx";

import { readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { PageProps } from "$fresh/server.ts";

export default function Blog(props: PageProps) {
  const filePath = join(
    Deno.cwd(),
    "posts",
    `${props.params.postname}.md`,
  );
  let content;
  let createdTime;
  let modifiedTime;

  try {
    content = readFileSync(filePath, "utf-8");

    const fileStats = statSync(filePath);
    createdTime = new Date(fileStats.birthtime).toLocaleString();
    modifiedTime = new Date(fileStats.mtime).toLocaleString();
  } catch (_error) {
    return (
    <>
      <h1>Post Not Found</h1>
      <BackButton3D />
    </>);
  }

  // Use the parameter as the title
  const title = props.params.postname.replace(/_/g, " ").toUpperCase();

  // Parse Markdown server-side
  const renderedMarkdown = BlogPostRenderer({ content });
  return (
    <>
        <header class="mb-4">
          <h1 class="text-5xl font-bold mb-2">{title}</h1>
          <p class="text-sm text-gray-600">
            Created: {createdTime} | Last Edited: {modifiedTime}
          </p>
        </header>

        {renderedMarkdown}
        <DynamicMarkdownItem />

        <BackButton3D />

    </>
  );
}
