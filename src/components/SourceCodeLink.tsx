import React from 'react';
import { SourceCode, getProviderIcon } from 'lib/sourceCode';

interface Props {
  sourceCode: SourceCode;
}

export default function SourceCodeLink({ sourceCode }: Props) {
  const { url, display, provider } = sourceCode;
  const Icon = provider && getProviderIcon(provider);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-[0.4rem] px-2 py-1 bg-tag-background hover:bg-panel-light !text-prose text-sm rounded-full cursor-pointer transition"
    >
      {Icon && <Icon />}
      <span>{display}</span>
    </a>
  );
}
