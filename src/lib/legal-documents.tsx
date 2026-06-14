import fs from "node:fs";
import path from "node:path";

type LegalDocumentName = "kebijakan privasi" | "syarat layanan";

type Block =
  | { type: "h1" | "h2" | "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul" | "ol"; items: string[] };

const rootDir = process.cwd();

export function readLegalDocument(name: LegalDocumentName) {
  const filePath = path.join(rootDir, name);
  return fs.readFileSync(filePath, "utf8");
}

export function parseSimpleMarkdown(raw: string): Block[] {
  const blocks: Block[] = [];
  const lines = raw.replace(/\r\n/g, "\n").split("\n");
  let paragraph: string[] = [];
  let list: { type: "ul" | "ol"; items: string[] } | null = null;

  function flushParagraph() {
    if (paragraph.length > 0) {
      blocks.push({ type: "p", text: paragraph.join(" ") });
      paragraph = [];
    }
  }

  function flushList() {
    if (list) {
      blocks.push(list);
      list = null;
    }
  }

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      flushParagraph();
      flushList();
      continue;
    }

    const heading = line.match(/^(#{1,3})\s+(.*)$/);
    if (heading) {
      flushParagraph();
      flushList();
      const level = heading[1].length;
      blocks.push({ type: level === 1 ? "h1" : level === 2 ? "h2" : "h3", text: heading[2] });
      continue;
    }

    const unordered = line.match(/^\*\s+(.*)$/);
    if (unordered) {
      flushParagraph();
      if (!list || list.type !== "ul") {
        flushList();
        list = { type: "ul", items: [] };
      }
      list.items.push(unordered[1]);
      continue;
    }

    const ordered = line.match(/^\d+\.\s+(.*)$/);
    if (ordered) {
      flushParagraph();
      if (!list || list.type !== "ol") {
        flushList();
        list = { type: "ol", items: [] };
      }
      list.items.push(ordered[1]);
      continue;
    }

    flushList();
    paragraph.push(line);
  }

  flushParagraph();
  flushList();

  return blocks;
}

function InlineText({ text }: { text: string }) {
  const normalized = text.replace(/\*\*/g, "");
  const mailMatch = normalized.match(/\[([^\]]+)\]\(mailto:([^)]+)\)/);

  if (!mailMatch) {
    return <>{normalized}</>;
  }

  const before = normalized.slice(0, mailMatch.index);
  const after = normalized.slice((mailMatch.index ?? 0) + mailMatch[0].length);

  return (
    <>
      {before}
      <a href={`mailto:${mailMatch[2]}`}>{mailMatch[1]}</a>
      {after}
    </>
  );
}

export function LegalDocument({ raw }: { raw: string }) {
  const blocks = parseSimpleMarkdown(raw);

  return (
    <article className="legal-document">
      {blocks.map((block, index) => {
        if (block.type === "h1") {
          return <h1 key={index}>{block.text}</h1>;
        }

        if (block.type === "h2") {
          return <h2 key={index}>{block.text}</h2>;
        }

        if (block.type === "h3") {
          return <h3 key={index}>{block.text}</h3>;
        }

        if (block.type === "p") {
          return (
            <p key={index}>
              <InlineText text={block.text} />
            </p>
          );
        }

        if (block.type === "ol") {
          return (
            <ol key={index}>
              {block.items.map((item) => (
                <li key={item}>
                  <InlineText text={item} />
                </li>
              ))}
            </ol>
          );
        }

        if (block.type === "ul") {
          return (
            <ul key={index}>
              {block.items.map((item) => (
                <li key={item}>
                  <InlineText text={item} />
                </li>
              ))}
            </ul>
          );
        }

        return null;
      })}
    </article>
  );
}
